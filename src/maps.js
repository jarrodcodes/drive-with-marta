import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import { addDestination } from './actions/getUserDestination.js';
import { fetchDriveTimeToDestination } from './actions/getUserDrivingTimeToDestination.js';
import { fetchMARTATimePrimary } from './actions/getMARTATravelTimePrimary.js';
import { fetchClosestStationtoDestination } from './actions/getClosestStationToDestination.js';
import { fetchColorOfSecondaryStation } from './actions/getColorOfSecondaryStation.js';
import { fetchMARTATimeSecondary } from './actions/getMARTATravelTimeSecondary.js';
import { fetchDrivingTimeToSecondaryStation } from './actions/getUserDrivingTimeToSecondaryStation.js';

let google = window.google; //needed so that React will accept global values from the <script> tag

class Maps extends Component {

  componentDidMount() {

    let self = this;

    //Creating the Google map

    function initAutocomplete() {

      let map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: self.props.location.coords.latitude, lng: self.props.location.coords.longitude },
        zoom: 15,
        mapTypeId: 'roadmap',
        zoomControl: true,
        types: ['establishment'],
      });

      //adding a marker based on location

      let userLocationMarker = new google.maps.Marker({
        position: { lat: self.props.location.coords.latitude, lng: self.props.location.coords.longitude },
        map: map
      });

      // Create the search box and link it to the UI element.

      let input = document.getElementById('pac-input');
      let searchBox = new google.maps.places.SearchBox(input);

      // Bias the SearchBox results towards current map's viewport.

      map.addListener('bounds_changed', function () {
        searchBox.setBounds(map.getBounds());
      });

      let markers = [];

      // Listen for the event fired when the user selects a prediction and retrieve
      // more details for that place.

      searchBox.addListener('places_changed', function () {
        let places = searchBox.getPlaces();

        if (places.length === 0) {
          return;
        }

        //Add user's chosen destination to Redux store

        self.props.addDestination(places[0]);

        //Use only latest destination choice from Redux store

        let userDestination = (_.last(self.props.Destination[0]))

        //Calculate the drive time from the user's location to the chosen destination

        self.props.fetchDriveTimeToDestination(self.props.location.coords.latitude, self.props.location.coords.longitude, userDestination.place_id)

        //Find the nearest station to the user's destination to determine if it's too far from MARTA to even bother

        self.props.fetchClosestStationtoDestination(userDestination.place_id)

        //Calculate the transit time from the nearest MARTA station, and begin the loop to determine the secondary MARTA option as well

        self.props.fetchMARTATimePrimary(self.props.ClosestStationToUser.ClosestStationToUser.stationAddress, userDestination.place_id, self.props.DrivingTimeToPrimaryStation.DrivingTimeToNearestStation[0].routes[0].legs[0].duration.value, self.props.location.coords.latitude, self.props.location.coords.longitude)

        // Clear out the old markers.

        markers.forEach(function (marker) {
          marker.setMap(null);
        });
        markers = [];

        // For each place, get the icon, name and location.

        let bounds = new google.maps.LatLngBounds();
        places.forEach(function (place) {
          if (!place.geometry) {
            console.log("Returned place contains no geometry");
            return;
          }

          // Create a marker for each place.

          markers.push(new google.maps.Marker({
            map: map,
            title: place.name,
            position: place.geometry.location
          }));

          if (place.geometry.viewport) {
            // Only geocodes have viewport.
            bounds.union(place.geometry.viewport);
          } else {
            bounds.extend(place.geometry.location);
          }
        });
        map.fitBounds(bounds);
      });

    }

    //initialize the Map

    initAutocomplete();
  }

  render() {

    return (
      <div>
        <input id="pac-input" className="controls" type="text" placeholder="Where would you like to go?">
        </input>
        <div id="map">
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    Destination: state.Destination,
    ClosestStationToUser: state.ClosestStationToUser,
    DrivingTimeToPrimaryStation: state.DrivingTimeToPrimaryStation,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchDriveTimeToDestination, addDestination, fetchMARTATimePrimary, fetchClosestStationtoDestination, fetchColorOfSecondaryStation, fetchMARTATimeSecondary, fetchDrivingTimeToSecondaryStation }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Maps);