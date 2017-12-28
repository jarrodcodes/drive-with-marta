//get user's current location and add it to Redux

import React, { Component } from 'react';
import _ from 'lodash';
import Distances from '../distances.js';
import { fetchGPS } from '../actions/getUserLocation.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDriveTime } from '../actions/getUserDrivingTime.js';
import Maps from '../maps.js';

class UserDataContainer extends Component {

    constructor() {
        super()
    }

    componentWillMount() {
        this.setState({ Loading: true })
    }


    componentDidMount() {
        this.props.fetchGPS()
        this.props.fetchDriveTime();
        this.setState({ Loading: false })
    }

    componentWillReceiveProps() {

    }

    componentDidUpdate() {
        
    }

    render() {

        console.log('I am UserData state', this.state);
        console.log('I am UserData props', this.props);

        return (
            <div>
                <p> This is a test of {_.get(this.props, '[0].routes[0].legs[0].duration.text' || '')} </p>

                <Maps />
            </div>
        )
    }
}

function mapStateToProps({ GPS, Destination }) {
    return { GPS, Destination };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchGPS, fetchDriveTime }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDataContainer);