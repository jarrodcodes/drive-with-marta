import axios from 'axios';
import _ from 'lodash';

export const getClosestStationToDestination = 'getClosestStationToDestination';

let google = window.google;
let DistanceMatrixService = new google.maps.DistanceMatrixService();
let i = 0;

export function fetchClosestStationtoDestination(destination) {
    
    let stationList = [];
    let stationList2 = [];
    let stationPlacesList = [];
    let stationPlacesList2 = [];
    let stationWalkTime = [];
    let stationWalkTime2 = [];
    let closestStationToDestination = [];
    let bothWalkTimes = [];

    return (dispatch, getState) => {
        axios.get('http://localhost:3000/stationsfirstbatch').then((stations) => {
            stationList.push(stations)
        }).then(() => {
            for (i = 0; i < stationList[0].data.length; i++) {
                stationPlacesList.push({ placeId: stationList[0].data[i].placeID + '' })
            }
        }).then(() => {
            DistanceMatrixService.getDistanceMatrix(
                {
                    origins: [{ placeId: destination + '' }],
                    destinations: stationPlacesList,
                    travelMode: 'WALKING',
                }, callback);
            function callback(response, status) {
                if (status === 'OK') {
                    console.log(response, "station responses")
                    stationWalkTime = response.destinationAddresses.map(function (item, index) {
                        return { stationAddress: item, distance: response.rows[0].elements[index].duration.value };
                    });
                }
            }
        }).then(() => {
            axios.get('http://localhost:3000/stationssecondbatch').then((stations) => {
                stationList2.push(stations)
            }).then(() => {
                for (i = 0; i < stationList2[0].data.length; i++) {
                    stationPlacesList2.push({ placeId: stationList2[0].data[i].placeID + '' })
                }
            }).then(() => {
                DistanceMatrixService.getDistanceMatrix(
                    {
                        origins: [{ placeId: destination + '' }],
                        destinations: stationPlacesList2,
                        travelMode: 'WALKING',
                    }, callback);
                function callback(response, status) {
                    if (status === 'OK') {
                        stationWalkTime2 = response.destinationAddresses.map(function (item, index) {
                            return { stationAddress: item, distance: response.rows[0].elements[index].duration.value };
                        });
                    }
                    bothWalkTimes = _.concat(stationWalkTime, stationWalkTime2);
                    bothWalkTimes = _.sortBy(bothWalkTimes, ['distance'])
                    closestStationToDestination = bothWalkTimes[0]
                    // determine if closest MARTA station to user's destination is too far to walk, the assume max distance someone would want to walk is a mile both ways

                    dispatch(updateClosestStationtoDestination(closestStationToDestination));
                }
            })
        })
    }
}



export function updateClosestStationtoDestination(closestStationToDestination) {

    return {
        type: getClosestStationToDestination,
        payload: closestStationToDestination
    }
}