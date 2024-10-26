import { Todo } from "./Todo";
import { NoTodo } from "./NoTodo";

export const TodoList = () => {
  return (
    <ul className="mt-8 grid grid-cols-1 gap-y-5">
      <Todo />
      <NoTodo />
    </ul>
  );
};
