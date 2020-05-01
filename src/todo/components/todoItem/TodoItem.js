import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './TodoItem.scss';

export const TodoItem = ({ todo, setDone }) => {
  const handleCheckbox = e => {
    setDone({ id: todo.id, value: e.target.checked });
  };

  const classes = classNames('app-todo-item', {
    'app-todo-item-done': todo.done
  });

  return (
    <>
      <div className={classes}>
        {todo.name}
        <input type="checkbox" onChange={handleCheckbox} checked={todo.done}></input>
      </div>
    </>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    done: PropTypes.bool
  })
};
