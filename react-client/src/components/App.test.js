import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
const app = shallow(<App />);
const id = 1;

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

    it('adds a new stream to `state`', () => {
      expect(app.state().streams).toEqual([{ id }]);
    });

    it('adds a new stream to the rendered list', () => {
      expect(app.find('.stream-list').children().length).toEqual(1);
    });

    it('adds a new Stream component', () => {
      expect(app.find('Stream').exists()).toBe(true);
    });

    describe('when removing added Stream', () => {
      beforeEach(() => {
        app.instance().removeStream(id);
      });

      it('removes the Stream from `state`', () => {
        expect(app.state().streams).toEqual([]);
      });
    });
  });
});
