import { Clear } from "./components/Clear.tsx";
import { Input } from "./components/Input.tsx";
import { Update } from "./components/Update.tsx";
import { TodoList } from "./components/TodoList.tsx";

export const App = () => {
  return (
    <main className="w-screen min-h-screen flex items-center justify-center bg-[#f2f4f7]">
      <section className="w-full h-screen c_small:h-auto py-9 c_small:p-7 mx-auto c_small:w-[90%] sm:w-10/12 c_medium:w-[70%] lg:max-w-[750px] bg-white p-4 sm:pt-9 c_small:pb-3 rounded-lg custom_shadow relative">
        <Input />
        <Update />
        <TodoList />
        <Clear />
      </section>
    </main>
  );
};
