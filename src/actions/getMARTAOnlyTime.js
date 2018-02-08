export const getMARTAOnlyTime = 'getMARTAOnlyTime';

let google = window.google;

export function fetchMARTAOnlyTime(latitude, longitude, destination) {

    return (dispatch, getState) => {
        // avoid Google limits
        let millisecondsToWait = 6000;
        setTimeout(function () {
            let directionsService = new google.maps.DirectionsService();

            let martaTime = [];

            directionsService.route({
                origin: {
                    lat: latitude,
                    lng: longitude
                },
                destination: { placeId: destination + '' },
                travelMode: 'TRANSIT'
            }, (response, status) => {
                console.log(status, "status MARTAONLY")
                martaTime.push(response);
                dispatch(updateMARTAOnlyTime(martaTime));
            });
        }, millisecondsToWait)
    }
}

export function updateMARTAOnlyTime(martaTime) {
    return {
        type: getMARTAOnlyTime,
        payload: martaTime
    }
}