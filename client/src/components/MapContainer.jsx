import React, { Component } from "react";
import { Map, GoogleApiWrapper }  from "google-maps-react"
import {googleKey} from "../secret"
const mapStyles = {
  width: "100%",
  height: "100%"
};

class MapContainer extends Component {

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: 40, lng: -70}}
      ></Map>
    );
  }
}

export default GoogleApiWrapper({
  // apiKey: "AIzaSyBhOLzTEcpWGHMFBZze29OTY0mGk8H-U1g"
  apiKey: googleKey
})(MapContainer);