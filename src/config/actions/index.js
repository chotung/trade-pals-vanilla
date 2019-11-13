import store from "../store";

//ACTIONS
const REMOVE_PET_FROM_CATALOGUE = "REMOVE_PET_FROM_CATALOGUE";
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";
const ADD_PET_TO_CATALOGUE = "ADD_PET_TO_CATALOGUE";
const ADD_TO_PET_CARD = "ADD_TO_PET_CARD";
const REMOVE_FROM_PET_CARD = "REMOVE_FROM_PET_CARD";

// PET ACTIONS
export const removePetFromCatalogue = pet => {
  store.dispatch({
    type: REMOVE_PET_FROM_CATALOGUE,
    payload: pet
  });
};

export const addPetToCatalogue = pet => {
  store.dispatch({
    type: ADD_PET_TO_CATALOGUE,
    payload: pet
  });
};

// CART ACTIONS

export const addToCart = pet => {
  store.dispatch({
    type: ADD_TO_CART,
    payload: pet
  });
};

export const removeCartItem = pet => {
  store.dispatch({
    type: REMOVE_CART_ITEM,
    payload: pet
  });
};

// PET CARD ACTIONS

export const addToPetCard = pet => {
  store.dispatch({
    type: ADD_TO_PET_CARD,
    payload: pet
  });
};

export const removeFromPetCrd = pet => {
  store.dispatch({
    type: REMOVE_FROM_PET_CARD,
    payload: pet
  });
};
