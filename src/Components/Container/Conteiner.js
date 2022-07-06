import React, { useContext } from 'react';
import styled from 'styled-components';

import { TodoItem } from './TodoItem';

import { Context } from '../Function/context';

const TodoContainer = styled.div `
  width: 100%;
  float: left;
  padding: 15px;
`;

const TodoList = styled.ul `
  width: 100%;
  float: left;
  
  :after {
    width: 100%;
    display: block;
    text-align: center;
    font-size: 12px;
    color: #aaa;
  }

  :empty:after {
    content: 'Нет задач';
    margin: 15px 0 0 0;
  }
`;

const TodoCompleted = styled.ul `
  position: relative;
  padding: 60px 0 0 0;
  width: 100%;
  float: left;

  :before {
    content: '';
    width: 150px;
    height: 1px;
    background: #d8e5e0;

    position: absolute;
    top: 30px;
    left: 50%;

    margin: 0 0 0 -75px;
  }
  
  :after {
    width: 100%;
    display: block;
    text-align: center;
    font-size: 12px;
    color: #aaa;
  }

  :empty:after {
    content: 'Нет выполненых задач';
  }
`;

export const Conteiner = () => {
  const { todoData: { todoData } } = useContext(Context);

  return (
    <TodoContainer>
      <TodoList id="todo">
        {
          todoData.filter(item => !item.completed).map((item, i) => (
            <TodoItem item={item} key={item.key}/>
          ))
        }
      </TodoList>
      <TodoCompleted id="completed">
        {
          todoData.filter(item => item.completed).map((item, i) => (
            <TodoItem item={item} key={item.key}/>
          ))
        }
      </TodoCompleted>
    </TodoContainer>
  )
}