import React, { Component } from 'react';
let google = window.google; //needed so that React will accept global values from the <script> tag

class Maps extends Component {


  constructor(props) {
    super(props)

    this.state = {

    }
  }

  componentDidMount() {
    var self = this;
    //Creating the Google map
    function initAutocomplete() {
      let map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 33.8509306, lng: -84.376941 },
        zoom: 15,
        mapTypeId: 'roadmap',
        zoomControl: true
      });
      //adding a marker based on location
      let userLocationMarker = new google.maps.Marker({
        position: { lat: 33.8509306, lng: -84.376941 },
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
        self.setState({searchResult: places}).bind(this); //optional 

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
          let icon = {
            url: place.icon,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(25, 25)
          };

          // Create a marker for each place.
          markers.push(new google.maps.Marker({
            map: map,
            icon: icon,
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

    console.log('I am Maps props', this.props);
    console.log('I am Maps state', this.state);
    return (
      <div>
        <input id="pac-input" className="controls" type="text" placeholder="Where would you like to go?">
        </input>
        <h3>Your location</h3>
        <div id="map">
        </div>
      </div>
    )
  }
}

export default Maps;