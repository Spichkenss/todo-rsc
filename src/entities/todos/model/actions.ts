"use server";

import { type Todo } from "@prisma/client";

import prisma from "@/shared/prisma";
import { getCurrentUser } from "@/shared/sessions";

export const getTodos = async () => {
  try {
    const user = await getCurrentUser();
    const todos = await prisma.todo.findMany({
      where:
        { userId: user?.id },
      orderBy: { created_at: "desc" }
    });
    return new Promise<Todo[]>((resolve) => { resolve(todos); });
  } catch (e) {
    return [];
  }
};
