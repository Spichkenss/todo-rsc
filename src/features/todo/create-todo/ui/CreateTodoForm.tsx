"use client";

import { useRef } from "react";

import { CreateTodoButton } from "@/features/todo/create-todo/ui/CreateTodoButton";

import { Input } from "@/shared/ui/input";

import { createTodoAction } from "../model/actions";

export const CreateTodoForm = () => {
  const ref = useRef<HTMLFormElement>(null);

  const handleCreateTodo = async (formData: FormData) => {
    await createTodoAction(formData);
    ref?.current?.reset();
  };

  return (
    <form
      action={handleCreateTodo}
      className="flex flex-row items-center gap-2 pt-2"
      ref={ref}
    >
      <Input
        id="task"
        name="task"
        type="text"
        placeholder="Write a new task..."
        className="h-11 text-xl"
        required
      />
      <CreateTodoButton />
    </form>
  );
};
