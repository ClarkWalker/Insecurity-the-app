// genaric card
import React, { Component } from 'react';
// import { Router, browserHistory, Route, Link } from 'react-router';

// var key = "AIzaSyBrZPy5tN2veJeIY4LXn2K3pCYcuu0-AVc"



// fetch(`https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`)
  // .then()

class LocationCard extends Component {

  render() {
    let pos = navigator
      .geolocation
      .getCurrentPosition(function(success, err, options) {
        let lat = success.coords.latitude
        let lng = success.coords.longitude
        let position = [lat, lng]
        console.log(lng)
        console.log(lat)
        return position
      })
    return (
      <div className="card" >
        <h4>Your Current Location ...</h4>
        <div className="card-content">
          <img src="./img/map-screenshot.png" />
        </div>
        {/* <h4>Description: ...</h4> */}
        {/* <h4>Solutions: ...</h4> */}
      </div>
    )
  }
}

export default LocationCard;