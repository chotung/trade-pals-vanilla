// import React from "react";
import { Card, Button, Form } from "react-bootstrap";
// import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";




// const PetCard = props => {

//   const goToCardDetails = cardId => {
//     console.log(cardId);
//     localStorage.setItem("selectedCard", cardId);
//     props.history.push(`/petpage/:${cardId}`);
//     // you can manage here to pass the clicked card id to the card details page if needed
//   };

//   const { pet } = props;
//   // console.log(pet);
//   return (
//     <Form onSubmit={props.addToCart} id={pet.name} data={pet}>
//       <Card className="pet-card" style={{ width: "100%" }}>
//         <Card.Body className="pet-body">
//           <Card.Img
//             className="pet-image"
//             variant="top"
//             src={`${pet.imgUrl}`}
//             alt={pet.name}
//           />
//           <Card.Title>{pet.name}</Card.Title>
//           <Card.Text>
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//             Voluptatem, totam?
//           </Card.Text>
//           <span>
//             <Button variant="primary" type="submit" value="Submit">
//               Add To Cart
//             </Button>
//             <Button onClick={() => goToCardDetails(pet.key)}>Learn More</Button>
//             {/* <NavLink to="/dashboard">More Details</NavLink> */}
//           </span>
//         </Card.Body>
//       </Card>
//     </Form>
//   );
// };

// export default withRouter(PetCard)
// Click pet image or learn more
// How do i go to more details
// Goes to the pet details


import React, { Component } from 'react'

export default withRouter(class PetCard extends Component {


  goToCardDetails = cardId => {
    console.log(cardId)
    localStorage.setItem("selectedCard", cardId);
    // this.props.history.push(`/${cardId.name}`);
    this.props.history.push(`/petpage`);
    // you can manage here to pass the clicked card id to the card details page if needed
  };

  render() {
    const { pet } = this.props
    // console.log(pet)
    return (
    <Form onSubmit={this.props.addToCart} id={pet.name} data={pet}>
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
            <Button variant="primary" type="submit" value="Submit">
              Add To Cart
            </Button>
            <div onClick={() => this.goToCardDetails(pet)}> Learn More </div>
            {/* <Button onClick={() => goToCardDetails(pet.key)}>Learn More</Button> */}
            {/* <NavLink to="/dashboard">More Details</NavLink> */}
          </span>
        </Card.Body>
      </Card>
    </Form>
    );
  }
})



/**
 * if you are using redux you can get the store data in the props in any component.
 */