import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, todoDone } from '../redux/actions';
import { selectTodosByType } from '../redux/selectors';
import { NewTodo } from './NewTodo';
import { TodoItem } from './TodoItem';

export const TodoList = ({ type }) => {
  const todos = useSelector(selectTodosByType(type));
  const dispatch = useDispatch();

  const add = name => {
    dispatch(
      addTodo({
        name
      })
    );
  };

  const setDone = e => {
    const { id, value } = e;
    dispatch(
      todoDone({
        id,
        value
      })
    );
  };

  return (
    <>
      <div>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} setDone={setDone}></TodoItem>
        ))}

        <NewTodo newTodo={add}></NewTodo>
      </div>
    </>
  );
};

TodoList.propTypes = {
  type: PropTypes.oneOf(['done', 'undone']).isRequired
};
