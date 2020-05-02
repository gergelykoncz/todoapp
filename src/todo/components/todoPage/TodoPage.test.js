import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import { TodoPage } from './TodoPage';
import { TodoList } from '../todoList/TodoList';

const mockStore = configureMockStore([]);

describe('TodoPage tests', () => {
  test('it should render two TodoLists', () => {
    const store = mockStore({
      todo: { todos: [] }
    });

    const wrapper = mount(
      <Provider store={store}>
        <TodoPage />
      </Provider>
    );

    expect(wrapper.find(TodoList).length).toBe(2);
  });
});
