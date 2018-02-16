import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Stream extends Component {
  constructor() {
    super();

    this.state = { streamItems: [] }
  }

  render() {
    return (
      <div>
        <Button
          className='btn-remove'
          onClick={() => this.props.removeStream(this.props.stream.id)}
        >
        Remove Stream
        </ Button>
      </div>
    )
  }

}

export default Stream;
