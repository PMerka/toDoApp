const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET ?? "test";

exports.sign = (userId) => {
  return jwt.sign({ id: userId }, JWT_SECRET, { expiresIn: "7d" });
};
