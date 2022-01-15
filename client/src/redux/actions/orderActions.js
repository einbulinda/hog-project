import * as actions from "redux/CONSTANTS";
import * as api from "api";

// Create an Order
export const createOrder = (order) => async (dispatch) => {
  dispatch({ type: actions.ORDER_CREATE_REQUEST, payload: order });
  try {
    const { data } = await api.createOrderAPI(order);
    dispatch({ type: actions.ORDER_CREATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actions.ORDER_CREATE_ERROR, payload: error.message });
  }
};

// Get All Orders
export const getUserOrders = (user) => async (dispatch) => {
  dispatch({ type: actions.USER_ORDERS_REQUEST, payload: user });

  try {
    const { data } = await api.getUserOrdersAPI(user);
    dispatch({ type: actions.USER_ORDERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actions.USER_ORDERS_ERROR, payload: error.message });
  }
};

// Get An Order Details
export const getOrderDetails = (id) => async (dispatch) => {
  dispatch({ type: actions.ORDER_DETAILS_REQUEST, payload: id });

  try {
    const { data } = await api.getOrderDetailsAPI(id);
    dispatch({ type: actions.ORDER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actions.ORDER_DETAILS_ERROR, payload: error.message });
  }
};

// Initiate Mpesa STK
export const initiateMpesa = (data) => async (dispatch) => {
  dispatch({ type: actions.MPESA_STK_REQUEST, payload: data });
};
