import React, { Component } from 'react';

class TravelResult extends Component {
    constructor() {
        super()
    }

    render() {
        let self = this;
        let time = self.props.MARTAOnlyTime.MARTAOnlyTime[0].routes[0].legs[0].duration.text

        console.log(self.props, "travel data marta");

        if (self.props.go != "no") {

            return (
                <div className="card w-25">

                    <img className="card-img-top" src={"https://maps.googleapis.com/maps/api/staticmap?size=400x400&maptype=transit&path=enc:" + self.props.MARTAOnlyTime.MARTAOnlyTime[0].routes[0].overview_polyline} alt="Card image cap">
                    </img>
                    <div className="card-body">
                        <h5 className="card-title">{self.props.name}</h5>
                        <p className="card-text">This method is going to take {time}.</p>
                        <a href={"https://maps.google.com/?q= " + self.props} className="btn btn-primary">Let's go!</a>
                    </div>
                </div>
            )
        }
        else {

            return (

                <div className="card w-25">

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
export default (TravelResult);