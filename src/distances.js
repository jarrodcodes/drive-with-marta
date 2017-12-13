import React, { Component } from 'react';
let axios = require('axios');
class Distances extends Component {


    constructor() {
        super()
        this.state={

                }
            }


    componentDidMount() {
        let config = {
            headers: {
                'Access-Controls-Allow-Origin': '*',
                'Access-Control-Allow-Headers':'Origin, X-Requested-With, Content-Type, Accept'
              }
          };
        let self = this;
        axios.get('https://maps.googleapis.com/maps/api/directions/json?origin=33.9900649,-84.3436881&destination=BetterCloud,Atlanta&key=AIzaSyCvOJOSQ7XA51OelcFhWXUOpMmNh0hcTRo', config)
    }

    //This render is begin called even before props getting updated
    render() {

        return (
            <p>The direct driving time to your destination is </p>
        )
    }
}

export default Distances;
