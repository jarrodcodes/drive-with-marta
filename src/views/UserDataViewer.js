import React, { Component } from 'react';
import TravelResult from './travelresult.js'
import '../userdataviewer.css';

class UserDataViewer extends Component {

    render() {

        let self = this;
        // console.log('I am UserDataViewer state', self.state);
        console.log('I am UserDataViewer props', self.props);

        if (self.props.DriveTimeToDestination.DriveTimeToDestination) {

                return (

                    <div>
                        <TravelResult {...self.props.DriveTimeToDestination} name={'Travel Time By Driving'} />
                    </div>

                )
            
        }

        else {

            return (

                'Welcome to Smarta Commute!'
            )
        }
    }
}

export default (UserDataViewer);