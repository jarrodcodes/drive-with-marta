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

    componentWillReceiveProps(nextProps) {
    }

    render() {

        let self = this;
        console.log('I am UserDataViewer state', self.state);
        console.log('I am UserDataViewer props', self.props);
        let userDriveTime = self.props.DriveTime
        console.log(userDriveTime)
        return (
            <div>

                {self.props.DriveTime &&
                    self.props.DriveTime.DriveTime &&
                    self.props.DriveTime.DriveTime[0] &&
                    self.props.DriveTime.DriveTime[0].status &&
                    self.props.DriveTime.DriveTime[0].status
                }
                <p>
                    4
</p>
            </div>
        )
    }
}

export default (UserDataViewer);