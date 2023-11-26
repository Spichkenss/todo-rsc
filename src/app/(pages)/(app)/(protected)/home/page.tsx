import { CreateTodoForm } from "@/features/todo/create-todo";

import { TodoList } from "@/entities/todos";

const HomePage = () => {
  return (
    <div>
      <div className="container fixed inset-x-0 bg-background">
        <CreateTodoForm />
      </div>
      <TodoList />
    </div>
  );
};

export default HomePage;
