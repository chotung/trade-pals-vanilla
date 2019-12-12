import React from "react";
import PetSlideShow from "../components/PetSlideShow";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import { connect } from "react-redux";
import { addToPetCard } from "../config/actions";


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
    const desc = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere voluptatibus hic laudantium facilis mollitia consequuntur, eum sit sequi minus consectetur aut officiis nulla, est ab magni itaque sint et quod cupiditate quos assumenda quis! Ratione earum corporis ipsam molestiae in debitis eos, nisi expedita sunt, provident iste eligendi sint reiciendis molestias voluptas architecto, ipsa optio perferendis. Laborum quisquam quasi quis ab error rerum vero impedit itaque laboriosam maxime nemo necessitatibus iusto modi ad at debitis nam voluptate expedita, corrupti fugiat pariatur cum sint. Iure, saepe pariatur? Quas qui maiores possimus consequatur asperiores, distinctio officia blanditiis delectus ad culpa consequuntur deleniti!"
    return (
      <Container fluid className="homepage p-0">
        {/* Opening Image */}
        <Row className="home-row">
          <Col>
            <PetSlideShow />
          </Col>
          <Col className="home-col-header p-0"></Col>
        </Row>

        {/* Featured Pet */}
        <Row style={{ width: "100%" }}>
          <Col style={{ textAlign: "center", padding: ".5rem" }}>
            <h1>Featured Pet</h1>
          </Col>
          <Col className="featured-card-col" lg={12}>
            <Card bg="light" className="flex-row">
              <div className="border-bottom-0 border-right card-header">
                <Card.Img
                  className="featured-card"
                  // style={{ width: "25vw", height: "auto" }}
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
            <Card bg="light" className="flex-row-reverse">
              <div className="border-bottom-0 border-right card-header">
                <Card.Img
                  className="featured-card"
                  // style={{ width: "25vw", height: "auto" }}
                  variant="top"
                  src="https://images.unsplash.com/photo-1545529787-5ba04530c1fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                  alt={"some-cat"}
                />
              </div>
              <div className="info-block" style={infoStyles}>
                <div className="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem incidunt quis corporis magni adipisci. Deserunt
                  modi animi ullam, minus quia officia neque maiores ut est
                  dolor rem odio explicabo impedit aperiam enim dicta, eos
                  cupiditate, totam recusandae tempora tempore? Ea, repellat
                  necessitatibus saepe quasi minima tenetur quis laborum
                  deleniti asperiores voluptas similique quam non voluptates
                  dicta cum sit quidem. Voluptatem possimus ipsam excepturi
                  ratione saepe aspernatur soluta est ab sed at in omnis enim
                  blanditiis id beatae sapiente, sit eius placeat porro?
                  Blanditiis delectus qui eum, aliquam unde quos sint repellat
                  quisquam excepturi vel quae animi quaerat laudantium iure
                  reiciendis cupiditate iste omnis officiis aspernatur deleniti
                  molestiae harum illo! Nulla, quasi, minus inventore explicabo
                  repellat veniam quae rem molestias nobis neque eveniet,
                  laudantium architecto id quod cum voluptatem sed voluptatum
                  nisi eius possimus tempora! Vel at facere beatae. Quae
                  necessitatibus voluptatibus laboriosam fugiat impedit iure
                  iste odit quis, natus pariatur.
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default connect(mapStateToProps)(Home);

// Featured Pet should always be updated if adopted
/**
 * <Col lg={12} className="home-col-featured-pet p-0">
          <div className="featured-pet">
            <Image
              className="featured-pet-picture"
              src={props.pets[2].imgUrl}
              alt="some-dog"
              // style={{ width: "100%", height: "100" }}
              fluid
            />
            <h2 className="content-featured-headline">Featured Pet</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, doloremque.
            </p>
          </div>
        </Col>
       xl={3} lg={3} md={6} sm={6} xs={12 
         <PetSlideShow /> 
 */

/**
  * <Card bg="light" className="cart-item flex-row">
        <div className="border-bottom-0 border-right card-header">
          <h3>{capitalize(cart.name)}</h3>
          <Card.Img
            onClick=''
            variant="top"
            src=''
            alt=''
          />
        </div>
        <div className="info-block">
          <div className="info-list">
          </div>
          <div className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
            placeat.
          </div>
        </div>
        <Button variant="danger" type="submit" value="Submit">
          X
        </Button>
      </Card>
  */



/**
 * <div className="content-header">
            <Image
              src="https://images.unsplash.com/photo-1559284957-298b8b225576?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              alt="front-page"
              rounded
              fluid
              style={{ width: "500px" }}
            />
            <div className="home-text">
              <h1 className="content-title">Trade Pals</h1>
              <p className="content-description">
                Where Furry Strangers Become Family
              </p>
            </div>
          </div>
 */ 