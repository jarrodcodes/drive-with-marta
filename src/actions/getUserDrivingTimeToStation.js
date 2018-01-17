export const getUserDrivingTimeToNearestStation = 'getUserDrivingTimeToNearestStation';

let google = window.google;

export function fetchDrivingTimeToNearestStation(latitude, longitude, station) {
    return (dispatch, getState) => {
            console.log(station, 'station')
        let directionsService = new google.maps.DirectionsService();        
                let driveTime = [];
        
                directionsService.route({
                    origin: {
                        lat: latitude,
                        lng: longitude
                    },
                    destination: station + '',
                    travelMode: 'DRIVING'
                }, (response, status) => {
                    driveTime.push(response);
                    if (status === 'OK') {
                    dispatch(updateDrivingTimeToStation(driveTime));
                    }
                });
            }
        }

export function updateDrivingTimeToStation(driveTime) {
    return {
        type: getUserDrivingTimeToNearestStation,
        payload: driveTime
    }
}