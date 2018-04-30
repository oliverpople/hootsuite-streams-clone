import React, { Component } from 'react';

class StreamItem extends Component {

  render() {
      return (
        <ul>
          {this.props.streamItemsFromParent.map(tweet => <li key={tweet.id}>{tweet.text}</li>)}
        </ul>
      )
  }
}

export default StreamItem;
