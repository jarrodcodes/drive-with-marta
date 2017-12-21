//get user's current location and add it to global state

import React, { Component } from 'react';
import _ from 'lodash';
import Distances from './distances.js';

class UserLocation extends Component {

    constructor() {
        super()
        this.state = {};
    }

    componentWillMount() {
        this.setState({ Loading: true })
        navigator.geolocation.getCurrentPosition((response) => {
            this.setState({ userLocationObject: response })
            this.setState({ Loading: false })
        })

    }


    componentDidMount() {

    }

        render() {
            console.log(this.state)
            return (
                <div>
                {this.state.Loading === true &&
                <h1>{'Welcome to Smarta Commute! Loading...'}</h1>
                }
                {this.state.Loading === false && this.state.userLocationObject.coords.latitude &&
                    <div><h1>{'Welcome to Smarta Commute!'}</h1>
                    <div>Found you at {this.state.userLocationObject.coords.latitude},{this.state.userLocationObject.coords.longitude}
                    <div>
                    <Distances latitude={this.state.userLocationObject.coords.latitude} longitude={this.state.userLocationObject.coords.longitude}></Distances>
                    </div>
                    </div>
                    </div>
                }
                </div>
        )
    }
}

export default UserLocation;
