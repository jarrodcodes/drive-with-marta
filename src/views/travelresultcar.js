import React, { Component } from 'react';
import '../card-winner.css';
import '../card-loser.css';

class TravelResultCar extends Component {
    constructor() {
    super()
    }

    render() {
        let self = this;
        
        if (self.props.go != "no") {
            require: 'card-winner.css'
            let cardWinner = "card-winner"

        return (
            <div className={"card " + cardWinner}  style={{ width: 18 + 'rem' }}>            
                <img className="card-img-top" src={"https://maps.googleapis.com/maps/api/staticmap?size=400x400&maptype=roadmap&path=enc:" + self.props.DriveTimeToDestination[0].routes[0].overview_polyline} alt="Card image cap">
                </img>
                <div className="card-body">
                    <h5 className="card-title">{self.props.name}</h5>
                    <p className="card-text">This method is going to take {self.props.DriveTimeToDestination[0].routes[0].legs[0].duration.text}.</p>
                </div>
            </div>
        )
    }
    else {
            require: 'card-loser.css'
            let cardWinner = "card-loser"

            return (
                <div className={"card " + cardWinner}  style={{ width: 18 + 'rem' }}>            
                    <img className="card-img-top" src={"https://maps.googleapis.com/maps/api/staticmap?size=400x400&maptype=roadmap&path=enc:" + self.props.DriveTimeToDestination[0].routes[0].overview_polyline} alt="Card image cap">
                    </img>
                    <div className="card-body">
                        <h5 className="card-title">{self.props.name}</h5>
                        <p className="card-text">This method is going to take {self.props.DriveTimeToDestination[0].routes[0].legs[0].duration.text}.</p>
                    </div>
                </div>
            )
        }

    }
}
export default (TravelResultCar);