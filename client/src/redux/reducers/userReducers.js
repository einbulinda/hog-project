import * as actions from "redux/CONSTANTS";

const INITIAL_STATE = {
  currentUser: null,
  address: [],
  passwordResetSuccess: false,
  userError: [],
  loading: false,
  success: true,
};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.USER_LOGIN_REQUEST:
    case actions.USER_ADDRESS_SAVE_REQUEST:
      return { ...state, loading: true };
    case actions.USER_LOGIN_SUCCESS:
      return { ...state, loading: false, currentUser: action.payload };
    case actions.USER_LOGIN_ERROR:
    case actions.USER_ADDRESS_SAVE_ERROR:
      return {
        ...state,
        userError: action.payload,
        loading: false,
        success: false,
      };
    case actions.USER_UPDATE_SUCCESS:
      return { ...state, loading: false, currentUser: action.payload };
    case actions.USER_REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actions.USER_ADDRESS_SAVE_SUCCESS:
      return {
        ...state,
        loading: false,
        address: action.payload,
        success: true,
      };
    case actions.USER_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
        success: true,
      };
    case actions.USER_REGISTER_ERROR:
      return {
        ...state,
        loading: false,
        success: false,
        userError: action.payload,
      };
    case actions.USER_SESSION_CHECK:
      return {
        ...state,
        currentUser: JSON.parse(localStorage.getItem("userInfo")),
      };
    case actions.USER_ADDRESS_DATA_SUCCESS:
      return {
        ...state,
        address: action.payload,
        loading: false,
      };
    case actions.USER_LOGOUT_REQUEST:
      localStorage.clear();
      return { ...state, ...INITIAL_STATE, loading: false, userError: [] };
    default:
      return state;
  }
};

export default userReducer;
