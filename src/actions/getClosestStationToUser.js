import axios from 'axios';
import _ from 'lodash';
import { fetchDrivingTimeToNearestStation } from './getUserDrivingTimeToPrimaryStation';

export const getClosestStationToUser = 'getClosestStationToUser';

let google = window.google;
let DistanceMatrixService = new google.maps.DistanceMatrixService();
let i = 0;
let stationList = [];
let stationPlacesList = [];
let stationDriveTime = [];
let closestStationToUser = [];

export function fetchClosestStationToUser(latitude, longitude) {
    return (dispatch, getState) => {
        axios.get('http://localhost:3000/stationswithparking').then((stations) => {
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
                if (status === 'OK') {
                    stationDriveTime = response.destinationAddresses.map(function (item, index) {
                        return { stationAddress: item, distance: response.rows[0].elements[index].duration.value };
                    });
                }
                stationDriveTime = _.sortBy(stationDriveTime, ['distance'])
                closestStationToUser = stationDriveTime[0]
                dispatch(updateClosestStationToUser(closestStationToUser))
                dispatch(fetchDrivingTimeToNearestStation(latitude, longitude, closestStationToUser))
            }
        })
    }
}

export function updateClosestStationToUser(closestStationToUser) {
    return {
        type: getClosestStationToUser,
        payload: closestStationToUser
    }
}