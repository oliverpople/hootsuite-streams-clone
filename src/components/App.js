import React, { Component } from 'react';

class App extends Component {
  constructor() {
      super();

      this.state = { streams: [] };
  }


  render() {
    return (
      <div>
        <h2>Hootsuite Streams</h2>
      </div>
    )
  }
}

export default App;
