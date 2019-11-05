import React from 'react'
import CartItem from '../components/CartItem';
import DeliveryOptions from '../containers/DeliveryOptions'
import { connect } from 'react-redux'
import { Card } from 'react-bootstrap'
const mapStateToProps = state => {
  return {
    cartItems: state.shoppingCart
  };
}






const ShoppingCart = (props) => {
  // console.log(props)
  

  const createCartItems = () => {
    const { cartItems } = props
    console.log(cartItems)
    // Loop through that
    // return the components
    return cartItems.cart.map((cart, i) => {
      return (
        <Card key={i}>
          <CartItem key={i} cart={cart} undoRemove={cartItems.undoRemove} />
        </Card>
      )
    }) 
  };

  return (
    <div>
      {createCartItems()}
      {/* <CartItem cartObj={props.cartItems} /> */}
      <DeliveryOptions />
    </div>
  );
}

export default connect(mapStateToProps)(ShoppingCart);
