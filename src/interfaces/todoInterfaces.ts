import { ReactNode } from "react";
import { dispatchActions } from "../utils/constants";

interface ChildrenProp {
  children: ReactNode;
}

interface InitialState {
  todo: Todo[];
}

interface Todo {
  id: string;
  task: string;
  isCompleted?: boolean;
  createdAt?: Date;
}

interface TodoContext {
  todos: Todo[];
  dispatch: () => void;
}

type ActionTypes =
  | { type: dispatchActions.add; payload: Todo }
  | { type: dispatchActions.update; payload: Todo }
  | { type: dispatchActions.delete; payload: string };

export type { Todo, TodoContext, ChildrenProp, InitialState, ActionTypes };
