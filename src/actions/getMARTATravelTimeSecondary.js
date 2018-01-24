export const getMARTATravelTimeSecondary = 'getMARTATravelTimeSecondary';

let google = window.google;

export function fetchMARTATimeSecondary(station, destination, drivingTimeToStation) {

    return (dispatch, getState) => {
        
        console.log(station.stationAddress, "station2")
        console.log(destination, "destination2")
        console.log(drivingTimeToStation, "drivingtime2")

        let directionsService = new google.maps.DirectionsService();
        let currentTime = (new Date).getTime();
        let adjustedTime = currentTime + drivingTimeToStation + 300000;
        let martaTime = [];
        directionsService.route({
            origin: station.stationAddress + '',
            destination: { placeId: destination + '' },
            drivingOptions: {
                departureTime: new Date(adjustedTime)
            },
            travelMode: 'TRANSIT'
        }, (response, status) => {
            console.log(response, "response Mickey")

            if (status === "OK") {
                let i = 0
                let stepsResponse = response.routes[0].legs[0].steps
                let stepsInstructions = []
                for (i; i < stepsResponse.length; i++) {
                    stepsInstructions.push(stepsResponse[i].instructions)
                }
                //figure out if Google wants the user to take a bus, if so, driving is immediately the best option
                let busTest = stepsInstructions.filter(s => s.includes("Bus"))
                if (busTest.length > 0) {
                    martaTime.push("BUS_PRESENT")
                }
                else {
                    martaTime.push(response);
                }
                dispatch(updateMARTATimeSecondary(martaTime));
            }
        });
    }
}

export function updateMARTATimeSecondary(martaTime) {
    return {
        type: getMARTATravelTimeSecondary,
        payload: martaTime
    }
}