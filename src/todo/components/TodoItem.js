import React from 'react';
import PropTypes from 'prop-types';

export const TodoItem = ({ todo, setDone }) => {
  const handleCheckbox = e => {
    setDone({ id: todo.id, value: e.target.checked });
  };

  return (
    <>
      <div>
        {todo.name}
        {todo.done ? <>DONE</> : null}
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
