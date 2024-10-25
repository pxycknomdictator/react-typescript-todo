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
        return state;
      case dispatchActions.delete:
        return state;
      case dispatchActions.update:
        return state;
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
