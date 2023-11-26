"use client";

import { createContext, type PropsWithChildren, useContext } from "react";
import { type Todo } from "@prisma/client";

const TodoItemContext = createContext<Todo | null>(null);

interface TodoItemContextProviderProps extends PropsWithChildren {
  item: Todo
}

export const TodoItemContextProvider = ({ children, item }: TodoItemContextProviderProps) => {
  return (
    <TodoItemContext.Provider value={item}>
      {children}
    </TodoItemContext.Provider>
  );
};

export const useTodoItemContext = () => {
  const ctx = useContext(TodoItemContext);
  if (!ctx) throw new Error("Todo item context error");
  return ctx;
};
