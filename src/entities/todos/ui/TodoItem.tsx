import { type Todo } from "@prisma/client";

import { DeleteTodoButton } from "@/features/todo/delete-todo";
import { deleteTodoAction } from "@/features/todo/delete-todo/model/actions";

import { Typography } from "@/shared/ui/typography";

interface TodoItemProps {
  item: Todo
}

export const TodoItem = ({ item }: TodoItemProps) => {
  const handleDelete = async () => {
    "use server";

    await deleteTodoAction(item.id);
  };

  return (
    <div className="rounded-md border border-border p-4">
      <form
        action={handleDelete}
        className="flex flex-row items-center justify-between"
      >
        <Typography as="h5" className="grow">
          {item.task}
        </Typography>
        <DeleteTodoButton />
      </form>
    </div>
  );
};
