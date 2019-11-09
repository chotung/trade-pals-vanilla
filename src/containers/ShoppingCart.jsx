import React from "react";
import CartItem from "../components/CartItem";
import DeliveryOptions from "../containers/DeliveryOptions";
import { connect } from "react-redux";
import { Container, Card, Col, Row } from "react-bootstrap";
const mapStateToProps = state => {
  return {
    cartItems: state.shoppingCart
  };
};

const ShoppingCart = props => {
  const createCartItems = () => {
    const { cartItems } = props;
    return cartItems.cart.map((cart, i) => {
      return <CartItem key={i} cart={cart} undoRemove={cartItems.undoRemove} />;
    });
  };

  return (
    <Container fluid>
      <Row>
        <Col className="cart-col">{createCartItems()}</Col>
        <Col xs lg="2" className="delivery-col">
          <DeliveryOptions />
        </Col>
      </Row>
    </Container>
  );
};

export default connect(mapStateToProps)(ShoppingCart);
