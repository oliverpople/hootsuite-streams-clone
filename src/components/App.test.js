import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const app = shallow(<App />);

it('renders correctly', () => {
  expect(app).toMatchSnapshot();
});

it('initialises the `state` with an empty list of streams', () => {
  expect(app.state().streams).toEqual([]);
})

it('adds a new stream to `state` when clicking `add stream` button', () => {
  app.find('.btn-add').simulate('click');

  expect(app.state().streams).toEqual([{ id: 1 }]);
});

it('adds a new stream to the rendered list when clicking the `add stream` button', () => {
  app.find('.btn-add').simulate('click');

  expect(app.find('.stream-list').children().length).toEqual(2);
})
