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

export function fetchClosestStationtoUser(latitude, longitude) {
    return (dispatch, getState) => {
        axios.get('http://localhost:3000/stationswithparking').then((stations) => {
            stationList.push(stations)
        }).then(() => {
            //console.log(stationList)
            for (i = 0; i < stationList[0].data.length; i++) {
                stationPlacesList.push({ placeId: stationList[0].data[i].placeID + '' })
                //console.log(stationPlacesList)
            }
        }).then(() => {
            let origin = new google.maps.LatLng(latitude, longitude);
            DistanceMatrixService.getDistanceMatrix(
                {
                    origins: [origin],
                    destinations: stationPlacesList,
                    travelMode: 'DRIVING',
                }, callback);
            function callback(response, status) {
                if (status === 'OK') {
                stationDriveTime = response.destinationAddresses.map(function (item, index) {
                    return { stationAddress: item, distance: response.rows[0].elements[index].duration.value };
                });
            }
                stationDriveTime = _.sortBy(stationDriveTime, ['distance'])
                closestStationToUser = stationDriveTime[0]
                dispatch(updateClosestStationtoUser(closestStationToUser));
            }
        })
    }
}

export function updateClosestStationtoUser(closestStationToUser) {
    return {
        type: getClosestStationToUser,
        payload: closestStationToUser
    }
}