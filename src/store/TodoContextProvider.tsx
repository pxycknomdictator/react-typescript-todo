/* eslint-disable no-case-declarations */
import {
  ChildrenProp,
  Todo,
  InitialState,
  ActionTypes,
} from "../interfaces/todoInterfaces.ts";

import { FC, useReducer } from "react";
import { dispatchActions } from "../utils/constants.ts";
import { todoContext } from "./todoContext.ts";

export const TodoContextProvider: FC<ChildrenProp> = ({ children }) => {
  const initialState: InitialState = {
    todo: [],
  };

  const mainReducerFunction = (state: Todo[], action: ActionTypes): Todo[] => {
    switch (action.type) {
      case dispatchActions.add:
        return [...state, action.payload];
      case dispatchActions.delete:
        const removeTask: Todo[] = state.filter(
          (task) => task.id !== action.payload
        );
        return removeTask;
      case dispatchActions.update:
        const updateState = state.map((task) =>
          task.id === action.payload.id ? { ...task, ...action.payload } : task
        );
        return updateState;
      default:
        return state;
    }
  };

  const [todos, dispatch] = useReducer(mainReducerFunction, initialState);

  return (
    <todoContext.Provider value={{ todos, dispatch }}>
      {children}
    </todoContext.Provider>
  );
};
