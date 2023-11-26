import { type Todo } from "@prisma/client";

import { DeleteTodoButton } from "@/features/todo/delete-todo";

import { Typography } from "@/shared/ui/typography";

import { TodoItemContextProvider } from "../model/TodoItem.context";

interface TodoItemProps {
  item: Todo
}

export const TodoItem = ({ item }: TodoItemProps) => {
  return (
    <TodoItemContextProvider item={item}>
      <div className="rounded-md border border-border p-4">
        <div className="flex flex-row items-center justify-between">
          <Typography
            as="h5"
            className="grow"
          >
            {item.task}
          </Typography>
          <DeleteTodoButton />
        </div>
      </div>
    </TodoItemContextProvider>
  );
};
