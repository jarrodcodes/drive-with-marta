    import React, { Component } from 'react';
    import UserDataContainer from './containers/UserDataContainer.js';
    import About from './containers/About.js';
    import {
      BrowserRouter as Router,
      Route,
      Link
    } from 'react-router-dom'
    import './App.css';

    class App extends Component {

      render() {
        return (
          <div>
          <Router>
            <div>
              <nav className="navbar navbar-expand-md bg-primary navbar-dark">
                <div className="container">
                  <a className="navbar-brand" href="/"><i className="fa d-inline fa-lg fa-train"></i><b className = "app-title">Smarta-Commute</b></a>
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <a className="nav-link" href="/about"><i className="fa d-inline fa-lg"></i>About</a>
                      </li>
                    </ul>
                  </div>
              </nav>
              <Route exact path = "/" component={UserDataContainer} />
              <Route exact path = "/about" component={About} />
            </div>
          </Router>

          <div className="text-white bg-primary footer">
                <div className = "footer-text">
                  <p></p>
                </div>
          </div>
</div >
)
      }
    }

    export default App;