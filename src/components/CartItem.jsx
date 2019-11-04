import React from 'react';

const CartItem = (props) => {
  const {cart, undoRemove} = props.cartObj
  console.log(cart, undoRemove);
  return (
    <div>
      <h3>{cart[0].name}</h3>
      <div>
        <p>{cart[0].sex}</p>
        <p>{cart[0].breed}</p>
        <p>{cart[0].location}</p>
      </div>
      <p>{cart[0].price}</p>
      <button>X</button>
    </div>
  );
}

export default CartItem;

// Need to iterate over all the cart items
// Button Should remove the pet
// Will leave an undo button that will revert the action
// Will need to hold the info in some state/local storage