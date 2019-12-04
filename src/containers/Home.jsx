import React from "react";
import PetSlideShow from "../components/PetSlideShow";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    pets: state.pets
  };
};

const Home = props => {
  return (
    <Container fluid className="homepage p-0">
      {/* Opening Image */}
      <Row className="home-row">
        <Col className="home-col-header p-0">
          <div className="content-header">
            <Image
              src="https://images.unsplash.com/photo-1559284957-298b8b225576?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              alt="front-page"
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
        </Col>
      </Row>

      {/* Featured Pet */}
      <Row xl={6} lg={6} noGutters>
        <Col>
          <Image
            // style={{ width: "500px" }}
            className="featured-pet-picture"
            src={props.pets[5].imgUrl}
            alt="some-dog"
            fluid
          />
        </Col>
        <Col>
          <h2 className="content-featured-headline">Featured Pet</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, magni
            fuga! Exercitationem natus consequuntur error quisquam dolor
            incidunt. A, non aliquam corrupti, atque est maxime animi quo minus
            pariatur voluptas perferendis aperiam tempore explicabo ex,
            voluptatem vitae adipisci fuga nisi. Nostrum iste sunt dolorum
            necessitatibus consectetur earum optio sint labore.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

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
