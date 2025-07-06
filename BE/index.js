const express = require("express");

const authRoutes = require("./routes/authRoutes");
const todoRoutes = require("./routes/todoRoutes");
const cors = require("cors");

const checkEnvs = require("./utils/checkEnvs");
const havingEnvs = checkEnvs();
if (!havingEnvs) {
  throw new Error("Missing env variables. Check .env file.");
}

const app = express();

const setupSwagger = require("./swagger");

app.use(express.json(), cors());
setupSwagger(app);

app.get("/", (req, res) => {
  res.send(
    "Welcome to the ToDo App API. Use /api-docs to see the documentation."
  );
});
app.use("/auth", authRoutes);
app.use("/todos", todoRoutes);

app.listen(3001, () => console.log("Server running on port 3001"));
