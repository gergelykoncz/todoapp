import { combineReducers } from 'redux';
import { ADD_TODO, TODO_DONE, TODOS_FETCHED } from '../actionTypes';
import { getNextId } from '../../../utils/objects';

const initialState = {
  todos: []
};

function TodoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      const { name } = action.payload;
      const nextId = getNextId(state.todos, 'id');
      return {
        ...state,
        todos: [...state.todos, { id: nextId, name }]
      };

    case TODO_DONE:
      const { id, value } = action.payload;
      const targetIndex = state.todos.findIndex(t => t.id === id);

      return {
        ...state,
        todos: state.todos.map((todo, i) => (i === targetIndex ? { ...todo, done: value } : todo))
      };

    case TODOS_FETCHED:
      return {
        ...state,
        todos: action.payload
      };

    default:
      return state;
  }
}

export const rootReducer = combineReducers({ todo: TodoReducer });
