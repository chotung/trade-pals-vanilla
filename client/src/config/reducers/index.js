import { combineReducers } from 'redux'
// import users from './users'
import pets from './pets'
import shoppingCart from './shoppingCart'
import petCard from './petcard'
import {yelpReducer} from "./apiReducer/yelpReducer"


const rootReducer = combineReducers({
  pets,
  petCard,
  shoppingCart,
  yelpReducer
})

export default rootReducer