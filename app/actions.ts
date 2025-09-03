"use server";

import prisma from "@/lib/prisma";

export const getAllTodoActions = async () => {
  const todos = await prisma.todo.findMany();
  return todos;
};
export const createTodoActions = async () => {};

export const deleteTodoActions = async () => {};

export const updateTodoActions = async () => {};
