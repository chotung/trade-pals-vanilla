import React from "react";
import { Card, Button, Form } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { addToPetCard } from "../config/actions";

const PetCard = props => {
  const goToCardDetails = cardId => {
    addToPetCard(cardId);
    props.history.push(`/petpage/${cardId.name}`);
  };

  const { pet } = props;

  return (
    <Form onSubmit={props.addToCart} id={pet.name} data={pet}>
      <Card className="pet-card" style={{ width: "100%" }}>
        <Card.Body className="pet-body">
          <Card.Img
            className="pet-image"
            variant="top"
            src={`${pet.imgUrl}`}
            alt={pet.name}
          />
          <Card.Title>{pet.name}</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatem, totam?
          </Card.Text>
          <span>
            <Button
              className="pet-button"
              variant="primary"
              type="submit"
              value="Submit"
            >
              Add To Cart
            </Button>
            <Button 
              className="pet-button" 
              onClick={() => goToCardDetails(pet)}
            >
              Learn More
            </Button>
          </span>
        </Card.Body>
      </Card>
    </Form>
  );
};

export default withRouter(PetCard);
