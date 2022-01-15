import * as actions from "redux/CONSTANTS";

const INITIAL_STATE = {
  orderHistory: [],
  orderDetails: {},
};

const orderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.ORDER_CREATE_SUCCESS:
    case actions.USER_ORDERS_SUCCESS:
      return {
        ...state,
        orderHistory: action.payload,
      };
    case actions.ORDER_DETAILS_SUCCESS:
      return {
        ...state,
        orderDetails: action.payload,
      };
    default:
      return state;
  }
};

export default orderReducer;
