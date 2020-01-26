import React, { Component } from "react";
import { Map, GoogleApiWrapper }  from "google-maps-react"
import { googleKey } from "../secret"
import { Container } from "react-bootstrap"
const mapStyles = {
  width: "100%",
  height: "100%",
  position: "relative"
};

class GoogleMap extends Component {

  render() {
    return (
        <Map
          className="helloGoogle"
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 40, lng: -70 }}
        ></Map>
    );
  }
}



export default GoogleApiWrapper({
  apiKey: googleKey
})(GoogleMap);