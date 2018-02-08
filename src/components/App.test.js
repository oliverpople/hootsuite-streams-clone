import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
const app = shallow(<App />);

  it('renders correctly', () => {
    expect(app).toMatchSnapshot();
  });

  it('initialises the `state` with an empty list of streams', () => {
    expect(app.state().streams).toEqual([]);
  });


  describe('when clicking `add-stream` button', () => {

    beforeEach(() => {
      app.find('.btn-add').simulate('click');
    });

    afterEach(() => {
      app.setState({ streams: [] });
    });

    it('adds a new stream to `state` when clicking `add stream` button', () => {
      expect(app.state().streams).toEqual([{ id: 1 }]);
    });

    it('adds a new stream to the rendered list when clicking the `add stream` button', () => {
      expect(app.find('.stream-list').children().length).toEqual(1);
    });

  });

});
