import React, { Component } from 'react';

class TravelResultHybrid extends Component {
    constructor() {
        super()
    }

    render() {
        let self = this;
        let time1 = parseInt((self.props.MartaTravelTimeSecondary[0][0].routes[0].legs[0].duration.value))

        let time2 = parseInt(self.props.DrivingTimeToSecondaryStation.DrivingTimeToSecondaryStation[0].routes[0].legs[0].duration.value)

        let totalTime = ((time1 + time2) / 60)

        console.log(self.props, "travel data hybrid");

        if (self.props.go != "no") {

            return (
                <div className="card" style={{ width: 18 + 'rem' }}>

                    <img className="card-img-top" src={"https://maps.googleapis.com/maps/api/staticmap?size=400x400&maptype=transit&path=enc:" + self.props.DrivingTimeToSecondaryStation.DrivingTimeToSecondaryStation[0].routes[0].overview_polyline + "&path=enc:" + self.props.MartaTravelTimeSecondary[0][0].routes[0].overview_polyline} alt="Card image cap">
                    </img>
                    <div className="card-body">
                        <h5 className="card-title">{self.props.name}</h5>
                        <p className="card-text">This method is going to take {totalTime.toFixed(2)} minutes.</p>
                        <a href={"https://maps.google.com/?q= " + self.props} className="btn btn-primary">Let's go!</a>
                    </div>
                </div>
            )
        }

        else {

            return (

                <div className="card" style={{ width: 18 + 'rem' }}>

                    <img className="card-img-top" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Grey_close_x.svg/1024px-Grey_close_x.svg.png"} alt="Card image cap">
                    </img>
                    <div className="card-body">
                        <h5 className="card-title">{self.props.name}</h5>
                        <p className="card-text">This destination to too far from MARTA. You should just drive.</p>
                        <a href={"https://maps.google.com/?q= " + self.props} className="btn btn-primary">Let's go!</a>
                    </div>
                </div>
            )
        }
    }
}
export default (TravelResultHybrid);