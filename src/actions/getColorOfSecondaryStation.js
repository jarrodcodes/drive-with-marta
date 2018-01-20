export const getColorOfSecondaryStation = 'getColorOfSecondaryStation';

export function fetchColorOfSecondaryStation(primaryDirections) {

let colorOfSecondaryStation = []

    return (dispatch, getState) => {
        console.log(primaryDirections, "primarydirections")
        if (primaryDirections === "BUS_PRESENT") {

        }
        dispatch(updateColorOfSecondaryStation(colorOfSecondaryStation));
    }

}
    export function updateColorOfSecondaryStation(colorOfSecondaryStation) {

        return {
            type: getColorOfSecondaryStation,
            payload: colorOfSecondaryStation
        }
}