import { fetchDrivingTimeToSecondaryStation } from '../actions/getUserDrivingTimeToSecondaryStation.js';
import axios from 'axios';
import _ from 'lodash';

export const getClosestStationOfPreferredLineToUser = 'getClosestStationOfPreferredLineToUser';

let google = window.google;
let DistanceMatrixService = new google.maps.DistanceMatrixService();
let i = 0;
let stationList = [];
let stationPlacesList = [];
let stationDriveTime = [];
let closestStationOfPreferredLineToUser = [];

export function fetchClosestStationOfPreferredLineToUser(latitude, longitude, stationColor, destination) {
    return (dispatch, getState) => {

        let millisecondsToWait = 3000;

        setTimeout(function () {

            // check if user only has walking/bus directions
            if (stationColor != "none") {
                let destinationRepeat = destination;
                axios.get('http://localhost:3000/' + stationColor).then((stations) => {
                    stationList.push(stations)
                }).then(() => {
                    for (i = 0; i < stationList[0].data.length; i++) {
                        stationPlacesList.push({ placeId: stationList[0].data[i].placeID + '' })
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
                        console.log(status, "preferred station")
                        if (status === 'OK') {
                            stationDriveTime = response.destinationAddresses.map(function (item, index) {
                                return { stationAddress: item, distance: response.rows[0].elements[index].duration.value };
                            });
                        }
                        stationDriveTime = _.sortBy(stationDriveTime, ['distance'])
                        closestStationOfPreferredLineToUser = stationDriveTime[0]
                        dispatch(updateClosestStationOfPreferredLineToUser(closestStationOfPreferredLineToUser))
                        dispatch(fetchDrivingTimeToSecondaryStation(latitude, longitude, closestStationOfPreferredLineToUser, destinationRepeat))
                    }
                })
            }
            else {
                return
            }
        }, millisecondsToWait)
    }
}

export function updateClosestStationOfPreferredLineToUser(closestStationofPreferredLineToUser) {
    return {
        type: getClosestStationOfPreferredLineToUser,
        payload: closestStationofPreferredLineToUser
    }
}