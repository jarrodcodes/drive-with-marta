import React, { Component } from 'react';
import UserLocation from './userlocation.js'
import Distances from './distances.js'

class App extends Component {
  render() {
    return (
      <div>
      <UserLocation />
      <div>
      <Distances />
      </div>
      </div>
      );
  }
}

export default App;
