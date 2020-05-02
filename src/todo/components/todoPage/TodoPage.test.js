import React from 'react';
import { shallow } from 'enzyme';

import { TodoPage } from './TodoPage';
import { TodoList } from '../todoList/TodoList';

describe('TodoPage tests', () => {
  test('it should render two TodoLists', () => {
    const wrapper = shallow(<TodoPage />);
    expect(wrapper.find(TodoList).length).toBe(2);
  });
});
