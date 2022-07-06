import React, { useContext } from 'react';
import styled from 'styled-components';
import plusImg from '../image/plus.png';
import { getRandomKey } from './Function/functions';
import { Context } from './Function/context';

const HeaderContent = styled.header `
  width: 100%;
  height: 80px;

  position: fixed;
  padding: 15px;
  top: 0;
  left: 0;
  z-index: 5;

  background-color: steelblue;
  box-shadow: 0 2px 4px rgba(44, 62, 80, 0.15);
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;

const HeaderControl = styled.form``;

const HeaderInput = styled.input `
  width: 100%;
  height: 50px;
  float: left;
  color: #fff;
  font-size: 15px;
  font-weight: 400;
  text-indent: 18px;
  padding: 0 60px 0 0;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 5px 25px 25px 5px;
  border: 0;
  box-shadow: none;
  outline: none;

  -webkit-appearance: none;
  -moz-appearance: none;

  ::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 0.75);
  }

  :-ms-input-placeholder {
    color: rgba(255, 255, 255, 0.75);
  }
`;

const HeaderButton = styled.button `
  width: 50px;
  height: 50px;
  background: transparent url(${plusImg}) no-repeat center/cover;
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 2;

  border-radius: 25px;
  border: 0;
  box-shadow: none;
  outline: none;
  cursor: pointer;

  -webkit-appearance: none;
  -moz-appearance: none;
`;

export const Header = () => {
  const { todoData: { todoData, setTodoData },
          inputValue: { valueInput, setValueInput },
  } = useContext(Context);

  const createNewTodoItem = e => {
    e.preventDefault();
    
    if (valueInput !== '') {
      const newTodo = {
        value: valueInput,
        completed: false,
        key: getRandomKey(),
      }

      setTodoData([...todoData, newTodo]);
      setValueInput('');
    }
  }

  return (
    <HeaderContent>
      <HeaderControl>
        <label><HeaderInput type="text" placeholder="Какие планы?" value={valueInput} onChange={e => setValueInput(e.target.value.trim())}/></label>
        <HeaderButton id="add" onClick={createNewTodoItem}></HeaderButton>
      </HeaderControl>
    </HeaderContent>
  )
}
