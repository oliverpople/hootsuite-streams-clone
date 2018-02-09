import React from 'react';
import { shallow } from 'enzyme';
import StreamItem from './StreamItem';

describe('StreamItem', () => {
  const streamItem = shallow(<StreamItem />);

  it('renders properly', () => {
    expect(streamItem.toMatchSnapshot);
  });

});
