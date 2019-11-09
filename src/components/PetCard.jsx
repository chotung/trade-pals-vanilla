import React from "react";
import { Card, Button, Form } from "react-bootstrap"





const PetCard = props => {
  const { pet } = props;
  // console.log(pet)
  return (
    // <div className={`pet-${pet.name}`}>
    //   <form onSubmit={props.addToCart} id={pet.name} data={pet}>
    //     {pet.name}
    //     {pet.sex}
    //     {pet.age}
    //     {pet.breed}
    //     {pet.location}
    //     {pet.price}
    //     <button size="small" color="primary" type="submit" value="Submit">
    //       Add To Cart
    //     </button>
    //     <button size="small" color="primary">
    //       Learn More
    //     </button>
    //   </form>
    // </div>
    <Form onSubmit={props.addToCart} id={pet.name} data={pet}>
      <Card className="pet-card" style={{ width: "100%" }}>
        <Card.Body className="pet-body">
          <Card.Img className="pet-image" variant="top" src={`${pet.imgUrl}`} alt={pet.name}/>
          <Card.Title>{pet.name}</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatem, totam?
          </Card.Text>
          <Button variant="primary" type="submit" value="Submit">
            Add To Cart
          </Button>
          <Button>Learn More</Button>
        </Card.Body>
      </Card>
    </Form>
  );
};

export default PetCard;
