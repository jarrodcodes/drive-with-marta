import React, { Component } from 'react';
import Maps from './maps.js';
import _ from 'lodash';
import './maps.css';
let google = window.google; //needed so that React will accept global values from the <script> tag

class Distances extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {

    }

    destinationUpdate = (userDestination) => {
        this.setState({
          userChosenDestination: userDestination
        })
      };

      

    render() {
        //this.setState({loading: true}); //optional 
        let self = this;
        let directionsService = new google.maps.DirectionsService();
        directionsService.route({
            origin: _.get(self.props, 'latitude') + ", "+ _.get(self.props, 'longitude'),
            destination: {
                placeId: _.get(self.state, 'userChosenDestination.place_id'),
            },
            travelMode: 'DRIVING'
        }, (response, status) => {
            //self.setState({ drivingRoute: response })
            let directions = response.routes[0].legs[0].duration.text;
            console.log(directions)
        }
    )
        console.log(_.get(this.state,'userChosenDestination.place_id' || ''))
        console.log('I am Distances props', this.props)
        console.log('I am Distances state', this.state)

        return (
            <div>
                <div>
                    <p>I am distances.js. The direct driving time to your destination is {_.get(this.state, 'drivingRoute.routes[0].legs[0].duration.text')} </p>
                    <div>
                    <Maps destinationUpdate={this.destinationUpdate} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Distances;
