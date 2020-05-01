import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { addTodo, todoDone } from '../../redux/actions';
import { selectTodosByType } from '../../redux/selectors';
import { NewTodo } from '../newTodo/NewTodo';
import { TodoItem } from '../todoItem/TodoItem';

import './TodoList.scss';

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

  const classes = classNames('app-todo-list');

  return (
    <>
      <div className={classes}>
        {todos.map(todo => (
          <div key={todo.id} className="app-todo-list-item">
            <TodoItem todo={todo} setDone={setDone}></TodoItem>
          </div>
        ))}

        <NewTodo newTodo={add}></NewTodo>
      </div>
    </>
  );
};

TodoList.propTypes = {
  type: PropTypes.oneOf(['done', 'undone']).isRequired
};
