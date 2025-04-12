require("dotenv").config();
const express = require("express");
const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authRoutes = require("./routes/authRoutes");
const todoRoutes = require("./routes/todoRoutes");

const app = express();

const setupSwagger = require("./swagger");

app.use(express.json());
setupSwagger(app);

app.use("/auth", authRoutes);
app.use("/todos", todoRoutes);

app.listen(3001, () => console.log("Server running on port 3001"));
