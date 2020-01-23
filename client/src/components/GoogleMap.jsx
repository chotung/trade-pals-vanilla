import React, { Component } from "react";
import { Map, GoogleApiWrapper }  from "google-maps-react"
import { googleKey } from "../secret"
import { Container } from "react-bootstrap"
const mapStyles = {
  // flex: "1",
  // transform: 'translate(-50%, -50%)',
  width: "100%",
  height: "100%",
  // borderRadius: "1rem",
};

const containerStyles = {
  position: "relative",
  width: "100%",
  length: "100%"
}

class GoogleMap extends Component {

  render() {
    return (
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 40, lng: -70 }}
        ></Map>
    );
  }
}

// const LoadingContainer = (props) => {
//   console.log(props);
//   return (
//     <div className="FANCY">Fancy Container</div>
//   ) 
// }


export default GoogleApiWrapper({
  apiKey: googleKey
})(GoogleMap);