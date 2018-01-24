export const getUserDrivingTimeToNearestStation = 'getUserDrivingTimeToNearestStation';

let google = window.google;

export function fetchDrivingTimeToNearestStation(latitude, longitude, station) {
    return (dispatch, getState) => {
        
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
                    dispatch(updateDrivingTimeToPrimaryStation(driveTime));
                    }
                });
            }
        }

export function updateDrivingTimeToPrimaryStation(driveTime) {
    return {
        type: getUserDrivingTimeToNearestStation,
        payload: driveTime
    }
}