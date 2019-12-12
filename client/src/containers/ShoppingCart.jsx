import React from "react";
import CartItem from "../components/CartItem";
import DeliveryOptions from "../containers/DeliveryOptions";
import { connect } from "react-redux";
import { Container, Col, Row } from "react-bootstrap";
import { addPetToCatalogue, removeCartItem } from "../config/actions/index";

const mapStateToProps = state => {
  return {
    cartItems: state.shoppingCart
  };
};

const ShoppingCart = props => {
  const removeFromCart = event => {
    event.preventDefault();
    const { cartItems } = props;
    const removePet = cartItems.filter(
      removedPet => removedPet.name === event.target.id
    );
    const available = cartItems.filter(
      cartPet => cartPet.name !== event.target.id
    );

    addPetToCatalogue(removePet[0]);
    removeCartItem(available);
  };

  const createCartItems = () => {
    const { cartItems } = props;
    return cartItems.map((cart, i) => {
      return <CartItem key={i} cart={cart} removeFromCart={removeFromCart} />;
    });
  };

  return (
    <Container fluid>
      <Row>
        <Col className="cart-col">{createCartItems()}</Col>
        <Col lg="2" className="delivery-col">
          <DeliveryOptions />
        </Col>
      </Row>
    </Container>
  );
};

export default connect(mapStateToProps)(ShoppingCart);
