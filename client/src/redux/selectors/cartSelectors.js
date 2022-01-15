import { createSelector } from "reselect";

// get cart data

export const selectCartData = (state) => state.cartData;

export const selectCartItems = createSelector(
  [selectCartData],
  (cartData) => cartData.cartItems
);

export const selectUser = (state) => state.user;

export const selectAddress = createSelector(
  [selectUser],
  (user) => user.address
);

// custom selector for unique items

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((qty, item) => qty + item.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (quantity, cartItem) => quantity + cartItem.quantity * cartItem.price,
    0
  )
);

// Discount Totals
export const selectCartDiscount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (quantity, cartItem) => quantity + cartItem.quantity * cartItem.discount,
      0
    )
);

// Get Orders Data
export const selectOrdersData = (state) => state.orderHistory;

// Derive unpaid orders

// Get total of unpaid orders
