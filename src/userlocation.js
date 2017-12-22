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
        let options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
          };
        this.setState({ Loading: true })
        navigator.geolocation.getCurrentPosition((response, options) => {
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
                {_.get(this.state, 'Loading') === true &&
                <h1>{'Welcome to Smarta Commute! Loading...'}</h1>
                }
                {_.get(this.state, 'Loading') === false && _.get(this.state , 'userLocationObject.coords.latitude') &&
                    <div><h1>{'Welcome to Smarta Commute!'}</h1>
                    <div>Found you at {_.get(this.state, 'userLocationObject.coords.latitude')},{_.get(this.state,'userLocationObject.coords.longitude')}
                    <div>
                    <Distances latitude={_.get(this.state, 'userLocationObject.coords.latitude')} longitude={_.get(this.state,'userLocationObject.coords.longitude')}></Distances>
                    </div>
                    </div>
                    </div>
                }
                </div>
        )
    }
}

export default UserLocation;
