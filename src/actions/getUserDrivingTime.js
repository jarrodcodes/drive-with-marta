import _ from 'lodash';

export const getUserDrivingTime = 'getUserDrivingTime';

export function fetchDriveTime(latitude, longitude, destination) {
    let google = window.google; 
    const driveTime = [];

    const directionsService = new google.maps.DirectionsService();
    directionsService.route({
        origin: _.get(latitude) + ", " + _.get(longitude),
        destination: {
            placeId: _.get(destination),
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