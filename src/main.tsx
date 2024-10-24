import { createRoot } from "react-dom/client";
import { TodoContextProvider } from "./store/TodoContextProvider.tsx";
import { App } from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <TodoContextProvider>
    <App />
  </TodoContextProvider>
);
