const prisma = require("../prisma/prismaClient");

exports.getAll = async (req, res) => {
  const todos = await prisma.todo.findMany({ where: { userId: req.user.id } });
  res.json(todos);
};

exports.create = async (req, res) => {
  const text = req.body.text;
  const todo = await prisma.todo.create({
    data: { content: text, userId: req.user.id },
  });
  res.status(201).json(todo);
};
