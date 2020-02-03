import { combineReducers } from "redux";
// import users from './users'
import pets from "./pets";
import shoppingCart from "./shoppingCart";
import petCard from "./petcard";
import { yelpReducer } from "./apiReducer/yelpReducer";
import { user } from "./users";

const rootReducer = combineReducers({
  pets,
  petCard,
  shoppingCart,
  yelpReducer,
  user
});

export default rootReducer;
