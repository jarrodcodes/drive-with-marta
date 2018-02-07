import _ from 'lodash';
import { fetchClosestStationOfPreferredLineToUser } from '../actions/getClosestStationOfPreferredLineToUser.js';

export const getColorOfSecondaryStation = 'getColorOfSecondaryStation';
export function fetchColorOfSecondaryStation(primaryDirections, latitude, longitude, destination) {

    return (dispatch, getState) => {

        let colorOfSecondaryStation = []
        let stepsInstructions = []
        let i = 0
        let destinationRepeat = destination;
        
        if (primaryDirections != "BUS_PRESENT") {
            let steps = primaryDirections[0].routes[0].legs[0].steps
            for (i; i < steps.length; i++) {
                stepsInstructions.push(steps[i].instructions)
            }

            let stationColors = stepsInstructions.filter(s => s.includes("Blue") || s.includes("Green") || s.includes("Red") || s.includes("Gold"))
            let stationColor = _.last(stationColors)
            //if no line color is present, user only has Bus/walking directions, no need to continue
            
            if (stationColor === undefined) {
                stationColor = "none"
            }

            let isRed = stationColor.search("Red")
            let isGreen = stationColor.search("Green")
            let isGold = stationColor.search("Gold")
            let isBlue = stationColor.search("Blue")

            if (isRed > 0) {
                colorOfSecondaryStation.push("Red")

            } else if (isGreen > 0) {
                colorOfSecondaryStation.push("Green")

            } else if (isBlue > 0) {
                colorOfSecondaryStation.push("Blue")

            } else if (isGold > 0) {
                colorOfSecondaryStation.push("Gold")

            } else if (stationColor == "none") {
                colorOfSecondaryStation.push("none")
            }

            dispatch(updateColorOfSecondaryStation(colorOfSecondaryStation))
            dispatch(fetchClosestStationOfPreferredLineToUser(latitude, longitude, colorOfSecondaryStation, destinationRepeat))
        }
    }
}
export function updateColorOfSecondaryStation(colorOfSecondaryStation) {

    return {
        type: getColorOfSecondaryStation,
        payload: colorOfSecondaryStation
    }
}