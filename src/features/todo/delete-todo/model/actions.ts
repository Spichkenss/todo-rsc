"use server";

import { revalidatePath } from "next/cache";

import prisma from "@/shared/prisma";

export const deleteTodoAction = async (id: string) => {
  try {
    const removedTodo = await prisma.todo.delete({
      where: { id }
    });

    revalidatePath("/home");
    return new Promise((resolve) => { resolve(removedTodo); });
  } catch (e) {
    return new Promise((resolve, reject) => { reject(e); });
  }
};
