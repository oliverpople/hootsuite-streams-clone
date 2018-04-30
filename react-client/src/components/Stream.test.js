import React from 'react';
import { shallow, mount } from 'enzyme';
import Stream from './Stream';
import sinon from 'sinon';
import { waitForState } from 'enzyme-async-helpers';

const fs = require("fs");
const mockData = fs.readFileSync('../express-backend/mock_data/tweet.json');


describe('Stream', () => {
  const mockRemove = jest.fn();
  const id = 1;
  const props = { stream: { id }, removeStream: mockRemove };
  const stream = shallow(<Stream {...props} />);

  describe('When Stream initialises', () => {
    it('renders properly', () => {
      expect(stream.toMatchSnapshot);
    });

    it('initialises the `state` with an empty list of streamItems', () => {
      expect(stream.state().streamItems).toEqual([]);
    });

    // it('Stream fetches streamItems on mount and sets it to state', async () => {
    //
    //   global.fetch = jest.fn(async () => ({
    //     ok: true,
    //     status: 200,
    //     json: async () => ({
    //       mockData
    //     })
    //   }))
    //
    //   const wrapper = mount(<Stream />);
    //   await waitForState(wrapper, state => state.streamItems.length > 0)
    //      expect(wrapper.instance().state.streamItems.length).toBe([mockData].length)
    // })
  });

  describe('when clicking the `Remove Stream button`', () => {
    beforeEach(() => {
      stream.find('.btn-remove').simulate('click');
    });

    it('calls the removeStream', () => {
      expect(mockRemove).toHaveBeenCalledWith(id);
    });
  });
});
