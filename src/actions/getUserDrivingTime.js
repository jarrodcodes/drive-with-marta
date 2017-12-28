import _ from 'lodash';

export const getUserDrivingTime = 'getUserDrivingTime';

let google = window.google;

export function fetchDriveTime(latitude, longitude, destination) {
    
    let directionsService = new google.maps.DirectionsService();
    console.log(destination)
    let driveTime = [];
    let origin = latitude + ", " + longitude;
    console.log(origin)
    directionsService.route({
        origin: {placeId: "ChIJN1t_tDeuEmsRUsoyG83frY4"},
        destination: {placeId: "ChIJN1t_tDeuEmsRUsoyG83frY4"},
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