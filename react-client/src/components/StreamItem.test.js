import React from 'react';
import { shallow } from 'enzyme';
import StreamItem from './StreamItem';

const fs = require("fs");
const mockData = JSON.parse(fs.readFileSync('../express-backend/mock_data/tweet.json', 'utf8'));


describe('StreamItem', () => {
  const mockRemove = jest.fn();
  const props = {streamItemsFromParent: mockData}
  const streamItem = shallow(<StreamItem {...props} />);

  it('renders properly', () => {
    expect(streamItem).toMatchSnapshot();
  });

  it('renders the tweet`s text', () => {
    expect(streamItem.find('img').length).toEqual(1);
  });

});
