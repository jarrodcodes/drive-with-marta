import React, { Component } from 'react';

class TravelResult extends Component {
    constructor() {
    super()
    }

    render() {
        let self = this;
        let time1 = parseInt(self.props.MartaTravelTimePrimary[0][0].routes[0].legs[0].duration.text.match(/\d+/))
        let time2 = parseInt(self.props.DrivingTimeToSecondaryStation.DrivingTimeToSecondaryStation[0].routes[0].legs[0].duration.text.match(/\d+/))
        console.log(time1, "time1")

        console.log(self.props, "travel data marta");
        return (
            <div className="card" style={{ width: 18 + 'rem' }}>
        
                <img className="card-img-top" src={"https://maps.googleapis.com/maps/api/staticmap?size=400x400&maptype=transit&path=enc:" + self.props.DrivingTimeToPrimaryStation.DrivingTimeToNearestStation[0].routes[0].overview_polyline + "&path=enc:" +  self.props.MartaTravelTimePrimary[0][0].routes[0].overview_polyline} alt="Card image cap">
                </img>
                <div className="card-body">
                    <h5 className="card-title">{self.props.name}</h5>
                    <p className="card-text">This method is going to take {time1 + time2} minutes.</p>
                    <a href={"https://maps.google.com/?q= " + self.props} className="btn btn-primary">Let's go!</a>
                </div>
            </div>
        )
    }
}
export default (TravelResult);