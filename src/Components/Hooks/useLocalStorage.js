import { useEffect } from "react";
import { keyTodoData } from "../constants";

export function useLocalStorage(todoData) {
  useEffect(() => {
    localStorage.setItem(keyTodoData, JSON.stringify(todoData));
  }, [todoData]);
}