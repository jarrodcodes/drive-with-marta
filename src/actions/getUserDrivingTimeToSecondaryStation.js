import { fetchMARTATimeSecondary } from "./getMARTATravelTimeSecondary";

export const getUserDrivingTimeToSecondaryStation = 'getUserDrivingTimeToSecondaryStation';

let google = window.google;

export function fetchDrivingTimeToSecondaryStation(latitude, longitude, station, destination) {
    
    return (dispatch, getState) => {
        // avoid Google limits
        let millisecondsToWait = 1000;
        setTimeout(function () {

            let destinationRepeat = destination;
            let directionsService = new google.maps.DirectionsService();
            let driveTime = [];

            directionsService.route({
                origin: {
                    lat: latitude,
                    lng: longitude
                },
                destination: station.stationAddress,
                travelMode: 'DRIVING'
            }, (response, status) => {
                console.log(status, "secondary status")
                driveTime.push(response);
                if (status === 'OK') {
                    dispatch(updateDrivingTimeToSecondaryStation(driveTime))
                    dispatch(fetchMARTATimeSecondary(station, destinationRepeat, driveTime))
                }
            });

        }, millisecondsToWait);
    }
}
export function updateDrivingTimeToSecondaryStation(driveTime) {
    return {
        type: getUserDrivingTimeToSecondaryStation,
        payload: driveTime
    }
}