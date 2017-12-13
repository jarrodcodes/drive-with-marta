import React, { Component } from 'react';

class UserLocation extends Component {

    constructor() {
        super()
        this.state={
            events:{
                coords:{
                    accuracy:[],
                    latitude:[],
                    longitude:[]
                }
            }
        }
            
    }

    componentDidMount() {
        let self = this;
        navigator.geolocation.getCurrentPosition((response) => {
            self.setState({events: response})
          });

    }

    //This render is begin called even before props getting updated
    render() {
        let currentState = this.state
        let latitude = currentState.events.coords.latitude;
        let longitude = currentState.events.coords.longitude;
        let gps = {latitude,longitude};
        console.log(gps)
        return (
            <p>Hi there. I have you at {latitude}, {longitude}</p>
        )
    }
}

export default UserLocation;
