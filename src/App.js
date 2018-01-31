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
          <Router>
            <div>
              <nav className="navbar navbar-expand-md bg-primary navbar-dark">
                <div className="container">
                  <a className="navbar-brand" href="#"><i className="fa d-inline fa-lg fa-train"></i><b>Smarta-Commute</b></a>
                  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar2SupportedContent" aria-controls="navbar2SupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
                  <div className="collapse navbar-collapse text-center justify-content-end" id="navbar2SupportedContent">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <a className="nav-link" href="#"><i className="fa d-inline fa-lg fa-bookmark-o"></i> Bookmarks</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#"><i className="fa d-inline fa-lg fa-envelope-o"></i> Contacts</a>
                      </li>
                    </ul>
                    <a className="btn navbar-btn ml-2 text-white btn-secondary"><i className="fa d-inline fa-lg fa-user-circle-o"></i> Sign in</a>
                  </div>
                </div>
              </nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/topics">Topics</Link></li>
              </ul>
              <hr />

              <Route exact path="/" component={UserDataContainer} />

            </div>

          </Router>

          <div className="pt-5 text-white bg-primary">
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