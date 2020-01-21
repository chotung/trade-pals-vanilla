const initialState = {
  name:"Charlie",
  location: [{lat: 40, lng: 40}]
}


const user = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_USER":
      return {
        state
      }
    default:
      return state
  }
}

export default user