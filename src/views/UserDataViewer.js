import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGPS } from '../actions/getUserLocation.js';
import { fetchDriveTime } from '../actions/getUserDrivingTime.js';
import { addDestination } from '../actions/getUserDestination.js';
import { bindActionCreators } from 'redux';

class UserDataViewer extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    componentDidUpdate() {

    }

    render() {
        console.log('I am UserDataViewer state', this.state);
        console.log('I am UserDataViewer props', this.props);
        return (
            'Hi'
        )
    }
}

function mapStateToProps({GPS, Destination, DriveTime}) {
    return {GPS, Destination, DriveTime };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchGPS, fetchDriveTime, addDestination}, dispatch);
  }

export default connect(mapStateToProps, mapDispatchToProps)(UserDataViewer);