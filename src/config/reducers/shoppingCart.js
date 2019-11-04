const initialState = {
  undoRemove: function() {
    console.log('undo remove')
  },
  cart: [{
    name:'leo', age: 10, sex: "male", location: "MD", breed: "golden retriever"
  }]
}


const shoppingCart = (state = initialState, action) => {
  switch (action.type) {

    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
      

    case 'REMOVE_FROM_CART':
      console.log('get a pet and remove from cart state');

      break
    case 'UNDO_REMOVE':
      console.log('undo remove to cart state');
      break
    default:
      return state
  }
}

export default shoppingCart