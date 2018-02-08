import React, { Component } from 'react';
import TravelResultCar from './travelresultcar.js';
import TravelResultHybrid from './travelresulthybrid.js';
import '../userdataviewer.css';
import TravelResultMarta from './travelresultmarta.js';
import TravelGuide from './travelguide.js';

class UserDataViewer extends Component {

    render() {
        let google = window.google;
        let self = this;
        // console.log('I am UserDataViewer state', self.state);
        //console.log('I am UserDataViewer props', self.props);

        if (self.props.MartaTravelTimePrimary[0]) {
            if (self.props.MartaTravelTimePrimary[0][0]) {
                if (self.props.DriveTimeToDestination.DriveTimeToDestination) {
                    if (self.props.DriveTimeToDestination.DriveTimeToDestination[0]) {
                        if (self.props.MartaTravelTimeSecondary[0]) {
                            if (self.props.MartaTravelTimeSecondary[0][0]) {
                                if (self.props.MARTAOnlyTime.MARTAOnlyTime[0]) {
                                    if (self.props.ClosestStationToDestination.ClosestStationToDestination.distance > 1609.34) {

                                        return (
                                            <div>
                                                <h1>
                                                    Darn. Your location is too far from MARTA.
</h1>
                                                <div className="card-deck">
                                                    <TravelResultCar {...self.props.DriveTimeToDestination} name={'Car Only'} />
                                                    <TravelResultHybrid {...self.props} go={"no"} name={'Smarta-Commute Solution'} />
                                                    <TravelResultMarta {...self.props} go={"no"} name={'MARTA Only'} />
                                                </div>
                                            </div>
                                        )
                                    }
                                    else {
                                        let stationView = self.props.ClosestStationOfPreferredLineToUser.ClosestStationOfPreferredLineToUser.stationAddress
                                        let driveTime = self.props.DriveTimeToDestination.DriveTimeToDestination[0].routes[0].legs[0].duration.value
                                        let smarta1 = parseInt((self.props.MartaTravelTimeSecondary[0][0].routes[0].legs[0].duration.value))
                                        let smarta2 = parseInt(self.props.DrivingTimeToSecondaryStation.DrivingTimeToSecondaryStation[0].routes[0].legs[0].duration.value)
                                        if ((smarta1 + smarta2) - driveTime > 900) {
                                            return (
                                                <div>
                                                    <h5 className="results-text">
                                                        Based on our calculations, you should just drive. MARTA would take at least 15 minutes longer.
    </h5>
                                                    <div className="card-deck">
                                                        <TravelResultCar {...self.props.DriveTimeToDestination} name={'Car Only'} />
                                                        <TravelResultHybrid {...self.props} name={'Smarta-Commute Solution'} />
                                                        <TravelResultMarta {...self.props} name={'MARTA Only'} />
                                                    </div>
                                                </div>
                                            )
                                        }
                                        else {
                                            return (
                                                <div>
                                                    <h5 className="results-text">
                                                        First, drive to {stationView}. Then ride the train.
</h5>
                                                    <div className="card-deck">
                                                        <TravelResultCar {...self.props.DriveTimeToDestination} name={'Car Only'} />
                                                        <TravelResultHybrid {...self.props} name={'Smarta-Commute Solution'} />
                                                        <TravelResultMarta {...self.props} name={'MARTA Only'} />
                                                    </div>
                                                </div>
                                            )
                                        }
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