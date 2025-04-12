const prisma = require("../prisma/prismaClient");
const jwt = require("../utils/jwt");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) return res.status(400).json({ message: "User exists" });

    const hashed = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: { email, password: hashed },
    });

    res.json({ token: jwt.sign(user.id) });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user || !(await bcrypt.compare(password, user.password)))
    return res.status(401).json({ message: "Invalid credentials" });

  res.json({ token: jwt.sign(user.id) });
};
