export const getMARTATravelTimePrimary = 'getMARTATravelTimePrimary';

let google = window.google;

export function fetchMARTATimePrimary(station, destination, drivingTimeToStation) {
    return (dispatch, getState) => {
        
        let directionsService = new google.maps.DirectionsService();
        let currentTime = (new Date).getTime();
        let adjustedTime = currentTime + drivingTimeToStation + 300000;
        let martaTime = [];

        directionsService.route({
            origin: station + '',
            destination: { placeId: destination + '' },
            drivingOptions : {
                departureTime: new Date(adjustedTime)
            },
            travelMode: 'TRANSIT'
        }, (response, status) => {
            martaTime.push(response);
            dispatch(updateMARTATimePrimary(martaTime));
        });
    }
}

export function updateMARTATimePrimary(martaTime) {
    return {
        type: getMARTATravelTimePrimary,
        payload: martaTime
    }
}