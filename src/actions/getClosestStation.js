import axios from 'axios';

export const getClosestStation = 'getClosestStation';

let google = window.google;
let DistanceMatrixService = new google.maps.DistanceMatrixService();
let i = 0;
let stationList = [];
let stationPlacesList = [];
let stationDriveTime = [];
let verticalBarList = []
export function fetchClosestStation(latitude, longitude) {
    return (dispatch, getState) => {
        axios.get('http://localhost:3000/stationswithparking').then((stations) => {
            stationList.push(stations)
        }).then(() => {
            console.log(stationList)
            for (i = 0; i < stationList[0].data.length; i++) {
                stationPlacesList.push('place_id:' + stationList[0].data[i].placeID)
                verticalBarList = stationPlacesList.join(',')
                console.log(verticalBarList)
            }
        }).then(() => {
            let origin = new google.maps.LatLng(latitude, longitude);
            DistanceMatrixService.getDistanceMatrix(
                {
                    origins: [origin],
                    destinations: [origin],
                    travelMode: 'DRIVING',
                }, callback);
            function callback(response, status) {
                console.log(response)
            }

        })

        dispatch(updateClosestStation(stationDriveTime));
    }
}

export function updateClosestStation(stationDriveTime) {
    return {
        type: getClosestStation,
        payload: stationDriveTime
    }
}