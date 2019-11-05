import React from "react";
import PetCard from "../components/PetCard";
import { connect } from "react-redux";
import { removePetFromCatalogue, addToCart } from "../config/actions";
import { Col, Row, Container } from "react-bootstrap";

const mapStateToProps = state => {
  return {
    pets: state.pets,
    cart: state.shoppingCart
  };
};

const Main = props => {
  const addingToCart = event => {
    event.preventDefault();
    const { pets } = props;
    const chosenPet = pets.filter(pet => pet.name === event.target.id);
    const availablePets = pets.filter(pet => pet.name !== event.target.id);
    // console.log(chosenPet)
    removePetFromCatalogue(availablePets);
    addToCart(chosenPet[0]);
  };

  // const makeCards = () => {
  //   const { pets } = props;
  //   return pets.map((pet, i) => {
  //     return (
  //       <Col
  //         lg={3}
  //         md={4}
  //         sm={6}
  //         xs={12}
  //         key={i}
  //         className="align-items-stretch  d-flex"
  //       >
  //         <PetCard key={i} addToCart={addingToCart} pet={pet} />
  //       </Col>
  //     );
  //   });
  // };

  const makeRows = () => {
    const { pets } = props;
    const splitArray = chunckArray(pets, 4);
    return splitArray.map((row, key) => {
      return (
        <Row className="pet-row" key={key}>
          {row.map((pet, i) => {
            // console.log(pet)
            return (
              <Col lg={3} md={6} sm={6} xs={12} key={i} h-100>
                <PetCard key={i} addToCart={addingToCart} pet={pet} />
              </Col>
            );
          })}
        </Row>
      );
    });
  };

  const chunckArray = (arr, chunkCount) => {
    let chunks = [],
      i,
      j;

    for (i = 0, j = arr.length; i < j; i += chunkCount) {
      chunks.push(arr.slice(i, i + chunkCount));
    }
    return chunks;
  };

  return (
    <Container className="pet-container justify-content-center" fluid="true">
      {makeRows()}
    </Container>
  );
};

export default connect(mapStateToProps)(Main);
