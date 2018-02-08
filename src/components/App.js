import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class App extends Component {
  constructor() {
      super();

      this.state = { streams: [] };
  }

addStream = () => {
  const { streams } = this.state;

  const ids = this.state.streams.map(stream => stream.id)

  const max_id = ids.length > 0 ? Math.max(...ids) : 0;

  streams.push({ id: max_id+1 });

  this.setState({ streams });

}

  render() {
    return (
      <div>
        <h2>Hootsuite Streams</h2>
        <Button className='btn-add' onClick={this.addStream}>Add Stream</Button>
      </div>
    )
  }
}

export default App;
