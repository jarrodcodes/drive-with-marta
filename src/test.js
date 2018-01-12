let google = window.google;

let directionsService = new google.maps.DirectionsService();

let stationList = [];

let stationDriveTime = [];

fetch('http://localhost:3000/stationswithparking').then((stations) => {

stationList.push(stations)
}).then(() => {



console.log(stationList)

})