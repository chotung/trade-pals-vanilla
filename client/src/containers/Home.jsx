import React from "react";
// import PetSlideShow from "../components/PetSlideShow";
// import { Container, Row, Col, Image, Card } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { addToPetCard } from "../config/actions";
// import PetCard from "../components/PetCard"
import GoogleMap from "../components/GoogleMap";
import UserLocationForm from "../components/UserLocationForm";

const mapStateToProps = state => {
  return {
    pets: state.pets
  };
};

const infoStyles = {
  display: "flex",
  justifyContent: "center",
  alignSelf: "center",
  margin: "2rem"
};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      truncated: true
    };
  }
 
  // I use these blocks twice refactor this later Here and PETCARD.jsx
  goToCardDetails = cardId => {
    addToPetCard(cardId);
    this.props.history.push(`/petpage/${cardId.name}`);
  };

  truncate = str => {
    return str.length > 10 ? str.substring(0, 25) + "..." : str;
  };

  flip = () => {
    this.setState(prevState => {
      return {
        truncated: !prevState.truncated
      };
    });
  };

  render() {
    const { truncated } = this.state;
    // All descriptions will be attached to the pet model and be pulled from the store

    return (
      // <Container fluid className="homepage p-0">
      <div id="map-canvas">
        <GoogleMap />

      </div>
      // </Container>
      // <GoogleMap />

    );
  }
}
export default connect(mapStateToProps)(Home);

// Featured Pet should always be updated if adopted


/**
 *  <div className="row" style={{ zIndex: 11, justifyContent: "start"}}>
          <h1>Featured Pet</h1>
          <form>
            <input
              type="text"
              name="location"
              id="location"
              placeholder="City or Province"
            />
          </form>
        </div>
 */