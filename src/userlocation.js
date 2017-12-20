//get user's current location and add it to global state

import React, { Component } from 'react';
import _ from 'lodash';
import Distances from './distances.js';

class UserLocation extends Component {

    constructor() {
        super()
        this.state = {
        }
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition((response) => {
            this.setState({ userLocationObject: response })
        });

    }

    render() {
        console.log('I am userLocation props', this.props);
        console.log('I am userLocation state', this.state);
        let latitude = _.get(this.state, 'userLocationObject.coords.latitude') || 'Loading... Please wait.';
        let longitude = _.get(this.state, 'userLocationObject.coords.longitude') || '';

        return (
            <div>
                <p>Hi there. I have you at {latitude}, {longitude}</p>
                <Distances {...this.state} />
            </div>
        )
    }
}

export default UserLocation;
