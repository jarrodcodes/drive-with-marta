import React, { Component } from 'react';
import _ from 'lodash';
import './maps.css';
let google = window.google; //needed so that React will accept global values from the <script> tag

class Distances extends Component {

    constructor() {
        super()
        this.state = {

        }
    }

    componentWillMount() {

    }

    componentDidMount() {
        let self = this;
        navigator.geolocation.getCurrentPosition((response) => {
            self.setState({events: response})
          });

        console.log(this.state)
        let directionsService = new google.maps.DirectionsService();
        function initMap() {
            let userLocation = {lat: 33.850944399999996, lng: -84.3768865};
            let userLocationMap = new google.maps.Map(document.getElementById('map'), {
              zoom: 15,
              center: userLocation
            });
            let userLocationMarker = new google.maps.Marker({
              position: userLocation,
              map: userLocationMap
            });
        }
        initMap();

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
        return (
            <div>
            <p>The direct driving time to your destination is {_.get(this.state,'events.routes[0].legs[0].duration.text') || ''} </p>
            <h3>My Google Maps Demo</h3>
            <div id="map">
            </div>
            </div>
        )
    }
}

export default Distances;
