import { createContext } from "react";
import { TodoContext } from "../interfaces/todoInterfaces.ts";

const defaultValuesOfTodosContext: TodoContext = {
  todos: [],
  addTodo: () => {},
  deleteTodo: () => {},
  updateTodo: () => {},
};

export const todoContext = createContext<TodoContext>(
  defaultValuesOfTodosContext
);
