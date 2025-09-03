import prisma from "@/lib/prisma";

export const getAllTodos = async () => {
  const todos = await prisma.todo.findMany();
  return todos;
};
