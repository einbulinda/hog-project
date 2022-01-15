import Person from "@mui/icons-material/Person";
import { Avatar, Card, Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import DashboardHeader from "components/navigation-components/DashboardHeader";
import CustomerDashboardNav from "components/styled-components/CustomerDashboardNav";
import { CustomLink } from "components/styled-components/CustomLink";
import FlexBox from "components/styled-components/FlexBox";
import TableRow from "components/styled-components/TableRow";
import { H3, H5, Small } from "components/Typography";
import * as url from "navigation/CONSTANTS";
import { useEffect, Fragment } from "react";
import { checkUserSession } from "redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "redux/actions/orderActions";

const mapState = ({ user, ordersData }) => ({
  currentUser: user.currentUser,
  orderHistory: ordersData.orderHistory,
});

const MyProfile = () => {
  const dispatch = useDispatch();
  const { currentUser, orderHistory } = useSelector(mapState);
  const numberOfOrders = Array.isArray(orderHistory) && orderHistory.length;
  const names = currentUser.name.split(" ", 2);
  const birthDate = new Date(currentUser.dob).toDateString();
  const unpaidOrders = orderHistory.filter(function (order) {
    if (order.isPaid === false) {
      return true;
    }
    return false;
  });

  // Work on this pending orders filter. Not meaningful results obtained
  const pendingOrders = orderHistory.filter((order) => {
    if (!order.status === "Delivered") {
      return true;
    }
    return false;
  });

  const infoList = [
    {
      title: numberOfOrders || 0,
      subtitle: "All Orders",
    },
    {
      title: unpaidOrders.length || 0,
      subtitle: "Awaiting Payments",
    },
    {
      title: pendingOrders.length || 0,
      subtitle: "Awaiting Shipment",
    },
    {
      title: "01",
      subtitle: "Awaiting Delivery",
    },
  ];

  useEffect(() => {
    dispatch(checkUserSession());
    currentUser && dispatch(getUserOrders(currentUser._id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <DashboardHeader
        icon={Person}
        title="My Profile"
        button={
          <CustomLink path={url.EDIT_PROFILE}>
            <Button
              color="primary"
              sx={{ px: "2rem", bgcolor: "primary.light" }}
            >
              Edit Profile
            </Button>
          </CustomLink>
        }
        navigation={<CustomerDashboardNav />}
      />
      <Box mb={4}>
        <Grid container spacing={3}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Card
              sx={{
                display: "flex",
                p: "14px 32px",
                height: "100%",
                alignItems: "center",
              }}
            >
              <Avatar src={currentUser.photo} sx={{ height: 64, width: 64 }} />
              <Box sx={{ ml: 1.5, flex: "1 1 0" }}>
                <FlexBox
                  sx={{
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <H5 my="0px">{currentUser.name}</H5>
                    <FlexBox sx={{ alignItems: "center" }}>
                      <Typography color="grey.600">Balance:</Typography>
                      {/* To be computed by system */}
                      <Typography ml={0.5} color="primary.main">
                        Ksh. 30,000
                      </Typography>
                    </FlexBox>
                  </div>

                  {/* Categorize as SILVER, BRONZE, GOLD according to num of orders. will be saved as part of user data */}
                  <Typography color="grey.600" letterSpacing="0.2rem">
                    SILVER USER
                  </Typography>
                </FlexBox>
              </Box>
            </Card>
          </Grid>

          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Grid container spacing={4}>
              {infoList.map((item) => (
                <Grid item lg={3} sm={6} xs={6} key={item.subtitle}>
                  <Card
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                      alignItems: "center",
                      p: "1rem 1.25rem",
                    }}
                  >
                    <H3 color="primary.main" my="0px" fontWeight="600">
                      {item.title}
                    </H3>
                    <Small color="grey.600" textAlign="center">
                      {item.subtitle}
                    </Small>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <TableRow sx={{ p: "0.75rem 1.5rem" }}>
        <FlexBox flexDirection="column" p={1}>
          <Small color="grey.600" mb={0.5} textAlign="left">
            First Name
          </Small>
          <span>{names[0]}</span>
        </FlexBox>
        <FlexBox flexDirection="column" p={1}>
          <Small color="grey.600" mb={0.5} textAlign="left">
            last Name
          </Small>
          <span>{names[1]}</span>
        </FlexBox>
        <FlexBox flexDirection="column" p={1}>
          <Small color="grey.600" mb={0.5} textAlign="left">
            Email
          </Small>
          <span>{currentUser.email}</span>
        </FlexBox>
        <FlexBox flexDirection="column" p={1}>
          <Small color="grey.600" mb={0.5} textAlign="left">
            Phone
          </Small>
          <span>{currentUser.contact || "null"}</span>
        </FlexBox>
        <FlexBox flexDirection="column" p={1}>
          <Small color="grey.600" mb={0.5} textAlign="left">
            Birth Date
          </Small>
          <span>{currentUser.dob ? birthDate : "null"}</span>
        </FlexBox>
      </TableRow>
    </Fragment>
  );
};

export default MyProfile;
