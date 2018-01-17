import axios from 'axios';
import _ from 'lodash';

export const getClosestStationToDestination = 'getClosestStationToDestination';

let google = window.google;
let DistanceMatrixService = new google.maps.DistanceMatrixService();
let i = 0;
let stationList = [];
let stationPlacesList = [];
let stationWalkTime = [];
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
            DistanceMatrixService.getDistanceMatrix(
                {
                    origins: stationPlacesList,
                    destinations: [{placeId: destination + ''}],
                    travelMode: 'WALKING',
                }, callback);
            function callback(response, status) {

                    console.log(status, "status")
                //stationWalkTime = response.destinationAddresses.map(function (item, index) {
                    //return { stationAddress: item, distance: response.rows[0].elements[index].duration.value };
                //});
                stationWalkTime = _.sortBy(stationWalkTime, ['distance'])
                closestStationToDestination = stationWalkTime[0]
                dispatch(updateClosestStationtoDestination(closestStationToDestination));
            }
        })
    }
}

export function updateClosestStationtoDestination(closestStationToDestination) {
    return {
        type: getClosestStationToDestination,
        payload: closestStationToDestination
    }
}