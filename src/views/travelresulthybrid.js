import React, { Component } from 'react';

class TravelResultHybrid extends Component {
    constructor() {
    super()
    }

    render() {
        let drivingTimeToUse = [];
        let self = this;
        console.log(self.props, "travel data hybrid");
        if (self.props.DrivingTimeToSecondaryStation) {
            
        }
        return (
            <div className="card" style={{ width: 18 + 'rem' }}>
        
                <img className="card-img-top" src={"https://maps.googleapis.com/maps/api/staticmap?size=400x400&maptype=transit&path=enc:" + self.props.DrivingTimeToPrimaryStation.DrivingTimeToNearestStation[0].routes[0].overview_polyline + "&path=enc:" + self.props.MartaTravelTimeSecondary[0][0].routes[0].overview_polyline} alt="Card image cap">
                </img>
                <div className="card-body">
                    <h5 className="card-title">{self.props.name}</h5>
                    <p className="card-text">This method is going to take {self.props.MartaTravelTimeSecondary[0][0].routes[0].legs[0].duration.text}.</p>
                    <a href={"https://maps.google.com/?q= " + self.props} className="btn btn-primary">Let's go!</a>
                </div>
            </div>
        )
    }
}
export default (TravelResultHybrid);