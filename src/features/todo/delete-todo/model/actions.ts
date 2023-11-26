"use server";

import { revalidatePath } from "next/cache";

import prisma from "@/shared/prisma";

export const deleteTodoAction = async (id: string) => {
  const removedTodo = await prisma.todo.delete({
    where: { id }
  });

  revalidatePath("/home");

  return new Promise((resolve) => { resolve(removedTodo); });
};
