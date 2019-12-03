import React from "react";
import PetSlideShow from "../components/PetSlideShow";
import { Container, Row, Col, Image } from "react-bootstrap";
import { connect  } from "react-redux"

const mapStateToProps = (state) => {
  return {
    pets: state.pets
  }
}

const Home = (props) => {
  return (
    <Container fluid className="homepage p-0">
      <Row className="home-row">
        <Col className="home-col-header p-0">
          <div className="content-header">
            <Image
              src="https://images.unsplash.com/photo-1559284957-298b8b225576?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              alt="front-page"
              fluid
              style={{ width: "100%"}}

            />
            <div className="home-text">
              <h1 className="content-title">Trade Pals</h1>
              <p className="content-description">
                Where Furry Strangers Become Family
              </p>
            </div>
          </div>
        </Col>
        <Col className="home-col-featured-pet p-0">
          <div className="featured-pet">
            <Image
              className="featured-pet-picture"
              src={props.pets[2].imgUrl}
              alt="some-dog"
              style={{ width: "100%", height: "100" }}
            />
            <h2 className="content-featured-headline">Featured Pet</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, doloremque.
            </p>
          </div>
        </Col>
      </Row>

      {/* <PetSlideShow /> */}
    </Container>
  );
};

export default connect(mapStateToProps)(Home);

// Featured Pet should always be updated if adopted
