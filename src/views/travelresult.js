import React, { Component } from 'react';

class TravelResult extends Component {
    constructor() {
    super()
    }

    render() {
        let self = this;
        console.log(self.props, "travel data")
        return (
            <div className="card" style={{ width: 18 + 'rem' }}>
            
                <div className="card-body">
                    <h5 className="card-title">{self.props.name}</h5>
                    <p className="card-text">This method is going to take {self.props[0][0].routes[0].legs[0].duration.text}.</p>
                    <a href={"https://maps.google.com/?q= " + self.props} className="btn btn-primary">Let's go!</a>
                </div>
            </div>
        )
    }
}

export default (TravelResult);