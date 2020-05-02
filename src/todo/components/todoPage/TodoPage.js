import React from 'react';
import { TodoList } from '../todoList/TodoList';

export const TodoPage = () => {
  return (
    <>
      <h2>To do</h2>
      <TodoList type="undone"></TodoList>

      <h2>Done</h2>
      <TodoList type="done"></TodoList>
    </>
  );
};
