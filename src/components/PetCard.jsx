import React from "react";
import { Card, Button, Form } from "react-bootstrap"
import { NavLink } from 'react-router-dom'



const PetCard = props => {

  const moreDetails = event => {
    console.log("pew pew");
    console.log(props.pet);
  };


  const { pet } = props;
  console.log(pet);
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
          <Button variant="primary" type="submit" value="Submit">
            Add To Cart
          </Button>
          {/* <Button onClick={(e) => moreDetails(e)}>Learn More</Button> */}
          <NavLink to="/dashboard"> 
          Dashboard 
          </NavLink>
        </Card.Body>
      </Card>
    </Form>
  );
};

export default PetCard;
// Click pet image or learn more 
// How do i go to more details
// Goes to the pet details