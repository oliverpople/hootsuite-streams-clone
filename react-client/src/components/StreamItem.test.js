import React from 'react';
import { shallow } from 'enzyme';
import StreamItem from './StreamItem';

describe('StreamItem', () => {
  const streamItem = shallow(<StreamItem />);

  it('renders properly', () => {
    expect(streamItem.toMatchSnapshot);
  });

  it('initializes with a media URL and message in `state`', () => {
    expect(streamItem.state()).toEqual({ mediaURL: '', message: '' });
  });

});
