import store from '../store'

//ACTIONS
const REMOVE_PET_FROM_CATALOGUE = 'REMOVE_PET_FROM_CATALOGUE'
const ADD_TO_CART = 'ADD_TO_CART'
// const REMOVED_FROM_CART = 'REMOVED_FROM_CART'
// const UNDO_REMOVE = 'UNDO_REMOVE'


// PET ACTIONS
export const removePetFromCatalogue = (pets) => {
  // console.log('dispatching action of adding a pets to the cart state')
  // console.log(pets)
  store.dispatch({
    type: REMOVE_PET_FROM_CATALOGUE,
    payload: pets
  })
}


// CART ACTIONS


export const addToCart = (pet) => {
  console.log('adding to cart')
  store.dispatch({
    type: ADD_TO_CART,
    payload: pet
  })
}