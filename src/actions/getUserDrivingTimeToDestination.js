import { fetchMARTAOnlyTime } from './getMARTAOnlyTime.js';
export const getUserDrivingTimeToDestination = 'getUserDrivingTimeToDestination';

let google = window.google;

export function fetchDriveTimeToDestination(latitude, longitude, destination) {
    return (dispatch, getState) => {
        
        let millisecondsToWait = 1000;

        setTimeout(function () {

        let directionsService = new google.maps.DirectionsService();
        let latitudeRepeat = latitude;
        let longitudeRepeat = longitude;
        let destinationRepeat = destination;
        let driveTime = [];

        directionsService.route({
            origin: {
                lat: latitude,
                lng: longitude
            },
            destination: { placeId: destination + '' },
            travelMode: 'DRIVING'
        }, (response, status) => {
            driveTime.push(response);
            dispatch(updateDriveTimeToDestination(driveTime))
            let millisecondsToWait = 500;

            setTimeout(function () {
                dispatch(fetchMARTAOnlyTime(latitudeRepeat, longitudeRepeat, destinationRepeat))
            }, millisecondsToWait)
        }
        );
    }, millisecondsToWait)
}
}

export function updateDriveTimeToDestination(driveTime) {
    return {
        type: getUserDrivingTimeToDestination,
        payload: driveTime
    }
}