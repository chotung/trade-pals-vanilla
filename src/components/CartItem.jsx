import React from 'react';

const CartItem = (props) => {
  // console.log(props)
  const {cart, undoRemove} = props
  // console.log(cart, undoRemove);
  return (
    <div>
      <h3>{cart.name}</h3>
      <div>
        <p>{cart.sex}</p>
        <p>{cart.breed}</p>
        <p>{cart.location}</p>
      </div>
      <p>{cart.price}</p>
      <button>X</button>
    </div>
  );
}

export default CartItem;

// Need to iterate over all the cart items
// Button Should remove the pet
// Will leave an undo button that will revert the action
// Will need to hold the info in some state/local storage