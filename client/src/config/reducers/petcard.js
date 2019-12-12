// const initialState = {
//   name: "Wright",
//   breed: "pug",
//   imgUrl:
//     "https://secure.img1-fg.wfcdn.com/im/53299221/compr-r85/4307/43074449/hanging-pug-puppy-statue.jpg",
//   price: 10,
//   location: "Texas",
//   sex: "male"
// };


// const petCard = (state = initialState, action) => {
const petCard = (state= {}, action) => {
  switch (action.type) {
    case "ADD_TO_PET_CARD":
      return action.payload

    case "REMOVE_FROM_PET_CARD":
      return {};

    default:
      return state;
  }
};

export default petCard;
