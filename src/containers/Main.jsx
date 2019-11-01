import React, { Component } from 'react'
import PetCard from '../components/PetCard'
import { connect } from 'react-redux'
import { removePetFromCatalogue, addToCart } from '../config/actions'

const mapStateToProps = state => {
  return {
    pets: state.pets,
    cart: state.shoppingCart
  }
}

export default connect(mapStateToProps)(class Main extends Component {
  constructor(props) {
    super(props)

    this.addToCart = this.addToCart.bind(this)
    this.makeCards = this.makeCards.bind(this)
  }



  // Might want to refactor this out into redux??
  addToCart(event) {
    event.preventDefault()
    const { pets } = this.props
    // const { pets } = this.state
    const chosenPet = pets.filter(pet => pet.name === event.target.id)
    const availablePets = pets.filter(pet => pet.name !== event.target.id )
    // this.setState((prevState) => ({
    //     pets: availablePets,
    //     cart: [...prevState.cart, chosenPet[0]],
    //   }))
    // console.log(availablePets)
    removePetFromCatalogue(availablePets)
    addToCart(chosenPet[0])
  }
  
  makeCards() {
    const { pets } = this.props
    console.log('inside make cards ', this.props)
    return pets.map( (pet, i) => {
      return <PetCard key={i} addToCart={this.addToCart} pet={pet}/>
    })
  }


  render() {
    return (
      <div className="pets-container">
        {this.makeCards()}
      </div>
    )
  }
})



