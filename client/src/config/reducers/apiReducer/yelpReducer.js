import {
  FETCH_YELP_PENDING,
  FETCH_YELP_SUCCESS,
  FETCH_YELP_ERROR
} from "../../actions/apiActions/apiAction";



const initialState = {
  pending: false,
  businesses: [],
  error: null
};

export const yelpReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_YELP_PENDING:
      return {
        ...state,
        pending: true
      };
    case FETCH_YELP_SUCCESS:
      console.log("reducer state", action)
      return {
        ...state,
        pending: false,
        businesses: action.payload

      };
    case FETCH_YELP_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      };
    default:
      return state;
  }
}

export const getYelpData = state => state.businesses;
export const getYelpDataPending = state => state.pending;
export const getYelpDataError = state => state.error;