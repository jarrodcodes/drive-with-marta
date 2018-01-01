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

    render() {

        let self = this;
        console.log('I am UserDataViewer state', self.state);
        console.log('I am UserDataViewer props', self.props);
        return (
            <div>
                <p>
            {self.props != null
             && self.props.DriveTime 
             && self.props.DriveTime[0] 
             && self.props.DriveTime[0].status &&
                    self.state.DriveTime[0].status 
                }
                </p>
            4
            </div>
        )
    }
}

export default (UserDataViewer);