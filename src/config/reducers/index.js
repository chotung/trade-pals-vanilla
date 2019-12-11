import { combineReducers } from 'redux'
// import users from './users'
import pets from './pets'
import shoppingCart from './shoppingCart'
import petCard from './petcard'

const rootReducer = combineReducers({
  pets,
  petCard,
  shoppingCart

})

export default rootReducer