import * as actions from "redux/CONSTANTS";

export const addToCart = (nextCartItem) => ({
  type: actions.CART_ADD_ITEM,
  payload: nextCartItem,
});

export const removeCartItem = (cartItem) => ({
  type: actions.CART_REMOVE_ITEM,
  payload: cartItem,
});

// Reducing quantity in cart.
export const reduceCartQuantity = (cartItem) => ({
  type: actions.CART_REDUCE_QUANTITY,
  payload: cartItem,
});

export const clearCart = () => ({
  type: actions.CART_CLEAR,
});
