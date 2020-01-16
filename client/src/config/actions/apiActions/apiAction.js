export const FETCH_YELP_PENDING = 'FETCH_YELP_PENDING';
export const FETCH_YELP_SUCCESS = 'FETCH_YELP_SUCCESS';
export const FETCH_YELP_ERROR = 'FETCH_YELP_ERROR';

// export const fetchYelpPending = function() {
//     return {
//         type: FETCH_YELP_PENDING
//     }
// }

// export const fetchYelpPSuccess = function(businesses) {
//   return {
//     type: FETCH_YELP_SUCCESS,
//     data: businesses
//   };
// };

// export const fetchYelpError = function(error) {
//     return {
//         type: FETCH_YELP_ERROR,
//         error: error
//     }
// }


export function fetchYelpPending () {
    return {
        type: FETCH_YELP_PENDING
    }
}

export function fetchYelpSuccess (businesses) {
  return {
    type: FETCH_YELP_SUCCESS,
    payload: businesses
  };
};

export function fetchYelpError (error){
    return {
        type: FETCH_YELP_ERROR,
        error: error
    }
}