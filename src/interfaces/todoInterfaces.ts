import { ReactNode } from "react";

interface ChildrenProp {
  children: ReactNode;
}

interface Todo {
  id: string;
  task: string;
  isCompleted: boolean;
  createdAt?: Date;
}

interface TodoContext {
  todos: Todo[];
  addTodo: (newTodo: Todo) => void;
  updateTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

export type { Todo, TodoContext, ChildrenProp };
