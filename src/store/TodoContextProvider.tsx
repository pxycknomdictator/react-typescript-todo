import { FC } from "react";
import { ChildrenProp } from "../interfaces/todoInterfaces.ts";
import { todoContext } from "./todoContext.ts";

export const TodoContextProvider: FC<ChildrenProp> = ({ children }) => {
  return <todoContext.Provider value={{}}>{children}</todoContext.Provider>;
};
