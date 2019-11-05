import { combineReducers } from 'redux'
// import users from './users'
import pets from './pets'
import shoppingCart from './shoppingCart'


const rootReducer = combineReducers({
  pets,
  shoppingCart
})

export default rootReducer