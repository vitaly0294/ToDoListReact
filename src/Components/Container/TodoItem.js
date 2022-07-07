import React, { useContext } from 'react';
import styled from 'styled-components';
import trashImg from '../../image/trash.png';
import checkImg from '../../image/check.png';
import uncheckImg from '../../image/uncheck.png';

import { Context } from '../Function/context';

const Item = styled.li `
  width: 100%;
  min-height: 50px;
  float: left;
  font-size: 14px;
  font-weight: 500;
  color: #444;
  line-height: 22px;

  background: #fff;
  border-radius: 5px;
  position: relative;
  box-shadow: 0 1px 2px rgba(44, 62, 80, 0.10);
  margin: 0 0 10px 0;
  padding: 14px 100px 14px 14px;
  word-break: break-word;

  :last-of-type {
    margin: 0;
  }
`;

const TextTodo = styled.span ``;

const TodoButtons = styled.div `
  width: 100px;
  height: 50px;

  position: absolute;
  top: 0;
  right: 0;
`;

const TodoRemove = styled.button `
  width: 50px;
  height: 50px;
  float: left;
  background-color: transparent;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  border: 0;
  box-shadow: none;
  outline: none;
  cursor: pointer;

  -webkit-appearance: none;
  -moz-appearance: none;

  background-image: url(${trashImg});

  :last-of-type:before {
    content: '';
    width: 1px;
    height: 30px;
    background: #edf0f1;

    position: absolute;
    top: 10px;
    left: 0;
  }
`;

const TodoComplete = styled.button `
  width: 50px;
  height: 50px;
  float: left;
  background-color: transparent;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  border: 0;
  box-shadow: none;
  outline: none;
  cursor: pointer;

  -webkit-appearance: none;
  -moz-appearance: none;

  background-image: url(${checkImg});

  :last-of-type:before {
    content: '';
    width: 1px;
    height: 30px;
    background: #edf0f1;

    position: absolute;
    top: 10px;
    left: 0;
  }
`;

const TodoNotComplete = styled.button `
  width: 50px;
  height: 50px;
  float: left;
  background-color: transparent;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  border: 0;
  box-shadow: none;
  outline: none;
  cursor: pointer;

  -webkit-appearance: none;
  -moz-appearance: none;

  background-image: url(${uncheckImg});

  :last-of-type:before {
    content: '';
    width: 1px;
    height: 30px;
    background: #edf0f1;

    position: absolute;
    top: 10px;
    left: 0;
  }
`;

export const TodoItem = ({ item }) => {
  const { todoData: { todoData, setTodoData } } = useContext(Context);

  const removeTodoItem = key => {
    const newTodoData = todoData.filter(item => item.key !== key);
    setTodoData(newTodoData);
  }

  const toggleCompleted = key => {
    const newTodoData = todoData.map(item => {
      if (item.key === key) item.completed = !item.completed;
      return item;
    })
    setTodoData(newTodoData);
  }

  return (
    <Item>
      <TextTodo>{item.value}</TextTodo>
      <TodoButtons>
        <TodoRemove onClick={() => removeTodoItem(item.key)}/>

        {item.completed ? 
          <TodoComplete onClick={() => toggleCompleted(item.key)}/> : 
          <TodoNotComplete onClick={() => toggleCompleted(item.key)}/>
        }

      </TodoButtons>
    </Item>
  )
}