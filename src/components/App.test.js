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
