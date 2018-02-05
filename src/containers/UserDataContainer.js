import React, { Component } from 'react';
import UserDataViewer from '../views/UserDataViewer.js';
import { fetchGPS } from '../actions/getUserLocation.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchClosestStationToUser } from '../actions/getClosestStationToUser.js';
import { fetchDrivingTimeToNearestStation } from '../actions/getUserDrivingTimeToPrimaryStation.js';
import Maps from '../maps.js';
import '../maps.css';

class UserDataContainer extends Component {

    componentWillMount() {
        let self = this;
        this.setState({ Loading: true })

        navigator.geolocation.getCurrentPosition((response) => {
            this.setState({ userLocation: response })
            self.props.fetchClosestStationToUser(self.state.userLocation.coords.latitude, self.state.userLocation.coords.longitude)
            this.setState({ Loading: false })
        })
    }

    componentWillReceiveProps(currentProps, nextProps) {
        let self = this;
        self.props.fetchDrivingTimeToNearestStation(self.state.userLocation.coords.latitude, self.state.userLocation.coords.longitude, currentProps.ClosestStationToUser.ClosestStationToUser.stationAddress)
    }

    render() {
        let self = this;
         console.log(self.props, 'props')
        return (
            <div className>
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
        DriveTimeToDestination: state.DriveTimeToDestination,
        ClosestStationToUser: state.ClosestStationToUser,
        ClosestStationToDestination: state.ClosestStationToDestination,
        DrivingTimeToPrimaryStation: state.DrivingTimeToPrimaryStation,
        MartaTravelTimePrimary: state.MartaTravelTimePrimary,
        MartaTravelTimeSecondary: state.MartaTravelTimeSecondary
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchGPS, fetchClosestStationToUser, fetchDrivingTimeToNearestStation }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDataContainer);