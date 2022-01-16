import React, { Fragment, useEffect } from "react";
import DashboardHeader from "components/navigation-components/DashboardHeader";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import FlexBox from "components/styled-components/FlexBox";
import { useWindowSize } from "navigation/auth/customHooks";
import { useTheme } from "@mui/material";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getOrderDetails } from "redux/actions/orderActions";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/system/Box";
import NumberFormat from "react-number-format";
import { H5, H6, Paragraph } from "components/Typography";
import TableRow from "components/styled-components/TableRow";

const mapState = ({ ordersData }) => ({
  orderDetails: ordersData.orderDetails,
});

const OrderDetailsPage = () => {
  const dispatch = useDispatch();
  const { orderDetails } = useSelector(mapState);
  const { id } = useParams();
  const width = useWindowSize();
  const theme = useTheme();
  const breakpoint = theme.breakpoints.up("md");
  const {
    _id,
    createdAt,
    deliveryDate,
    orderTotal,
    address,
    orderItems,
    status,
    amountPaid,
    paymentMode,
  } = orderDetails;

  useEffect(() => {
    dispatch(getOrderDetails(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <DashboardHeader
        title="Order Details"
        icon={ShoppingBagIcon}
        button={
          <FlexBox justifyContent={width < breakpoint ? "center" : "flex-end"}>
            {orderDetails && _id ? (
              <Stack direction="row" spacing={4}>
                <Typography
                  p="0.5rem 1rem"
                  borderRadius="300px"
                  bgcolor="primary.light"
                  color="primary.main"
                  textAlign="center"
                >
                  Estimated Delivery Date :{" "}
                  <b>{createdAt && new Date(createdAt).toDateString()}</b>
                </Typography>
                <Button
                  color="primary"
                  sx={{ bgcolor: "error.light", px: "2rem" }}
                >
                  Order Again
                </Button>
              </Stack>
            ) : (
              <Typography
                p="0.5rem 1rem"
                borderRadius="300px"
                bgcolor="error.light"
                color="error.main"
                textAlign="center"
              >
                {`No details found for order #${id} .`}
              </Typography>
            )}
          </FlexBox>
        }
      />
      {/* Stepper code to be placed in between the StyledFlexBox */}
      {/* <Card sx={{ p: "2rem 1.5rem", mb: "20px" }}>
        <StyledFlexBox></StyledFlexBox>
      </Card> */}
      {orderDetails && _id && (
        <Fragment>
          <Card sx={{ p: "0px", mb: "30px" }}>
            <TableRow
              sx={{
                bgcolor: "grey.200",
                p: "12px",
                boxShadow: "none",
                borderRadius: 0,
              }}
            >
              <FlexBox className="pre" m={0.75} alignItems="center">
                <Typography fontSize="14px" color="grey.600" mr={0.5}>
                  Order ID:
                </Typography>
                <Typography fontSize="14px">{_id}</Typography>
              </FlexBox>
              <FlexBox className="pre" m={0.75} alignItems="center">
                <Typography fontSize="14px" color="grey.600" mr={0.5}>
                  Placed on:
                </Typography>
                <Typography fontSize="14px">
                  {createdAt && new Date(createdAt).toDateString()}
                </Typography>
              </FlexBox>
              <FlexBox className="pre" m={0.75} alignItems="center">
                <Typography fontSize="14px" color="grey.600" mr={0.5}>
                  Delivered on:
                </Typography>
                <Typography fontSize="14px">
                  {" "}
                  {status === "Delivered"
                    ? new Date(deliveryDate).toDateString()
                    : "Not Delivered"}
                </Typography>
              </FlexBox>
            </TableRow>
            {/* Ordered Products Listing */}
            {orderItems &&
              orderItems.map((item) => (
                <FlexBox
                  px={2}
                  py={1}
                  flexWrap="wrap"
                  alignItems="center"
                  key={item._id}
                >
                  <FlexBox flex="2 2 260px" m={0.75} alignItems="center">
                    <Avatar
                      src={item.imageUrl}
                      sx={{ height: 64, width: 64 }}
                    />
                    <Box ml={2.5}>
                      <H6 my="0px">{item.productName}</H6>
                      <Typography fontSize="14px" color="grey.600">
                        <NumberFormat
                          value={item.retailPrice}
                          displayType="text"
                          thousandSeparator={true}
                          prefix={"Ksh. "}
                        />{" "}
                        x {item.quantity}
                      </Typography>
                    </Box>
                  </FlexBox>
                  <FlexBox flex="1 1 260px" m={0.75} alignItems="center">
                    {/* <Typography fontSize="14px" color="grey.600">
              Product Brand
            </Typography> */}
                  </FlexBox>
                  <FlexBox flex="160px" m={0.75} alignItems="center">
                    <Button variant="text" color="primary">
                      <Typography color="error" fontSize="14px">
                        Write a Review
                      </Typography>
                    </Button>
                  </FlexBox>
                </FlexBox>
              ))}
          </Card>
          <Grid container spacing={3}>
            <Grid item lg={6} md={6} xs={12}>
              <Card sx={{ p: "20px 30px" }}>
                <H5 mt={0} mb={2}>
                  Delivery Address
                </H5>
                {address && (
                  <Fragment>
                    <Paragraph fontSize="14px" my="0px">
                      {`${address.firstName} ${address.lastName}`}
                    </Paragraph>
                    <Paragraph fontSize="14px" my="0px">
                      {address.phone}
                    </Paragraph>
                    <Paragraph fontSize="14px" my="0px">
                      {`${address.town} - ${address.county}`}
                    </Paragraph>
                    <Paragraph
                      fontSize="14px"
                      my="0px"
                      sx={{ whiteSpace: "pre-line" }}
                    >
                      {address.deliveryAddress}
                    </Paragraph>
                  </Fragment>
                )}
              </Card>
            </Grid>
            <Grid item lg={6} md={6} xs={12}>
              <Card sx={{ p: "15px 30px" }}>
                <H5 mt={0} mb={2}>
                  Total Summary
                </H5>
                <FlexBox
                  justifyContent="space-between"
                  alignItems="center"
                  mb={1}
                >
                  <Typography fontSize="14px" color="grey.600">
                    Order Total:
                  </Typography>
                  <H6 my="0px">
                    <NumberFormat
                      value={orderTotal}
                      displayType="text"
                      thousandSeparator={true}
                      prefix={"Ksh. "}
                    />
                  </H6>
                </FlexBox>
                <FlexBox
                  justifyContent="space-between"
                  alignItems="center"
                  mb={1}
                >
                  <Typography fontSize="14px" color="grey.600">
                    Amount Paid:
                  </Typography>
                  <H6 my="0px">
                    <NumberFormat
                      value={amountPaid}
                      displayType="text"
                      thousandSeparator={true}
                      prefix={"Ksh. "}
                    />
                  </H6>
                </FlexBox>
                <Divider sx={{ mb: "0.5rem" }} />

                <FlexBox
                  justifyContent="space-between"
                  alignItems="center"
                  mb={2}
                >
                  <H6 my="0px">Balance</H6>
                  <H6 my="0px">
                    <NumberFormat
                      value={orderTotal - amountPaid}
                      displayType="text"
                      thousandSeparator={true}
                      prefix={"Ksh. "}
                    />
                  </H6>
                </FlexBox>
                <Typography fontSize="14px">
                  Paid by{" "}
                  {paymentMode &&
                    paymentMode.toLowerCase().charAt(0).toUpperCase() +
                      paymentMode.toLowerCase().slice(1)}
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Fragment>
      )}
    </Fragment>
  );
};

export default OrderDetailsPage;
