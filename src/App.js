import React, { Component } from 'react';
import UserLocation from './userlocation.js'
import Distances from './distances.js'

class App extends Component {
  render() {
    return (
      <UserLocation />,
      <Distances />
    );
  }
}

export default App;
