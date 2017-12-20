import React, { Component } from 'react';
import Maps from './maps.js';
import _ from 'lodash';
import './maps.css';
let google = window.google; //needed so that React will accept global values from the <script> tag

class Distances extends Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {

    }

    componentDidMount() {
        let currentState = this.props;
        let directionsService = new google.maps.DirectionsService();
        directionsService.route({
            origin: "Atlanta",
            destination: "New York",
            travelMode: 'DRIVING'
        }, (response, status) => {
            this.setState({ drivingRoute: response })
        })
    }

    render() {
        console.log('I am Distances props', this.props)
        console.log('I am Distances state', this.state)
        return (
            <div>
                <input id="pac-input" className="controls" type="text" placeholder="Search Box"></input>
                <div>
                    <p>I am distances.js. The direct driving time to your destination is {_.get(this.state, 'drivingRoute.routes[0].legs[0].duration.text') || ''} </p>
                    <div>
                        <Maps  {...this.state} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Distances;
