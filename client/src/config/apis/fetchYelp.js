import axios from "axios"
import {
  fetchYelpPending,
  fetchYelpSuccess,
  fetchYelpError
} from "../actions/apiActions/apiAction"; 

const fetchYelp = (location) => {
  return async dispatch => {
    try {
      console.log("REDUCER LOCATION: ",location);

      dispatch(fetchYelpPending());
      const res = await axios.post(`/yelp`,{
        lat: location.latitude,
        lng: location.longitude
      });
      if (res.error) {
        throw res.error;
      }

      console.log("RESPONSE DATA", res.data);

      dispatch(fetchYelpSuccess(res.data));
      return res.data;
    } catch (error) {
      dispatch(fetchYelpError(error))
    }
  }
 
}


export default fetchYelp


// API ACTION