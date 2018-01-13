import axios from 'axios';
import _ from 'lodash';

export const getClosestStationToDestination = 'getClosestStationToDestination';

let google = window.google;
let DistanceMatrixService = new google.maps.DistanceMatrixService();
let i = 0;
let stationList = [];
let stationPlacesList = [];
let stationDriveTime = [];
let closestStationToDestination = [];

export function fetchClosestStationtoDestination(destination) {
    return (dispatch, getState) => {
        axios.get('http://localhost:3000/stations').then((stations) => {
            stationList.push(stations)
        }).then(() => {
            for (i = 0; i < stationList[0].data.length; i++) {
                stationPlacesList.push({ placeId: stationList[0].data[i].placeID + '' })
            }
        }).then(() => {
            let origin = new google.maps.LatLng(destination);
            DistanceMatrixService.getDistanceMatrix(
                {
                    origins: stationPlacesList,
                    destinations: [destination],
                    travelMode: 'transit',
                }, callback);
            function callback(response, status) {
                if (status === 'OK') {
                stationDriveTime = response.destinationAddresses.map(function (item, index) {
                    return { stationAddress: item, distance: response.rows[0].elements[index].duration.value };
                });
            }
                stationDriveTime = _.sortBy(stationDriveTime, ['distance'])
                closestStationToUser = stationDriveTime[0]
                dispatch(updateClosestStationtoDestination(closestStationToDestination));
            }
        })
    }
}

export function updateClosestStationtoUser(closestStationToDestination) {
    return {
        type: getClosestStationToDestination,
        payload: closestStationToDestination
    }
}