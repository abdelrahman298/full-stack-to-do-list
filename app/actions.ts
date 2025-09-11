"use server";

import { ITodo } from "@/interfaces";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const getAllTodoActions = async () => {
  const todos = await prisma.todo.findMany({
    orderBy: { createdAt: "desc" },
  });
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
  await prisma.todo.create({
    data: {
      title,
      body,
      completed,
    },
  });
  revalidatePath("/");
};

export const deleteTodoActions = async (id: string) => {
  await prisma.todo.delete({
    where: {
      id: id,
    },
  });
  revalidatePath("/");
};

export const updateTodoActions = async ({
  id,
  title,
  body,
  completed,
}: ITodo) => {
  await prisma.todo.update({
    where: {
      id: id,
    },
    data: {
      title,
      body,
      completed,
    },
  });
  revalidatePath("/");
};
