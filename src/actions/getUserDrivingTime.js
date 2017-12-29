import _ from 'lodash';

export const getUserDrivingTime = 'getUserDrivingTime';

let google = window.google;

export function fetchDriveTime(latitude, longitude, destination) {
    
    let directionsService = new google.maps.DirectionsService();
    
    console.log(destination)

    let driveTime = [];

    directionsService.route({
        origin: {placeId: "EjA5MDYgU3VtbWVyYnJvb2sgRHIsIFNhbmR5IFNwcmluZ3MsIEdBIDMwMzUwLCBVU0E"},
        destination: {placeId: "ChIJRZAUaT4H9YgRL5WibxIO_dA"},
        travelMode: 'TRANSIT'
    }, (response, status) => {
        driveTime.push(response)
    }
    )
    return {
        type: getUserDrivingTime,
        payload: driveTime
    }
}