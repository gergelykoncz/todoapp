import React from 'react';
import { shallow } from 'enzyme';
import { TodoItem } from './TodoItem';

describe('TodoItem tests', () => {
  test('it should render', () => {
    const todo = {
      id: 1,
      name: 'test'
    };
    const wrapper = shallow(<TodoItem todo={todo} setDone={() => {}} />);
    expect(wrapper).toBeDefined();
  });

  test('it shows the DONE text for done items', () => {
    const todo = {
      id: 1,
      name: 'test',
      done: true
    };
    const wrapper = shallow(<TodoItem todo={todo} setDone={() => {}} />);
    expect(wrapper.find('.done').length).toBe(1);
  });

  test('it does not show the DONE text for undone items', () => {
    const todo = {
      id: 1,
      name: 'test',
      done: false
    };
    const wrapper = shallow(<TodoItem todo={todo} setDone={() => {}} />);
    expect(wrapper.find('.done').length).toBe(0);
  });
});
