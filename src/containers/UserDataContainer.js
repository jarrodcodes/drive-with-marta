import React, { Component } from 'react';
import UserDataViewer from '../views/UserDataViewer.js';
import { fetchGPS } from '../actions/getUserLocation.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDriveTime } from '../actions/getUserDrivingTime.js';
import { fetchClosestStationToUser } from '../actions/getClosestStationToUser.js';
import { fetchDrivingTimeToNearestStation } from '../actions/getUserDrivingTimeToStation.js';
import Maps from '../maps.js';
import '../maps.css';

class UserDataContainer extends Component {

    componentWillMount() {
        let self = this;
        this.setState({ Loading: true })
        let geo_options = {
            enableHighAccuracy: true
        }
        navigator.geolocation.getCurrentPosition((response, geo_options) => {
            this.setState({ userLocation: response })
            self.props.fetchClosestStationToUser(self.state.userLocation.coords.latitude, self.state.userLocation.coords.longitude)
            this.setState({ Loading: false })
        })
    }

    componentWillReceiveProps(nextProps) {
        let self = this;
        self.props.fetchDrivingTimeToNearestStation(self.state.userLocation.coords.latitude, self.state.userLocation.coords.longitude, nextProps.ClosestStationToUser.ClosestStationToUser.stationAddress)
    }

    render() {
        let self = this;
        // console.log(self.state, 'state')
        return (
            <div>
                <UserDataViewer {...self.props} />
                {
                    this.state.Loading === false && this.state.userLocation &&
                    <Maps location={this.state.userLocation} />
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        GPS: state.GPS,
        Destination: state.Destination,
        DriveTime: state.DriveTime,
        ClosestStationToUser: state.ClosestStationToUser,
        DrivingTimeToStation: state.DrivingTimeToStation,
        MartaTime: state.MartaTime
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchGPS, fetchDriveTime, fetchClosestStationToUser, fetchDrivingTimeToNearestStation }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDataContainer);