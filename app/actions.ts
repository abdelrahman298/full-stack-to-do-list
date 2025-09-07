"use server";

import prisma from "@/lib/prisma";

export const getAllTodoActions = async () => {
  const todos = await prisma.todo.findMany();
  return todos;
};
export const createTodoActions = async ({
  title,
  body,
}: {
  title: string;
  body: string | undefined;
}) => {
  return prisma.todo.create({
    data: {
      title,
      body,
    },
  });
};

export const deleteTodoActions = async () => {};

export const updateTodoActions = async () => {};
