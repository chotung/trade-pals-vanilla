import React from 'react';

const PetCard = (props) => {
  const {pet} = props
  return (
    <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m ">
      <form onSubmit={props.addToCart} id={pet.name} data={pet}>
        <img src={pet.imgUrl} alt="Pet"/>
        <h2 className="uk-card-title">{pet.name}</h2>
        <ul>
          <li>{pet.age}</li>
          <li>{pet.breed}</li>
          <li>{pet.location}</li>
          <li>{pet.price}</li>
          <li>{pet.sex}</li>
        </ul>
        <button type="submit" value="Submit">Add to Cart</button>
      </form>
    </div>
  );
}

export default PetCard;
