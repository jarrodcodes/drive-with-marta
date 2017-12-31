import _ from 'lodash';

export const getUserDrivingTime = 'getUserDrivingTime';

let google = window.google;

export function fetchDriveTime(latitude, longitude, destination) {
    
    let directionsService = new google.maps.DirectionsService();

    let driveTime = [];

    directionsService.route({
        origin: {
            lat: latitude,
            lng: longitude
        },
        destination: {placeId: destination+''},
        travelMode: 'DRIVING'
    }, (response, status) => {
        driveTime.push(response)
    }
    )
    return {
        type: getUserDrivingTime,
        payload: driveTime
    }
}