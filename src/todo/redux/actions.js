import { ADD_TODO, TODO_DONE, FETCH_TODOS, TODOS_FETCHED } from './actionTypes';

export const addTodo = payload => ({
  type: ADD_TODO,
  payload
});

export const todoDone = payload => ({
  type: TODO_DONE,
  payload
});

export const fetchTodos = () => ({
  type: FETCH_TODOS
});

export const todosFetched = payload => ({
  type: TODOS_FETCHED,
  payload
});
