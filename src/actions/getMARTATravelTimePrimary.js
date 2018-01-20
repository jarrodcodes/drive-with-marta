import { fetchColorOfSecondaryStation } from '../actions/getColorOfSecondaryStation.js';

export const getMARTATravelTimePrimary = 'getMARTATravelTimePrimary';

let google = window.google;

export function fetchMARTATimePrimary(station, destination, drivingTimeToStation, latitude, longitude) {
    return (dispatch, getState) => {

        let directionsService = new google.maps.DirectionsService();
        let currentTime = (new Date).getTime();
        let adjustedTime = currentTime + drivingTimeToStation + 300000;
        let martaTime = [];

        directionsService.route({
            origin: station + '',
            destination: { placeId: destination + '' },
            drivingOptions: {
                departureTime: new Date(adjustedTime)
            },
            travelMode: 'TRANSIT'
        }, (response, status) => {
            if (status === "OK") {
                let i = 0
                let stepsResponse = response.routes[0].legs[0].steps
                let stepsInstructions = []
                for (i; i < stepsResponse.length; i++) {
                    stepsInstructions.push(stepsResponse[i].instructions)
                }
                //figure out if Google wants the user to take a bus, if so, driving is immediately the best option
                let busTest = stepsInstructions.filter(s => s.includes("Bus"))
                if (busTest.length > 0) {
                    martaTime.push("BUS_PRESENT")
                }
                else {
                    martaTime.push(response);
                }
                dispatch(updateMARTATimePrimary(martaTime));
                //send the MARTA travel info to this function to determine the station line closest to the destination
                dispatch(fetchColorOfSecondaryStation(martaTime, latitude, longitude))
            }
        });
    }
}

export function updateMARTATimePrimary(martaTime) {
    return {
        type: getMARTATravelTimePrimary,
        payload: martaTime
    }
}