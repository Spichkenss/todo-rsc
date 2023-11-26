"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

import prisma from "@/shared/prisma";
import { getCurrentUser } from "@/shared/sessions";

const createTodoSchema = z.object({
  task: z.string().min(1, "This field cannot be empty")
});

export const createTodoAction = async (formData: FormData) => {
  const user = await getCurrentUser();

  if (!user) {
    return null;
  }

  const data = Object.fromEntries(formData);
  const newTodoData = createTodoSchema.parse(data);

  const newTodo = await prisma.todo.create({
    data: {
      ...newTodoData,
      userId: user.id
    }
  });

  revalidatePath("/home");

  return new Promise((resolve) => { resolve(newTodo); });
};
