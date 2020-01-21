import React from "react";
// import PetSlideShow from "../components/PetSlideShow";
// import { Container, Row, Col, Image, Card } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import { addToPetCard } from "../config/actions";
// import PetCard from "../components/PetCard"
import MapContainer from "../components/MapContainer";

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
    const desc = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere voluptatibus hic laudantium facilis mollitia consequuntur, eum sit sequi minus consectetur aut officiis nulla, est ab magni itaque sint et quod cupiditate quos assumenda quis! Ratione earum corporis ipsam molestiae in debitis eos, nisi expedita sunt, provident iste eligendi sint reiciendis molestias voluptas architecto, ipsa optio perferendis. Laborum quisquam quasi quis ab error rerum vero impedit itaque laboriosam maxime nemo necessitatibus iusto modi ad at debitis nam voluptate expedita, corrupti fugiat pariatur cum sint. Iure, saepe pariatur? Quas qui maiores possimus consequatur asperiores, distinctio officia blanditiis delectus ad culpa consequuntur deleniti!"
    return (
      <Container fluid className="homepage p-0">
        {/* Opening Image */}
        <h1>Featured Pet</h1>
        <MapContainer/>
        <form>
          <input type="text" name="location" id="location" placeholder="City or Province"/>
        </form>
      </Container>
    );
  }
}
export default connect(mapStateToProps)(Home);

// Featured Pet should always be updated if adopted