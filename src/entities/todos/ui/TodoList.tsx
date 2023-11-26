import { getTodos } from "../model/actions";

import { TodoItem } from "./TodoItem";

export const TodoList = async () => {
  const todos = await getTodos();

  return (
    <div className="flex flex-col gap-2 pt-20">
      {todos.map((todo) => (
        <TodoItem key={todo.id} item={todo} />
      ))}
    </div>
  );
};
