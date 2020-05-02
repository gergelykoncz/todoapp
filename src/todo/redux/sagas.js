import { call, put, takeEvery } from 'redux-saga/effects';
import { todosFetched } from './actions';
import { FETCH_TODOS } from './actionTypes';

function* fetchTodos() {
  // Simulate an api request
  const results = [{ id: 1, name: 'Take out trash' }, { id: 2, name: 'Learn React' }];
  yield put(todosFetched(results));
}

export function* fetchTodoSaga() {
  yield takeEvery(FETCH_TODOS, fetchTodos);
}
