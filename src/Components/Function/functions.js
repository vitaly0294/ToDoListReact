import { keyTodoData } from "../constants";

export const getTodoData = () => JSON.parse(localStorage.getItem(keyTodoData)) || [];

export const getRandomKey = () =>  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);