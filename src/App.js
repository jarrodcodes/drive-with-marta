import React, { Component } from 'react';
import UserDataContainer from './containers/UserDataContainer.js';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <div>
        <p>hi</p>
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/topics">Topics</Link></li>
          </ul>
          <hr />

          <Route exact path="/" component={UserDataContainer} />

        </div>
        
      </Router>
      <div>
        <p>bye</p>
        </div>
      </div>
    )
  }
}

export default App;
