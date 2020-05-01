import React from 'react';
import { Provider } from 'react-redux';
import { store } from './todo/redux/store';
import { TodoList } from './todo/components/todoList/TodoList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h2>To do</h2>
        <TodoList type="undone"></TodoList>

        <h2>Done</h2>
        <TodoList type="done"></TodoList>
      </div>
    </Provider>
  );
}

export default App;
