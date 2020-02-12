import React from "react";
import { Card, Button, Form } from "react-bootstrap";
import { addToPetCard } from "../config/actions";
import { withRouter } from "react-router-dom";

const capitalize = word => {
  if (typeof word !== "string") return "";
  return word.charAt(0).toUpperCase() + word.slice(1);
};

const CartItem = props => {
  const goToCardDetails = cardId => {
    addToPetCard(cardId);
    props.history.push(`/petpage/${cardId.name}`);
  };

  // console.log(props);

  const { cart } = props;
  // const stringPet = JSON.stringify(cart)
  return (
    <Form onSubmit={props.removeFromCart} id={cart.name} data-cart={cart.name}>
      <Card bg="light" className="cart-item flex-row">
        <div className="border-bottom-0 border-right card-header">
          <h3>{capitalize(cart.name)}</h3>
          {/* <img src={cart.imgUrl} alt={cart.name} /> */}
          <Card.Img
            onClick={() => goToCardDetails(cart)}
            variant="top"
            src={cart.imgUrl}
            alt={cart.name}
          />
        </div>
        <div className="info-block">
          <div className="info-list">
            <p>{cart.sex}</p>
            <p>{cart.breed}</p>
            <p>{cart.location}</p>
          </div>
          <div className="description">
            {cart.desc}
          </div>
          <p>{cart.price}</p>
        </div>
        {cart.name ? <Button variant="danger" type="submit" value="Submit">
          X
        </Button> : null}
      </Card>
    </Form>
  );
};

export default withRouter(CartItem);
