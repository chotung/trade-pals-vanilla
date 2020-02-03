import {
  CREATE_NEW_USER_PENDING,
  CREATE_NEW_USER_SUCCESS,
  CREATE_NEW_USER_ERROR,
  USER_LOGIN_PENDING,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_ERROR
}
from "../actions/apiActions/apiAction"

const initialState = {
  name:"",
  location: {},
  pending: false,
  error: null
}


export const user = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NEW_USER_PENDING:
      return {
        ...state,
        pending: true
      }
    case CREATE_NEW_USER_SUCCESS:
      return {
        ...state,
        pending: false,
        user: action.payload
      }
    case CREATE_NEW_USER_ERROR:
      return {
        ...state,
        pending: false,
        error:action.error
      }
    case USER_LOGIN_PENDING:
      return {
        ...state,
        pending: true
      }
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        pending: false,
        user: action.payload
      }
    case USER_LOGIN_ERROR:
      return {
        ...state,
        pending: false,
        error:action.error
      }

    default:
      return state
  }
}




export const createNewUserPending = state => state.pending
export const createNewUserSuccess = state => state.user
export const createNewUserError = state => state.error 

export const userLoginPending = state => state.pending 
export const userLoginError = state => state.error 
export const userLoginSuccess = state => state.user