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
            this.setState({loading: true}); //optional 
    }

    componentDidMount() {
        
        let directionsService = new google.maps.DirectionsService();
        directionsService.route({
            origin: _.get(this.props, 'latitude') + ", "+ _.get(this.props, 'longitude'),
            destination: "New York",
            travelMode: 'DRIVING'
        }, (response, status) => {
            this.setState({ drivingRoute: response })
        })
    }

    onUpdate = (val) => {
        this.setState({
          fieldVal: val
        })
      };

    render() {

        console.log('I am Distances props', this.props)
        console.log('I am Distances state', this.state)
        return (
            <div>
                <div>
                    <p>I am distances.js. The direct driving time to your destination is {_.get(this.state, 'drivingRoute.routes[0].legs[0].duration.text') || ''} </p>
                    <div>
                    <Maps onUpdate={this.onUpdate} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Distances;
