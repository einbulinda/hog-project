import * as actions from "redux/CONSTANTS";
import {
  handleCartQuantity,
  handleRemoveCartItem,
  handleReduceCartItem,
} from "redux/utils/cartUtils";

const INITIAL_STATE = {
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.CART_ADD_ITEM:
      return {
        ...state,
        cartItems: handleCartQuantity({
          prevCartItems: state.cartItems,
          nextCartItem: action.payload,
        }),
      };
    case actions.CART_REDUCE_QUANTITY:
      return {
        ...state,
        cartItems: handleReduceCartItem({
          prevCartItems: state.cartItems,
          cartItemToReduce: action.payload,
        }),
      };
    case actions.CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: handleRemoveCartItem({
          prevCartItems: state.cartItems,
          cartItemToRemove: action.payload,
        }),
      };
    case actions.CART_CLEAR:
      return {
        ...state,
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
};

export default cartReducer;
