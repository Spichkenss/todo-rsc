"use client";

import { LucideTrash2 } from "lucide-react";

import { useTodoItemContext } from "@/entities/todos/model/TodoItem.context";

import { Button } from "@/shared/ui/button";

import { deleteTodoAction } from "../model/actions";

export const DeleteTodoButton = () => {
  const { id } = useTodoItemContext();

  const handleDelete = async () => {
    await deleteTodoAction(id);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      type="submit"
      onClick={handleDelete}
    >
      <LucideTrash2 />
    </Button>
  );
};
