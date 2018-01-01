import React, { Component } from 'react';
import _ from 'lodash';
import UserDataViewer from '../views/UserDataViewer.js';
import { fetchGPS } from '../actions/getUserLocation.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDriveTime } from '../actions/getUserDrivingTime.js';
import Maps from '../maps.js';
import '../maps.css';

class UserDataContainer extends Component {

    constructor() {
        super();
    }

    componentWillMount() {
        this.setState({ Loading: true })
        navigator.geolocation.getCurrentPosition((response) => {
            this.setState({ userLocation: response })
            this.setState({ Loading: false })
        })
    }

    componentDidMount() {
    }

    componentWillReceiveProps() {
    }

    componentDidUpdate() {

    }

    render() {
        let self = this;
        return (
            <div>
                <UserDataViewer {...self.props}/>
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
        DriveTime: state.DriveTime
        };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchGPS, fetchDriveTime }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDataContainer);