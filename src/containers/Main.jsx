import React, { Component } from 'react'
import PetCard from '../components/PetCard'

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.addToCart = this.addToCart.bind(this)
  }


  addToCart(event) {
    alert('Adding to cart')
    event.preventDefault()
  }
  
  render() {
    const testCards = []

    for(let i = 0; i < 5; i++) {
      testCards.push(<PetCard key={i} addToCart={this.addToCart}></PetCard>)
    }

    return (
      <div>
        {testCards}
      </div>
    )
  }
}
