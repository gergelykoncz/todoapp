import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './NewTodo.scss';

export const NewTodo = ({ newTodo }) => {
  const [values, setValues] = useState({ name: '' });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const add = () => {
    newTodo(values.name);
    setValues({ ...values, name: '' });
  };

  const classes = 'app-new-todo';

  return (
    <div className={classes}>
      <input type="text" name="name" onChange={handleInputChange} value={values.name}></input>
      <button onClick={() => add()}>Add Todo</button>
    </div>
  );
};

NewTodo.propTypes = {
  newTodo: PropTypes.func.isRequired
};
