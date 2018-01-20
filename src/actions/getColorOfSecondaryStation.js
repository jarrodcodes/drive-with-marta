export const getColorOfSecondaryStation = 'getColorOfSecondaryStation';

export function fetchColorOfSecondaryStation(primaryDirections) {

    return (dispatch, getState) => {

        let colorOfSecondaryStation = []
        let stepsInstructions = []
        let steps = []
        let i = 0

        if (primaryDirections != "BUS_PRESENT") {
            let steps = primaryDirections[0].routes[0].legs[0].steps
            for (i; i < steps.length; i++) {
                stepsInstructions.push(steps[i].instructions)
            }

            let stationColors = stepsInstructions.filter(s => s.includes("Blue") || s.includes("Green") || s.includes("Red") || s.includes("Gold"))

            var isRed = stationColors[0].search("Red")
            var isGreen = stationColors[0].search("Green")
            var isGold = stationColors[0].search("Gold")
            var isBlue = stationColors[0].search("Blue")

            if (isRed > 0) {
                colorOfSecondaryStation.push("Red")

            } else if (isGreen > 0) {
                colorOfSecondaryStation.push("Green")

            } else if (isBlue > 0) {
                colorOfSecondaryStation.push("Blue")

            } else if (isGold > 0) {
                colorOfSecondaryStation.push("Gold")
            }

            dispatch(updateColorOfSecondaryStation(colorOfSecondaryStation));


        }
    }
}
export function updateColorOfSecondaryStation(colorOfSecondaryStation) {

    return {
        type: getColorOfSecondaryStation,
        payload: colorOfSecondaryStation
    }
}