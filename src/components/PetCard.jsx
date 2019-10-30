import React from 'react';

const PetCard = (props) => {
  return (
    <form onSubmit={props.addToCart}>
      <img src="" alt="Pet"/>
      <ul>
        <li>Age</li>
        <li>Breed</li>
        <li>Location</li>
        <li>Price</li>
        <li>Sex</li>
      </ul>
      <button type="submit" value="Submit">Add to Cart</button>
    </form>
  );
}

export default PetCard;
