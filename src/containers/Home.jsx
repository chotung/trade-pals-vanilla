import React from "react";
import PetSlideShow from "../components/PetSlideShow";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import { connect } from "react-redux";
import { addToPetCard } from "../config/actions";
import PetCard from "../components/PetCard"

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
        <Col style={{ textAlign: "center", padding: ".5rem" }}>
            <h1>Featured Pet</h1>
          </Col>
        <Row className="home-row">
          <Col>
            <PetSlideShow />
          </Col>
          <Col className="home-col-header p-0"></Col>
        </Row>

        {/* Featured Pet */}
        {/* <Row style={{ width: "100%" }}>
          
          <Col className="featured-card-col" lg={12}> */}
            {/* <Card bg="light" className="">
              <div className="border-bottom-0 border-right card-header">
                <Card.Img
                  className="featured-card"
                  variant="top"
                  src="https://images.unsplash.com/photo-1517638083100-3f5eb3055a8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                  alt={"some-dog"}
                />
              </div>
              <div className="info-block" style={infoStyles}>
                <div className="description" onClick={this.flip}>
                  {truncated ? this.truncate(desc) : desc}
                </div>
              </div>
            </Card>
          </Col>
          <Col className="featured-card-col" lg={12}>
            <Card bg="light" className="">
              <div className="border-bottom-0 border-right card-header">
                <Card.Img
                  className="featured-card"
                  variant="top"
                  src="https://images.unsplash.com/photo-1545529787-5ba04530c1fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                  alt={"some-cat"}
                />
              </div>
              <div className="info-block" style={infoStyles}>
                <div className="description" onClick={this.flip}>
                  {truncated ? this.truncate(desc) : desc}
                </div>
              </div>
            </Card> */}
          {/* </Col>
        </Row> */}
      </Container>
    );
  }
}
export default connect(mapStateToProps)(Home);

// Featured Pet should always be updated if adopted