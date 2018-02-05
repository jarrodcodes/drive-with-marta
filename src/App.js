    import React, { Component } from 'react';
    import UserDataContainer from './containers/UserDataContainer.js';
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
              <Route exact path="/" component={UserDataContainer} />
            </div>
          </Router>

          <div className="pt-5 text-white bg-primary footer">
            <div className="container">
              <div className="row">
                <div className="col-md-9">
                  <p className="lead">Sign up to our newsletter for the latest news</p>
                </div>
                <div className="col-4 col-md-1 align-self-center">
                  <a href="https://www.facebook.com" target="_blank"><i className="fa fa-fw fa-facebook fa-3x text-white"></i></a>
                </div>
                <div className="col-4 col-md-1 align-self-center">
                  <a href="https://twitter.com" target="_blank"><i className="fa fa-fw fa-twitter fa-3x text-white"></i></a>
                </div>
                <div className="col-4 col-md-1 align-self-center">
                  <a href="https://www.instagram.com" target="_blank"><i className="fa fa-fw fa-instagram text-white fa-3x"></i></a>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 mt-3 text-center">
                  <p>© Copyright 2017 Pingendo - All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
</div >
)
      }
    }

    export default App;