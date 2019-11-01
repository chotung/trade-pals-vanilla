import React from 'react';

const CartItem = () => {
  return (
    <div>

      <h3>Name</h3>
      <div>
        <p>Sex</p>
        <p>Breed</p>
        <p>Location</p>
      </div>
      <p>Price</p>
      <button>X</button>
    </div>
  );
}

export default CartItem;


// Button Should remove the pet
// Will leave an undo button that will revert the action
// Will need to hold the info in some state/local storage