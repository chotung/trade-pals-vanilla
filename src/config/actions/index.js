import store from '../store'

//ACTIONS
const REMOVE_PET_FROM_CATALOGUE = 'REMOVE_PET_FROM_CATALOGUE'
const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";
// const REMOVED_FROM_CART = 'REMOVED_FROM_CART'
// const UNDO_REMOVE = 'UNDO_REMOVE'


// PET ACTIONS
export const removePetFromCatalogue = (pets) => {
  store.dispatch({
    type: REMOVE_PET_FROM_CATALOGUE,
    payload: pets
  })
}


// CART ACTIONS


export const addToCart = (pet) => {
  store.dispatch({
    type: ADD_TO_CART,
    payload: pet
  })
}


export const removeCartItem = (pet) => {
  store.dispatch({
    type: REMOVE_CART_ITEM,
    payload: pet
  })
}