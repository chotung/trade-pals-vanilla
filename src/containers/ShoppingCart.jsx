import React, { Component } from 'react'
import CartItem from '../components/CartItem';
import DeliveryOptions from '../containers/DeliveryOptions'


export default class ShoppingCart extends Component {
  render() {
    return (
      <div>
        <CartItem />
        <DeliveryOptions />
      </div>
    )
  }
}
