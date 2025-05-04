const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const auth = require("../middlewares/authMiddleware");

/**
 * @swagger
 * /auth/register:
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
router.post("/register", authController.register);

/**
 * @swagger
 * /auth/login:
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
router.post("/login", authController.login);
/**
 * @swagger
 * /auth/user:
 *   get:
 *     summary: Get current user
 *     tags: [Auth]
 */
router.get("/user", auth, authController.user);

module.exports = router;
