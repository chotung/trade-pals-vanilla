import React, { Component } from 'react'

export default class DeliveryOptions extends Component {
  state = {
    shipping: true,
    shippingOption: [{}],
    pickup: false
  }


  render() {
    return (
      <div>
        The container for total, shipping options, pickup 
      </div>
    )
  }
}
