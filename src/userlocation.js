//get user's current location and add it to global state

import React, { Component } from 'react';
import _ from 'lodash';

class UserLocation extends Component {

    constructor() {
        super()
        this.state={
        }
    }

    componentDidMount() {
        let self = this;
        navigator.geolocation.getCurrentPosition((response) => {
            self.setState({events: response})
          });

    }

    render() {
        let currentState = this.state
        let latitude = _.get(currentState, 'events.coords.latitude') || 'Loading... Please wait.';
        let longitude = _.get(currentState, 'events.coords.longitude') || '';
        let gps = {latitude,longitude};
        console.log(gps)
        
        return (
            <p>Hi there. I have you at {latitude}, {longitude}</p>
        )
    }
}

export default UserLocation;
