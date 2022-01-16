import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectCartDiscount,
  selectCartItems,
  selectCartTotal,
} from "redux/selectors/cartSelectors";
import { createStructuredSelector } from "reselect";
import Grid from "@mui/material/Grid";
import CartProductCard from "components/product-cards/CartProductCard";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import FlexBox from "components/styled-components/FlexBox";
import { CustomLink } from "components/styled-components/CustomLink";
import { CHECKOUT, HOME } from "navigation/CONSTANTS";
import Paper from "@mui/material/Paper";
import NumberFormat from "react-number-format";

const mapState = createStructuredSelector({
  cartItems: selectCartItems,
  cartSubTotal: selectCartTotal,
  cartDiscount: selectCartDiscount,
});

const Cart = () => {
  const { cartItems, cartSubTotal, cartDiscount } = useSelector(mapState);
  const cartTotal = cartSubTotal - cartDiscount;
  const navigate = useNavigate();

  return (
    <Container sx={{ mt: "3rem" }}>
      {cartItems.length > 0 ? (
        <Grid container spacing={3}>
          <Grid item lg={8} md={8} xs={12}>
            {cartItems.map((item, index) => (
              <CartProductCard key={index} {...item} />
            ))}
            <FlexBox justifyContent="center">
              <Button
                onClick={() => navigate(-1)}
                variant="contained"
                color="error"
              >
                Continue Shopping
              </Button>
            </FlexBox>
          </Grid>
          <Grid item lg={4} md={4} xs={12}>
            {/* Cart Totals Summary */}
            <Card
              raised={true}
              sx={{
                padding: "1.2rem 1.4rem",
                "@media only screen and (max-width: 678px)": {
                  padding: "1rem",
                },
                marginBottom: "0.5rem",
              }}
            >
              {/* Items Price */}
              <FlexBox
                justifyContent="space-between"
                alignItems="center"
                mb={2}
              >
                <Typography
                  color="grey.600"
                  variant="subtitle1"
                  component="span"
                >
                  Subtotal:{" "}
                </Typography>
                <FlexBox alignItems="flex-end">
                  <Typography
                    fontSize="16px"
                    fontWeight="400"
                    lineHeight="0.2"
                    variant="body2"
                    component="span"
                  >
                    <NumberFormat
                      value={cartSubTotal}
                      displayType="text"
                      thousandSeparator={true}
                      prefix={"KSh. "}
                    />
                  </Typography>
                </FlexBox>
              </FlexBox>

              {/* Apply Discount */}
              <FlexBox
                justifyContent="space-between"
                alignItems="center"
                mb={2}
              >
                <Typography
                  color="grey.600"
                  variant="subtitle1"
                  component="span"
                >
                  Discount:{" "}
                </Typography>
                <FlexBox alignItems="flex-end">
                  <Typography
                    fontSize="16px"
                    fontWeight="400"
                    lineHeight="0.2"
                    variant="body2"
                    component="span"
                  >
                    <NumberFormat
                      value={cartDiscount}
                      displayType="text"
                      thousandSeparator={true}
                      prefix={"KSh. "}
                    />
                  </Typography>
                </FlexBox>
              </FlexBox>

              <Divider />

              {/* Cart Total */}
              <FlexBox
                justifyContent="space-between"
                alignItems="center"
                mb={2}
              >
                <Typography
                  color="grey.600"
                  variant="subtitle1"
                  component="span"
                >
                  Total:{" "}
                </Typography>
                <FlexBox alignItems="flex-end">
                  <Typography
                    fontSize="18px"
                    fontWeight="500"
                    lineHeight="1"
                    variant="body2"
                    component="span"
                  >
                    <NumberFormat
                      value={cartTotal}
                      displayType="text"
                      thousandSeparator={true}
                      prefix={"KSh. "}
                    />
                  </Typography>
                </FlexBox>
              </FlexBox>

              <Divider sx={{ mb: "1rem" }} />
              <CustomLink path={CHECKOUT}>
                <Button variant="contained" color="error" fullWidth>
                  Checkout Now (
                  <NumberFormat
                    value={cartTotal}
                    displayType="text"
                    thousandSeparator={true}
                    prefix={"KSh. "}
                  />
                  )
                </Button>
              </CustomLink>
            </Card>
          </Grid>
        </Grid>
      ) : (
        <Paper
          sx={{
            width: "75%",
            height: 200,
            my: "5rem",
            mx: "auto",
          }}
        >
          <FlexBox justifyContent="center" mb={4}>
            <Typography variant="h5" component="p" sx={{ my: "auto" }}>
              Cart is Empty
            </Typography>
          </FlexBox>
          <FlexBox justifyContent="center">
            <CustomLink path={HOME}>
              <Button variant="contained" color="error">
                Continue Shopping
              </Button>
            </CustomLink>
          </FlexBox>
        </Paper>
      )}
    </Container>
  );
};

export default Cart;
