import React from 'react';
import { shallow } from 'enzyme';
import StreamItem from './StreamItem';

const fs = require("fs");
const mockData = fs.readFileSync('../express-backend/mock_data/tweet.json');


describe('StreamItem', () => {
  const props = {streamItemsFromParent: mockData}
  const streamItem = shallow(<StreamItem {...props} />);

  it('renders properly', () => {
    expect(streamItem.toMatchSnapshot);
  });

});
