import axios from "axios"
import {
  createNewUserError,
  createNewUserPending,
  createNewUserSuccess,
  userLoginPending,
  userLoginError,
  userLoginSuccess
} from "../actions/apiActions/apiAction";


const createUser = (registerInfo) => {
  return async dispatch => {
    try {
      console.log("USER REGISTER: ", registerInfo);

      dispatch(createNewUserPending());
      const res = await axios.post(`/register`, {
        // email,
        // password,
        // name
      });
      if (res.error) {
        throw res.error;
      }

      console.log("RESPONSE DATA", res.data);

      dispatch(createNewUserSuccess(res.data));
      return res.data;
    } catch (error) {
      dispatch(createNewUserError(error));
    }
  };

}



const loginUser = (loginInfo) => {
  return async dispatch => {
    try {
      console.log("USER REGISTER: ", loginInfo);

      dispatch(userLoginPending());
      const res = await axios.post(`/register`, {
        // email,
        // password,
      });
      if (res.error) {
        throw res.error;
      }

      console.log("RESPONSE DATA", res.data);

      dispatch(userLoginSuccess(res.data));
      return res.data;
    } catch (error) {
      dispatch(userLoginError(error));
    }
  };

}

export {
  createUser,
  loginUser
}