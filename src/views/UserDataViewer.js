import React, { Component } from 'react';
import TravelResult from './travelresult.js'
import '../userdataviewer.css';

class UserDataViewer extends Component {

    render() {

        let self = this;
        // console.log('I am UserDataViewer state', self.state);
        //console.log('I am UserDataViewer props', self.props);

        if (self.props.MartaTravelTimePrimary[0]) {
            if (self.props.MartaTravelTimePrimary[0][0]) {
                if (self.props.DriveTimeToDestination.DriveTimeToDestination) {
                    if (self.props.DriveTimeToDestination.DriveTimeToDestination[0]) {
                        if (self.props.MartaTravelTimeSecondary[0]) {
                            if (self.props.MartaTravelTimeSecondary[0][0]) {

                                return (
                                    <div className="card-deck">
                                    <h3>
                                        </h3>
                                    <TravelResult {...self.props.DriveTimeToDestination} name={'Travel Time By Car)'} />
                                    <TravelResult {...self.props.DriveTimeToDestination} name={'Travel Time By Car)'} />
                                    <TravelResult {...self.props.DriveTimeToDestination} name={'Travel Time By Car)'} />
                                    </div>
                                )
                            }
                            else {
                                return (
                                    <h1 className="Loading">
                                        "Loading..."
</h1>
                                )
                            }
                        }
                        else {
                            return (
                                <h1 className="Loading">
                                    "Loading..."
</h1>
                            )
                        }

                    }
                    else {
                        return (
                            <h1 className="Loading">
                                "Loading..."
</h1>
                        )
                    }

                }
            }
        }

        else {

            return (
                <div className="greeting">
                    <h1>
                        Welcome to Smarta Commute!
</h1>
                    <h5>
                        Smarta Commute helps you solve that mystery we always ponder in Atlanta: How should I travel today?
</h5>
                    <h6>
                        Enter in your destination. And this time, you'll travel smarta.
</h6>
                </div>
            )
        }
    }
}

export default (UserDataViewer);