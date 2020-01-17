import axios from "axios"
import {
  fetchYelpPending,
  fetchYelpSuccess,
  fetchYelpError
} from "../actions/apiActions/apiAction"; 


// const fetchYelp = () => {
//   return dispatch => {
//     dispatch(fetchYelpPending())
//     axios(`/yelp`)
//     .then(res => {
//       if(res.error) {
//         throw(res.error)
//       }
//       dispatch(fetchYelpSuccess(res.data))
//       console.log(res.data)
//       return res.data
//     })
//     .catch(error => {
//       dispatch(fetchYelpError(error))
//     })
//   }
 
// }
const fetchYelp = (location) => {
  return async dispatch => {
    try {
      console.log(location);

      dispatch(fetchYelpPending());
      const res = await axios.post(`/yelp`,{
        lat: location.latitude,
        lng: location.longitude
      });
      if (res.error) {
        throw res.error;
      }

      console.log(res.data);

      dispatch(fetchYelpSuccess(res.data));
      return res.data;
    } catch (error) {
      dispatch(fetchYelpError(error))
    }
  }
 
}


export default fetchYelp


// API ACTION