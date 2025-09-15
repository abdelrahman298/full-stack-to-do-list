"use server";

import { ITodo } from "@/interfaces";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const getAllUserTodoActions = async (userId: string | null) => {
  try {
    const todos = await prisma.todo.findMany({
      where: {
        userId: userId as string,
      },
      orderBy: { createdAt: "desc" },
    });
    return { success: true, data: todos };
  } catch (error) {
    console.error("Error fetching todos:", error);
    return { success: false, error: error instanceof Error ? error.message : String(error) };
  }
};

export const createTodoActions = async ({
  title,
  body,
  completed,
  userId,
}: {
  title: string;
  body: string | undefined | null;
  completed: boolean | undefined | null;
  userId: string | null;
}) => {
  await prisma.todo.create({
    data: {
      title,
      body,
      completed,
      userId: userId as string,
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
