import React, { Component } from 'react';
import _ from 'lodash';
let google = window.google; //needed so that React will accept global values from the <script> tag

class Distances extends Component {

    constructor() {
        super()
        this.state = {

        }
    }

    componentDidMount() {

        var directionsService = new google.maps.DirectionsService();

        directionsService.route({
            origin: "Atlanta",
            destination: "New York",
            travelMode: 'DRIVING'
        }, (response, status) => {

            let self = this
            self.setState({ events: response })
        }
    )
}

    render() {
      let routes = _.get(this.state, 'event')
      let firstRoute = _.head(routes);
      console.log(firstRoute)
        return (

            <p>The direct driving time to your destination is {_.get(this.state,'events.routes[0].legs[0].duration.text') || ''} </p>
        )
        
    }
}

export default Distances;
