export const getColorOfSecondaryStation = 'getColorOfSecondaryStation';

export function fetchColorOfSecondaryStation(primaryDirections) {

    return (dispatch, getState) => {

        let colorOfSecondaryStation = []
        let stepsInstructions = []
        let i = 0
        if (primaryDirections != "BUS_PRESENT") {

            for (i; i < primaryDirections.length; i++) {
                stepsInstructions.push(primaryDirections[i].instructions)
            }

            console.log(stepsInstructions, "primary steps")

            let stationColorStep = stepsInstructions[stepsInstructions.length - 1]

            console.log(stationColorStep, "color")

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