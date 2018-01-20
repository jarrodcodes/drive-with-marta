import React, { Component } from 'react';
import { fetchGPS } from '../actions/getUserLocation.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDriveTimeToDestination } from '../actions/getUserDrivingTimeToDestination.js';

class UserDataViewer extends Component {

    render() {

        let self = this;
        // console.log('I am UserDataViewer state', self.state);
        console.log('I am UserDataViewer props', self.props);

        if (!self.props.MartaTimePrimary[0]) {
            return (

                <div>
                    <h2>
                        Welcome To Smarta-Commute! Let's find out if you should drive or take the train!
                    </h2>
                </div>
            )
        }

        if (self.props.ClosestStationToDestination.ClosestStationToDestination) {
            if (self.props.ClosestStationToDestination.ClosestStationToDestination[0] === "TOO_FAR") {

                return (
                    <div>
                        Darn, your destination is too far from MARTA.
                    </div>
                )
            }
        }

        if (self.props.MartaTimePrimary[0]) {

            if (self.props.MartaTimePrimary[0][0] === "BUS_PRESENT") {

                return ("Bus Present")
            }
        }


        return (
            
            <div>

                {self.props.ClosestStationToUser &&
                    self.props.ClosestStationToUser.ClosestStationToUser &&
                    self.props.ClosestStationToUser.ClosestStationToUser.stationAddress &&
                    'The nearest MARTA station to you is: ' + self.props.ClosestStationToUser.ClosestStationToUser.stationAddress + '.'
                }
                <br>
                </br>
                {self.props.DriveTimeToDestination &&
                    self.props.DriveTimeToDestination.DriveTimeToDestination &&
                    self.props.DriveTimeToDestination.DriveTimeToDestination[0] &&
                    self.props.DriveTimeToDestination.DriveTimeToDestination[0].status &&
                    self.props.DriveTimeToDestination.DriveTimeToDestination[0].status === 'OK' &&
                    'Your direct driving time is: ' + self.props.DriveTimeToDestination.DriveTimeToDestination[0].routes[0].legs[0].duration.text + '.'
                }
                <br>
                </br>
                {self.props.MartaTimePrimary &&
                    self.props.MartaTimePrimary[0] &&
                    self.props.MartaTimePrimary[0][0] &&
                    self.props.MartaTimePrimary[0][0].status &&
                    self.props.MartaTimePrimary[0][0].status === 'OK' &&
                    'Your MARTA transit time is: ' + self.props.MartaTimePrimary[0][0].routes[0].legs[0].duration.text + '.'
                }

            </div>
        )
    }
}

export default (UserDataViewer);