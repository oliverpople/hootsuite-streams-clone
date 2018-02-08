import React from 'react';
import { shallow } from 'enzyme';
import Stream from './Stream';

describe('Stream', () => {
  const mockRemove = jest.fn();
  const id = 1;
  const props = { stream: { id }, removeStream: mockRemove };
  const stream = shallow(<Stream {...props} />);

  it('renders properly', () => {
    expect(stream.toMatchSnapshot);
  });

  it('initialises the `state` with an empty list of streamItems', () => {
    expect(stream.state().streamItems).toEqual([]);
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
