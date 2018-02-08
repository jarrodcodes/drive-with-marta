import React, { Component } from 'react';
import '../about.css'

class About extends Component {
    constructor() {
        super()
    }

    render() {
        let self = this;

        return(
            
            <div className = "about">
                <h1 className = "about">
    So, how does this all work?
    Here's how it works, in each step.
    </h1>
    <h5>
    <ul className = "about">
        <li>
            1. Get user's location.
            </li>
            <li>
            2. Get the MARTA station closest to the user.
            </li>
            <li>
            3. Get the user's destination.
            </li>
            <li>
            4. Calculate the distance from the user to the destination. Break, if too close.
            </li>
            <li>
            5. Calculate the MARTA station closest to the destination. Break, if too far.
            </li>
            <li>
            6. Calculate the driving time directly to the destination.
            </li>
            <li>
            7. Calculate the driving time to the nearest station (with parking).
            </li>
            <li>
            8. Calculate the transit time from the nearest station to the user to the destination. Add 5 minutes to park.
            </li>
            <li>
            9. Determine if the station closest to the destination is on the same line as the station closest to the user.
            </li>
            <li>
            10. If not, repeat steps 5-7, but with the station closest to the user that matches the line of the station closest to the destination.
            </li>
            <li>
            11. Compare the driving only time to riding MARTA from both stations. Fail, if longer than 15 minutes.
            </li>
            </ul>
            </h5>
    </div>
        )
}
}
export default (About);