import _ from 'lodash';

export const getUserDrivingTime = 'getUserDrivingTime';

const google = window.google;

export function fetchDriveTime(latitude, longitude, destination) {
    
    const directionsService = new google.maps.DirectionsService();
    
    const driveTime = [];

    directionsService.route({
        origin: latitude + ", " + longitude,
        destination: {
            placeId: destination,
        },
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