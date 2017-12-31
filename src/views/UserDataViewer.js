import React, { Component } from 'react';
import _ from 'lodash';
import { fetchGPS } from '../actions/getUserLocation.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDriveTime } from '../actions/getUserDrivingTime.js';

class UserDataViewer extends Component {

    constructor(props) {
        super(props)

    }

    componentWillMount() {
    }

    componentDidUpdate() {

    }

    componentWillReceiveProps() {
    }

    render() {

        let self = this;
        console.log('I am UserDataViewer state', self.state);
        console.log('I am UserDataViewer props', self.props);
        return (
            <div>
                {
                    'Trip info'
                }
            </div>
        )
    }
}

function mapStateToProps({ GPS, Destination, DriveTime }) {
    return { GPS, Destination, DriveTime };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchGPS, fetchDriveTime }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDataViewer);