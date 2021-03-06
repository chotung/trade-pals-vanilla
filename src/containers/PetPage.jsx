import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
// import PetCard from "../components/PetCard"
// import CartItem from "../components/CartItem";
import PetDetails from "../components/PetDetails";
import Review from "../components/Review";
import BuyingOptions from "../components/BuyingOptions";

const mapStateToProps = state => {
  return {
    pet: state.petCard
  };
};

const PetPage = props => {
  return (
    <Container fluid className="pet-details">
      <PetDetails petData={props} />
      <Row>
        <Col>
          <Review />
        </Col>
      </Row>
      <Row>
        <Col>
          <BuyingOptions />
        </Col>
      </Row> 
    </Container>
  );
};

export default connect(mapStateToProps)(PetPage);

/* <h2 className="pet-name">{pet.name}</h2>
      <img src={pet.imgUrl} alt="" style={{ width: "100px", height: "auto" }} />
      <div className="description">
        <p>{pet.age}</p>
        <p>{pet.breed}</p>
        <p>{pet.sex}</p>
        <p>{pet.location}</p>
        <p>{pet.price}</p>
      </div> */

/**
       * <div>Pet info</div>
          <div>Breed Info</div>
          <div>Customer Review of the seller/adoption agency</div>
       */
