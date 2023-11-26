"use client";

import { useRef } from "react";

import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";

import { createTodoAction } from "../model/actions";

export const CreateTodoForm = () => {
  const ref = useRef<HTMLFormElement>(null);

  const handleCreateTodo = async (formData: FormData) => {
    ref.current?.reset();
    await createTodoAction(formData);
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
      />
      <Button type="submit" size="lg">Create</Button>
    </form>
  );
};
