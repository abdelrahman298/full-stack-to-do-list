"use server";

import prisma from "@/lib/prisma";

export const getAllTodoActions = async () => {
  const todos = await prisma.todo.findMany();
  return todos;
};
export const createTodoActions = async ({
  title,
  body,
  completed,
}: {
  title: string;
  body: string | undefined;
  completed: boolean | undefined;
}) => {
  return prisma.todo.create({
    data: {
      title,
      body,
      completed,
    },
  });
};

export const deleteTodoActions = async () => {};

export const updateTodoActions = async () => {};
