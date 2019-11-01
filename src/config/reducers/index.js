import { combineReducers } from 'redux'
// import users from './users'
import pets from './pets'
import shoppingCart from './shoppingCart'
const rootReducer = combineReducers({
  // reducers for each model
  // users,
  pets,
  shoppingCart
})

export default rootReducer