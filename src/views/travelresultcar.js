import React, { Component } from 'react';

class TravelResultCar extends Component {
    constructor() {
    super()
    }

    render() {
        let self = this;
        console.log(self.props, "travel data car")
        let cardData = self.props
        return (
            <div className="card" style={{ width: 18 + 'rem' }}>
            
                <img className="card-img-top" src={"https://maps.googleapis.com/maps/api/staticmap?size=400x400&maptype=roadmap&path=enc:" + self.props.DriveTimeToDestination[0].routes[0].overview_polyline} alt="Card image cap">
                </img>
                <div className="card-body">
                    <h5 className="card-title">{self.props.name}</h5>
                    <p className="card-text">This method is going to take {self.props.DriveTimeToDestination[0].routes[0].legs[0].duration.text}.</p>
                    <a href={"https://maps.google.com/?q= " + self.props} className="btn btn-primary">Let's go!</a>
                </div>
            </div>
        )
    }
}
export default (TravelResultCar);