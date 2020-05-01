import { ADD_TODO, TODO_DONE } from './actionTypes';

export const addTodo = payload => ({
  type: ADD_TODO,
  payload
});

export const todoDone = payload => ({
  type: TODO_DONE,
  payload
});
