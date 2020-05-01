import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import App from './App';
import { TodoList } from './todo/components/todoList/TodoList';

describe('App tests', () => {
  test('it should contain the store Provider', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Provider).length).toBe(1);
  });

  test('it should render two TodoLists', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(TodoList).length).toBe(2);
  });
});
