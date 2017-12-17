import React, { Component } from 'react';

let google = window.google; //needed so that React will accept global values from the <script> tag

class Distances extends Component {

    constructor() {
        super()
        this.state = {
            events: {
                routes: [
                    {
                        legs: [
                            {
                            duration: {
                                
                            }
                            }
                        ]
                    }
                ]
            }
        }
        var b = this.state.events.routes.push("Hi!")
        var c = this.state.events.routes[0].legs.push("hi!")
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
            console.log(this.state)

        }
    )
}

    render() {

        return (
            <p>The direct driving time to your destination is {this.state.events.routes[0].legs[0].duration.text}</p>
        )
    }
}

export default Distances;
