import React, { Component } from 'react';
import '../card-winner.css';
import '../card-loser.css';

class TravelResultHybrid extends Component {
    constructor() {
        super()
    }

    render() {
        let self = this;


        if (self.props.walk == "yes") {
            require: 'card-loser.css'
            let cardWinner = "card-loser"
            //let time = self.props.MARTAOnlyTime.MARTAOnlyTime[0].routes[0].legs[0].duration.text

            return (
                <div className={"card " + cardWinner}>
                    <img className="card-img-top" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Grey_close_x.svg/1024px-Grey_close_x.svg.png"} alt="Card image cap">
                    </img>
                    <div className="card-body">
                        <h5 className="card-title">{self.props.name}</h5>
                        <p className="card-text">No need.</p>
                    </div>
                </div>
            )
        }


        if (self.props.slow == "yes") {
            require: 'card-loser.css'
            let cardWinner = "card-loser"
            //let time = self.props.MARTAOnlyTime.MARTAOnlyTime[0].routes[0].legs[0].duration.text

            return (
                <div className={"card " + cardWinner}>
                    <img className="card-img-top" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Grey_close_x.svg/1024px-Grey_close_x.svg.png"} alt="Card image cap">
                    </img>
                    <div className="card-body">
                        <h5 className="card-title">{self.props.name}</h5>
                        <p className="card-text">You should drive, based on the time to ride MARTA.</p>
                    </div>
                </div>
            )
        }

        if (self.props.go != "no") {
            require: 'card-winner.css'
            let cardWinner = "card-winner"
            let time1 = parseInt((self.props.MartaTravelTimeSecondary[0][0].routes[0].legs[0].duration.value))
            let time2 = parseInt(self.props.DrivingTimeToSecondaryStation.DrivingTimeToSecondaryStation[0].routes[0].legs[0].duration.value)
            let totalTime = ((time1 + time2) / 60)

            return (
                <div className={"card " + cardWinner}  style={{ width: 18 + 'rem' }}>

                    <img className="card-img-top" src={"https://maps.googleapis.com/maps/api/staticmap?size=400x400&maptype=transit&path=color:red|enc:" + self.props.DrivingTimeToSecondaryStation.DrivingTimeToSecondaryStation[0].routes[0].overview_polyline + "&path=color:green|enc:" + self.props.MartaTravelTimeSecondary[0][0].routes[0].overview_polyline} alt="Card image cap">
                    </img>
                    <div className="card-body">
                        <h5 className="card-title">{self.props.name}</h5>
                        <p className="card-text">This method is going to take {totalTime.toFixed(0)} minutes.</p>
                    </div>
                </div>
            )
        }
        else {
            require: 'card-loser.css'
            let cardWinner = "card-loser"
            return (

                <div className={"card " + cardWinner} style={{ width: 18 + 'rem' }}>

                    <img className="card-img-top" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Grey_close_x.svg/1024px-Grey_close_x.svg.png"} alt="Card image cap">
                    </img>
                    <div className="card-body">
                        <h5 className="card-title">{self.props.name}</h5>
                        <p className="card-text">This destination to too far from MARTA. You should just drive.</p>
                    </div>
                </div>
            )
        }
    }
}
export default (TravelResultHybrid);