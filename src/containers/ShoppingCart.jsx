import React from 'react'
import CartItem from '../components/CartItem';
import DeliveryOptions from '../containers/DeliveryOptions'
import { connect } from 'react-redux'

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
  };

  return (
    <div>
      {createCartItems()}
      {/* <CartItem cartObj={props.cartItems} /> */}
      {/* <DeliveryOptions /> */}
    </div>
  );
}

export default connect(mapStateToProps)(ShoppingCart);
