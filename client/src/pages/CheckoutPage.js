import Grid from "@mui/material/Grid";
import CheckoutForm from "components/checkout-components/CheckoutForm";
import CheckoutSummary from "components/checkout-components/CheckoutSummary";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";
import SummarizeIcon from "@mui/icons-material/Summarize";
import { CART, ORDERS, PAYMENT } from "navigation/CONSTANTS";
import {
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import Box from "@mui/system/Box";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCartTotal,
  selectCartItems,
  selectCartItemsCount,
  selectAddress,
  selectUser,
  selectCartDiscount,
} from "redux/selectors/cartSelectors";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { createStructuredSelector } from "reselect";
import CardTitle from "components/styled-components/CardTitle";
import StyledCard from "components/styled-components/StyledCard";
import DashboardHeader from "components/navigation-components/DashboardHeader";
import { createOrder } from "redux/actions/orderActions";

const mapState = createStructuredSelector({
  cartSubTotal: selectCartTotal,
  cartDiscount: selectCartDiscount,
  itemCount: selectCartItemsCount,
  cartData: selectCartItems,
  address: selectAddress,
  user: selectUser,
});

const CheckoutPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [deliveryMode, setDeliveryMode] = useState("");
  const [payMode, setPayMode] = useState("");
  const { cartSubTotal, cartDiscount, cartData, address, user } = useSelector(
    mapState
  );
  const cartTotal = cartSubTotal - cartDiscount;

  const handleDelivery = (event) => {
    setDeliveryMode(event.target.value);
  };

  const handlePayMode = (event) => {
    setPayMode(event.target.value);
  };

  const patchOrder = () => {
    const order = {};

    if (!deliveryMode) {
      alert("Delivery Method is required");
    } else {
      order.products = cartData;
      order.address = address[0];
      order.deliveryMode = deliveryMode;
      order.paymentMode = payMode;
      order.isPaid = false;
      order.amountDue = cartTotal;
      order.user = user.currentUser._id;
      order.status = "Pending";
      order.orderTotal = cartTotal;
    }
    return order;
  };

  const placeOrder = () => {
    dispatch(patchOrder(createOrder()));
    navigate(ORDERS);
  };

  const handleMpesaOption = () => {
    patchOrder();
    navigate({ pathname: PAYMENT, state: { order: patchOrder() } });
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        backgroundColor: "#e7e8ea",
        paddingBottom: "1rem",
        marginTop: "1rem",
      }}
    >
      <Box>
        <Grid container spacing={3}>
          <Grid item lg={8} md={8} xs={12}>
            <CheckoutForm />
            <StyledCard sx={{ marginBottom: "1rem" }}>
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  <CardTitle>
                    {" "}
                    {deliveryMode && (
                      <DoneAllIcon
                        color="success"
                        sx={{ fontSize: "1.3rem", marginTop: "0.8rem" }}
                      />
                    )}
                    2. Delivery Method
                  </CardTitle>
                </FormLabel>
                <RadioGroup
                  row
                  aria-label="deliveryMode"
                  name="row-radio-buttons-group"
                  value={deliveryMode}
                  onChange={handleDelivery}
                >
                  <FormControlLabel
                    value="shop"
                    control={<Radio />}
                    label="Pick from Store"
                  />
                  <FormControlLabel
                    value="home"
                    control={<Radio />}
                    label="Deliver to home or office"
                  />
                </RadioGroup>
              </FormControl>
            </StyledCard>

            {/* Payment Mode */}
            <StyledCard sx={{ marginBottom: "1rem" }}>
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  <CardTitle>
                    {payMode && (
                      <DoneAllIcon
                        color="success"
                        sx={{ fontSize: "1.3rem", marginTop: "0.8rem" }}
                      />
                    )}
                    3. Payment Method
                  </CardTitle>
                </FormLabel>
                <RadioGroup
                  row
                  aria-label="payment"
                  name="row-radio-buttons-group"
                  value={payMode}
                  onChange={handlePayMode}
                >
                  <FormControlLabel
                    value="mpesa"
                    control={<Radio />}
                    label="M-Pesa / M-Pesa on Delivery"
                  />
                  <FormControlLabel
                    value="cash"
                    control={<Radio />}
                    label="Cash on Collection"
                  />
                </RadioGroup>
              </FormControl>
            </StyledCard>
          </Grid>
          <Grid item lg={4} md={4} xs={12}>
            <DashboardHeader
              title={
                <Typography variant="body1" color="grey.500" fontSize="18px">
                  ORDER SUMMARY
                </Typography>
              }
              icon={SummarizeIcon}
            />
            <CheckoutSummary
              orderTotal={cartTotal}
              subTotal={cartSubTotal}
              discount={cartDiscount}
            />
          </Grid>
        </Grid>
        <Grid container justifyContent="center" spacing={6}>
          <Grid item sm={4} xs={12}>
            <Button
              onClick={() => navigate(CART)}
              variant="outlined"
              color="error"
              type="button"
              fullWidth
            >
              Back to Cart
            </Button>
          </Grid>
          <Grid item sm={4} xs={12}>
            {payMode === "cash" ? (
              <Button
                variant="contained"
                color="error"
                type="button"
                onClick={placeOrder}
                fullWidth
              >
                Place Order
              </Button>
            ) : (
              <Button
                variant="contained"
                color="error"
                type="button"
                fullWidth
                onClick={handleMpesaOption}
              >
                Proceed To Payment
              </Button>
            )}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default CheckoutPage;
