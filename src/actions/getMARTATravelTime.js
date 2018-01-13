export const getMARTATravelTime = 'getMARTATravelTime';

let google = window.google;

export function fetchMARTATimePrimary(station, destination) {
    return (dispatch, getState) => {
        let directionsService = new google.maps.DirectionsService();

        let martaTime = [];

        directionsService.route({
            origin: station + '',
            destination: { placeId: destination + '' },
            travelMode: 'TRANSIT'
        }, (response, status) => {
            martaTime.push(response);
            console.log(martaTime, 'martatime')
            dispatch(updateMARTATimePrimary(martaTime));
        });
    }
}

export function updateMARTATimePrimary(martaTime) {
    return {
        type: getMARTATravelTime,
        payload: martaTime
    }
}