// YELP
export const FETCH_YELP_PENDING = 'FETCH_YELP_PENDING';
export const FETCH_YELP_SUCCESS = 'FETCH_YELP_SUCCESS';
export const FETCH_YELP_ERROR = 'FETCH_YELP_ERROR';
// REGISTER
export const CREATE_NEW_USER_PENDING = "CREATE_NEW_USER_PENDING";
export const CREATE_NEW_USER_SUCCESS = "CREATE_NEW_USER_SUCCESS";
export const CREATE_NEW_USER_ERROR = "CREATE_NEW_USER_ERROR";
// LOGIN
export const USER_LOGIN_PENDING = "USER_LOGIN_PENDING";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_ERROR = "USER_LOGIN_ERROR";


export const fetchYelpPending = function() {
    return {
        type: FETCH_YELP_PENDING
    }
}

export const fetchYelpSuccess = function(businesses) {
  return {
    type: FETCH_YELP_SUCCESS,
    payload: businesses
  };
};

export const fetchYelpError = function(error) {
    return {
        type: FETCH_YELP_ERROR,
        error: error
    }
}

// USER ACTIONS

export const createNewUserPending = function() {
  return {
    type: CREATE_NEW_USER_PENDING
  };
};

export const createNewUserSuccess = function(businesses) {
  return {
    type: CREATE_NEW_USER_SUCCESS,
    payload: businesses
  };
};

export const createNewUserError = function(error) {
  return {
    type: CREATE_NEW_USER_ERROR,
    error: error
  };
};



export const userLoginPending = function() {
  return {
    type: CREATE_NEW_USER_PENDING
  };
};

export const userLoginSuccess = function(businesses) {
  return {
    type: CREATE_NEW_USER_SUCCESS,
    payload: businesses
  };
};

export const userLoginError = function(error) {
  return {
    type: CREATE_NEW_USER_ERROR,
    error: error
  };
};





// createNewUserSuccess,
// createNewUserError
//   createNewUserPending,


  // userLoginPending,
  // userLoginError,
  // userLoginSuccess