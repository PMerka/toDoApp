require("dotenv").config();
const express = require("express");
const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();

const setupSwagger = require("./swagger");

const prisma = new PrismaClient();

app.use(express.json());
setupSwagger(app);

/**
 * @swagger
 * /register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 */
app.post("/register", async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await prisma.user.create({
      data: { email, password: hashedPassword },
    });
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: "User already exists" });
  }
});

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Login user
 *     description: Logins user based on email and password
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User registered successfully
 *       400:
 *         description: User already exists
 */
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const token = jwt.sign({ userId: user.id }, "secretkey", { expiresIn: "1h" });
  res.json({ token });
});

// Middleware for Authentication
const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: "Unauthorized" });

  try {
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, "secretkey");
    req.userId = decoded.userId;
    next();
  } catch {
    res.status(401).json({ error: "Invalid token" });
  }
};

// Get Todos (Authenticated)
app.get("/todos", authMiddleware, async (req, res) => {
  const todos = await prisma.todo.findMany({ where: { userId: req.userId } });
  res.json(todos);
});

// Create Todo
app.post("/todos", authMiddleware, async (req, res) => {
  const { content } = req.body;
  const todo = await prisma.todo.create({
    data: { content, userId: req.userId },
  });
  res.json(todo);
});

app.listen(3001, () => console.log("Server running on port 3001"));
