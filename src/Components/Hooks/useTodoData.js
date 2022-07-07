import { useState } from "react";
import { getTodoData } from "../Function/functions";

const startTodoData = getTodoData();

export function useTodoData() {
  const [todoData, setTodoData] = useState(startTodoData);

  return { todoData, setTodoData };
}