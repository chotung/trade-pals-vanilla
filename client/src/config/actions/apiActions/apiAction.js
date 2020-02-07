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
// LOGOUT
export const USER_LOGOUT_PENDING = "USER_LOGOUT_PENDING";
export const USER_LOGOUT_SUCCESS = "USER_LOGOUT_SUCCESS";
export const USER_LOGOUT_ERROR = "USER_LOGOUT_ERROR";

// YELP

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

export const createNewUserSuccess = function() {
  return {
    type: CREATE_NEW_USER_SUCCESS,
    // payload: businesses
  };
};

export const createNewUserError = function(error) {
  return {
    type: CREATE_NEW_USER_ERROR,
    error: error
  };
};

// LOGIN

export const userLoginPending = function() {
  return {
    type: USER_LOGIN_PENDING
  };
};

export const userLoginSuccess = function(userSess) {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: userSess
  };
};

export const userLoginError = function(error) {
  return {
    type: USER_LOGIN_ERROR,
    error: error
  };
};


//LOGOUT
export const userLogoutPending = function() {
  return {
    type: USER_LOGOUT_PENDING
  };
};

export const userLogoutSuccess = function(userSess) {
  return {
    type:USER_LOGOUT_SUCCESS,
    // payload: userSess
  };
};

export const userLogoutError = function(error) {
  return {
    type: USER_LOGOUT_ERROR,
    error: error
  };
};
