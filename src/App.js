// import logo from './logo.svg';
import { Header } from "./Components/Header";
import { Conteiner } from "./Components/Container/Conteiner";

import { useHeaderInputValue } from "./Components/Hooks/useHeaderInputValue";
import { useTodoData } from "./Components/Hooks/useTodoData";
import { useLocalStorage } from "./Components/Hooks/useLocalStorage";

import { Context } from "./Components/Function/context";



function App() {
  const todoData = useTodoData();
  const inputValue = useHeaderInputValue();
  useLocalStorage(todoData.todoData);

  return (
    <Context.Provider value={{
      inputValue,
      todoData,
    }}>
      <Header/>
      <Conteiner/>
    </Context.Provider>
  );
}

export default App;
