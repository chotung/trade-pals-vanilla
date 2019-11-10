import React from "react";
import { Card, Button } from "react-bootstrap";
import { removeCartItem } from '../config/actions'

const capitalize = (word) => {
  if (typeof word !== 'string') return ''
  return word.charAt(0).toUpperCase() + word.slice(1)
}

const CartItem = props => {
  // console.log(props)
  const { cart, undoRemove } = props;
  // console.log(cart, undoRemove);
  return (
    <Card bg="light" className="cart-item flex-row">
      <div className="border-bottom-0 border-right card-header">
        <h3>{capitalize(cart.name)}</h3>
        {/* <img src={cart.imgUrl} alt={cart.name} /> */}
        <Card.Img variant="top" src={cart.imgUrl} alt={cart.name} />
      </div>
      <div className="info-block">
        <div className="info-list">
          <p>{cart.sex}</p>
          <p>{cart.breed}</p>
          <p>{cart.location}</p>
        </div>
        <div className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
          placeat.
        </div>
      </div>
      <Button variant="danger" onClick={() => removeCartItem(cart)}>X</Button>
      {/* <p>{cart.price}</p> */}
    </Card>
  );
};

export default CartItem;

// Need to iterate over all the cart items
// Button Should remove the pet
// Will leave an undo button that will revert the action
// Will need to hold the info in some state/local storage
