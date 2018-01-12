import React, { Component } from 'react';
import UserDataViewer from '../views/UserDataViewer.js';
import { fetchGPS } from '../actions/getUserLocation.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDriveTime } from '../actions/getUserDrivingTime.js';
import {fetchClosestStation} from '../actions/getClosestStation.js';
import Maps from '../maps.js';
import '../maps.css';

class UserDataContainer extends Component {

    componentWillMount() {
        let self = this;
        this.setState({ Loading: true })
        navigator.geolocation.getCurrentPosition((response) => {
            this.setState({ userLocation: response })
            self.props.fetchClosestStation(self.state.userLocation.coords.latitude, self.state.userLocation.coords.longitude)            
            this.setState({ Loading: false })
        })
    }

    componentWillReceiveProps(nextProps) {
        let self = this;        
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
        ClosestStation: state.ClosestStation
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchGPS, fetchDriveTime, fetchClosestStation }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDataContainer);