import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
export default class DeliveryOptions extends Component {
  state = {
    shipping: true,
    shippingOption: [{}],
    pickup: false
  }


  render() {
    return (
      <Container>
        The container for total, shipping options, pickup 
      </Container>
    )
  }
}
