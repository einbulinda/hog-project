import { Add, Close, Remove, ShoppingBagOutlined } from "@mui/icons-material";
import { Avatar, Button, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "redux/selectors/cartSelectors";
import { createStructuredSelector } from "reselect";
import FlexBox from "components/styled-components/FlexBox";
import ShoppingBagSvg from "assets/svg-files/shopping-bag.svg";
import GlamourButton from "components/styled-components/GlamourButton";
import { CustomLink } from "components/styled-components/CustomLink";
import IconButton from "@mui/material/IconButton";
import { H5, Tiny } from "components/Typography";
import { CART, CHECKOUT } from "navigation/CONSTANTS";
import NumberFormat from "react-number-format";
import {
  addToCart,
  reduceCartQuantity,
  removeCartItem,
} from "redux/actions/cartActions";

const mapState = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

const MiniCart = ({ toggleSidenav }) => {
  const { cartItems, cartTotal } = useSelector(mapState);
  const dispatch = useDispatch();

  const handleRemoveCartItem = (documentID) => {
    dispatch(removeCartItem(documentID));
  };

  const handleAddQuantity = (product) => {
    dispatch(addToCart(product));
  };

  const handleReduceQuantity = (product) => {
    dispatch(reduceCartQuantity(product));
  };

  return (
    <Box sx={{ width: "380px" }}>
      <Box
        sx={{
          overflow: "auto",
          height: `calc(100vh- ${cartItems.length ? "80px -3.25rem" : "0px"})`,
        }}
      >
        <FlexBox
          sx={{
            alignItems: "center",
            m: "0px 20px",
            height: "74px",
            color: "secondary.main",
          }}
        >
          <ShoppingBagOutlined color="inherit" />
          <Box fontWeight={600} fontSize="16px" ml={1}>
            {cartItems.length} item
          </Box>
        </FlexBox>

        <Divider />

        {/* Empty Cart Display */}
        {!cartItems.length && (
          <FlexBox
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="calc(100% - 74px)"
          >
            <Typography
              component="img"
              src={ShoppingBagSvg}
              width={90}
              height={100}
            />
            <Box
              component="p"
              sx={{
                mt: 2,
                color: "grey.600",
                textAlign: "center",
                maxWidth: "200px",
              }}
            >
              Your shopping cart is empty. Start shopping
            </Box>
          </FlexBox>
        )}

        {/* Mini Cart Items */}
        {cartItems &&
          cartItems.map((product, key) => {
            const { quantity, _id, image, name, price } = product;

            return (
              <FlexBox
                sx={{
                  py: 2,
                  px: 2.5,
                  alignItems: "center",
                  borderBottom: "1px solid",
                  borderColor: "grey.600",
                }}
                key={key}
              >
                <FlexBox sx={{ alignItems: "center", flexDirection: "column" }}>
                  <GlamourButton
                    variant="outlined"
                    color="primary"
                    sx={{
                      height: "32px",
                      width: "32px",
                      borderRadius: "300px",
                    }}
                    onClick={() => handleAddQuantity(product)}
                  >
                    <Add fontSize="small" />
                  </GlamourButton>
                  <Box sx={{ fontWeight: 600, fontSize: "15px", my: "3px" }}>
                    {quantity}
                  </Box>
                  <GlamourButton
                    variant="outlined"
                    color="primary"
                    sx={{
                      height: "32px",
                      width: "32px",
                      borderRadius: "300px",
                    }}
                    onClick={() => handleReduceQuantity(product)}
                  >
                    <Remove fontSize="small" />
                  </GlamourButton>
                </FlexBox>
                <CustomLink path={`/product/${_id}`}>
                  <Avatar
                    src={image[0]}
                    mx={2}
                    alt={name}
                    height={60}
                    width={60}
                  />
                </CustomLink>
                <Box flex="1 1 0">
                  <CustomLink path={`/product/${_id}`}>
                    <H5 className="title" fontSize="14px">
                      {name}
                    </H5>
                  </CustomLink>
                  <Tiny color="grey.600">
                    {
                      <NumberFormat
                        value={price}
                        displayType="text"
                        thousandSeparator={true}
                        prefix={"Ksh. "}
                      />
                    }{" "}
                    X {quantity}
                  </Tiny>
                  <Box
                    sx={{
                      fontWeight: 600,
                      fontSize: "14px",
                      color: "primary.main",
                      mt: 0.5,
                    }}
                  >
                    <NumberFormat
                      value={(quantity * price).toFixed(2)}
                      displayType="text"
                      thousandSeparator={true}
                      prefix={"Ksh. "}
                    />
                  </Box>
                </Box>
                <IconButton ml={2.5} size="small">
                  <Close
                    fontSize="small"
                    onClick={() => handleRemoveCartItem(_id)}
                  />
                </IconButton>
              </FlexBox>
            );
          })}
      </Box>

      {cartItems.length && (
        <Box p={2.5}>
          <CustomLink path={CHECKOUT}>
            <Button
              variant="contained"
              color="primary"
              sx={{ mb: "0.75rem", height: "40px" }}
              onClick={toggleSidenav}
              fullWidth
            >
              Checkout Now (
              {
                <NumberFormat
                  value={cartTotal.toFixed(2)}
                  displayType="text"
                  thousandSeparator={true}
                  prefix={"Ksh. "}
                />
              }
              )
            </Button>
          </CustomLink>
          {/* Separate checkout and cart */}
          <CustomLink path={CART}>
            <Button
              color="primary"
              variant="contained"
              sx={{ height: 40 }}
              fullWidth
              onClick={toggleSidenav}
            >
              View Cart
            </Button>
          </CustomLink>
        </Box>
      )}
    </Box>
  );
};

export default MiniCart;
