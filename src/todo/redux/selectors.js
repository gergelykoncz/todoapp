import { createSelector } from 'reselect';

export const selectAllTodos = createSelector(
  state => state.todo.todos,
  s => s
);

export const selectTodosByType = type =>
  createSelector(
    selectAllTodos,
    s => s.filter(t => (type === 'done' ? t.done : !t.done))
  );
