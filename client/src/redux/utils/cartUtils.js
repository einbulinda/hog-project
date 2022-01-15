export const existingCartItem = (prevCartItems, nextCartItem) => {
  return prevCartItems.find((item) => item._id === nextCartItem._id);
};

export const handleCartQuantity = ({ prevCartItems, nextCartItem }) => {
  const quantityIncrement = 1;
  const cartItemExists = existingCartItem(prevCartItems, nextCartItem);

  // existing item in cart
  if (cartItemExists) {
    return prevCartItems.map((cartItem) =>
      cartItem._id === nextCartItem._id
        ? // Increment quantity if product in cart is of same ID
          {
            ...cartItem,
            quantity:
              cartItem.quantity >= cartItem.qty
                ? cartItem.qty
                : cartItem.quantity + quantityIncrement,
          }
        : //   exists but not same as one being added
          cartItem
    );
  }
  // New Product
  return [
    ...prevCartItems,
    {
      ...nextCartItem,
      quantity: quantityIncrement,
    },
  ];
};

export const handleRemoveCartItem = ({ prevCartItems, cartItemToRemove }) => {
  return prevCartItems.filter((item) => item._id !== cartItemToRemove);
};

export const handleReduceCartItem = ({ prevCartItems, cartItemToReduce }) => {
  const existingCartItem = prevCartItems.find(
    (cartItem) => cartItem._id === cartItemToReduce._id
  );

  // remove cart item if only one exists and user is removing the same.
  if (existingCartItem.quantity === 1) {
    return prevCartItems.filter(
      (cartItem) => cartItem._id !== existingCartItem._id
    );
  }

  // More than one quantity
  return prevCartItems.map((cartItem) =>
    cartItem._id === existingCartItem._id
      ? {
          ...cartItem,
          quantity: cartItem.quantity <= 0 ? 0 : cartItem.quantity - 1,
        }
      : cartItem
  );
};
