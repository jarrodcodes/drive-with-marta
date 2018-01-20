export const getUserDrivingTimeToDestination = 'getUserDrivingTimeToDestination';

let google = window.google;

export function fetchDriveTimeToDestination(latitude, longitude, destination) {
    return (dispatch, getState) => {
        let directionsService = new google.maps.DirectionsService();

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
            dispatch(updateDriveTimeToDestination(driveTime));
        });
    }
}

export function updateDriveTimeToDestination(driveTime) {
    return {
        type: getUserDrivingTimeToDestination,
        payload: driveTime
    }
}