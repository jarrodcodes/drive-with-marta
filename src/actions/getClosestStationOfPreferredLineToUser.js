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

export function fetchClosestStationOfPreferredLineToUser(latitude, longitude, stationColor) {
    return (dispatch, getState) => {
        console.log(stationColor, "color being used")
        axios.get('http://localhost:3000' + '/' + stationColor).then((stations) => {
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
                closestStationOfPreferredLineToUser = stationDriveTime[0]
                dispatch(updateClosestStationOfPreferredLineToUser(closestStationOfPreferredLineToUser));
            }
        })
    }
}

export function updateClosestStationOfPreferredLineToUser(closestStationofPreferredLineToUser) {
    return {
        type: getClosestStationOfPreferredLineToUser,
        payload: closestStationofPreferredLineToUser
    }
}