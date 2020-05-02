import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { TodoList } from '../todoList/TodoList';
import { fetchTodos } from '../../redux/actions';

export const TodoPage = () => {
  const dispatch = useDispatch();

  // Fetch the todos only once
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <>
      <h2>To do</h2>
      <TodoList type="undone"></TodoList>

      <h2>Done</h2>
      <TodoList type="done"></TodoList>
    </>
  );
};
