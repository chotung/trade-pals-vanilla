const initialState = {
  undoRemove: function() {
    console.log("undo remove");
  },
  cart: [
    {
      name: "leo",
      age: 10,
      sex: "male",
      location: "MD",
      breed: "golden retriever",
      imgUrl:
        "https://cdn.psychologytoday.com/sites/default/files/styles/image-article_inline_full/public/field_blog_entry_teaser_image/puppy_0.jpg?itok=z4JZm548"
    },
    {
      name: "Rollly",
      imgUrl:
        "https://i2-prod.mirror.co.uk/incoming/article9109317.ece/ALTERNATES/s615/I161023_120243_10298636oTextTRMRMMGLPICT000103055634o.jpg",
      sex: "Female",
      age: 2,
      location: "NYC",
      price: 3,
      breed: "Inu",
      isAvailable: false // temporary state should be used with model
    }
  ]
};

const shoppingCart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };

    case "REMOVE_CART_ITEM":
      // remove from cart add
      // add to undo array
      //  - if undo is clicked we remove from pets
      //  - readd to cart
      // add back to pets
      console.log(action.payload)
      console.log("Remove from cart state");
      return {
        ...state,
        cart: [...state.cart.filter(pet => { return pet !== action.payload})]
      }

    case "UNDO_REMOVE":
      console.log("undo remove to cart state");
      break;
    default:
      return state;
  }
};

export default shoppingCart;
