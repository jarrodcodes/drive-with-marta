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
        this.props.fetchGPS()
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
        let userDestination  = (_.last(self.props.Destination[0]))        
        //console.log('I am UserDataContainer state', this.state);
        //console.log('I am UserDataContainer props', this.props);
        return (
            <div>
                <UserDataViewer {...self.props}/>
                {
                    this.state.Loading === false && self.state.userLocation &&
                    <Maps location={this.state.userLocation} />
                }
                <p> This is a test of {_.get(userDestination, 'place_id' || '')}</p>

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

export default connect(mapStateToProps, mapDispatchToProps)(UserDataContainer);