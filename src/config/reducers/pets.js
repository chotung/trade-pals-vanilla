const initialState = [
  {
    name: "Char",
    sex: "Male",
    location: "NYC",
    price: 69,
    breed: 'husky',
    isAvailable: true
  },
  {
    name: "Dar",
    sex: "Female",
    location: "MD",
    price: 'priceless',
    breed: 'Maltese',
    isAvailable: true
  },
  {
    name: "Mimo",
    sex: "Female",
    location: "NYC",
    price: 2,
    breed: 'Shiba Inu',
    isAvailable: false
  },
]




const pets = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    default:
      return state
  }
}

export default pets