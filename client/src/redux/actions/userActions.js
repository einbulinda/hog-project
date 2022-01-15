import * as actions from "redux/CONSTANTS";
import * as api from "api/index.js";

// User Login
export const loginUser = (userInfo) => async (dispatch) => {
  try {
    dispatch({ type: actions.USER_LOGIN_REQUEST });

    const { data } = await api.loginAPI(userInfo);

    dispatch({ type: actions.USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: actions.USER_LOGIN_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Registration
export const registerUser = (userData) => async (dispatch) => {
  try {
    dispatch({ type: actions.USER_REGISTER_REQUEST });

    const { data } = await api.registerAPI(userData);

    dispatch({ type: actions.USER_REGISTER_SUCCESS, payload: data });
    dispatch({ type: actions.USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: actions.USER_REGISTER_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Profile Update
export const profileUpdate = (updatedProfile) => async (dispatch) => {
  dispatch({ type: actions.USER_UPDATE_REQUEST, payload: updatedProfile });
  try {
    const { data } = await api.userUpdateAPI(updatedProfile);
    dispatch({ type: actions.USER_UPDATE_SUCCESS, payload: data });
    localStorage.clear();
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({ type: actions.USER_UPDATE_ERROR, payload: error.message });
  }
};

export const saveAddressDetails = (addressData) => async (dispatch) => {
  dispatch({ type: actions.USER_ADDRESS_SAVE_REQUEST, payload: addressData });
  try {
    const { data } = await api.userAddressCreateAPI(addressData);
    dispatch({ type: actions.USER_ADDRESS_SAVE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actions.USER_ADDRESS_SAVE_ERROR, payload: error.message });
  }
};

// get logged in user Address
export const getAddressData = (user) => async (dispatch) => {
  dispatch({ type: actions.USER_ADDRESS_DATA_REQUEST, payload: user });
  try {
    const { data } = await api.getUserAddressDataAPI(user);
    dispatch({ type: actions.USER_ADDRESS_DATA_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actions.USER_ADDRESS_DATA_ERROR, payload: error.message });
  }
};

// Get address by ID
export const getAddressById = (id) => async (dispatch) => {
  dispatch({ type: actions.USER_ADDRESS_ID_REQUEST, payload: id });
  try {
    const { data } = await api.getAddressByIdAPI(id);
    dispatch({ type: actions.USER_ADDRESS_ID_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actions.USER_ADDRESS_ID_ERROR, payload: error.message });
  }
};

// User Logout
export const logoutUser = () => ({
  type: actions.USER_LOGOUT_REQUEST,
});

// Persist user auth status in our App
export const checkUserSession = () => ({
  type: actions.USER_SESSION_CHECK,
});

// OLD ACTIONS

// export const resetUserStart = (userCredentials) => ({
//   type: actions.USER_RESET_START,
//   payload: userCredentials,
// });

// export const resetUserSuccess = () => ({
//   type: actions.USER_RESET_SUCCESS,
//   payload: true,
// });

// export const resetUserState = () => ({
//   type: actions.USER_STATE_RESET,
// });
