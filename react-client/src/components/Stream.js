import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Stream extends Component {
  constructor() {
    super();

    this.state = { streamItems: [] }
  }

  componentDidMount() {
    fetch('/tweets')
      .then(res => res.json())
      .then(tweets => this.setState({ streamItems: tweets }));
  }

    // .then(tweets => this.setState({
//   streamItems: [...this.state.streamItems, tweets]
// }));

  render() {
    return (
      <div>
      <h1>Tweets</h1>
          <div className='stream-items'>
            {this.state.streamItems.map(tweet =>
              <div key={tweet.id}>{tweet.text}</div>
            )}
        </div>
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
