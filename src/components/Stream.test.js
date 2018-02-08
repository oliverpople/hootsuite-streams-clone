import React from 'react';
import { shallow } from 'enzyme';
import Stream from './Stream';

describe('Stream', () => {
  const stream = shallow(<Stream />)

  it('renders properly', () => {
    expect(stream.toMatchSnapshot);
  });

});
