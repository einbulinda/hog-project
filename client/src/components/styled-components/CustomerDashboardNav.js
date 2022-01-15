import { Grid, Typography } from "@mui/material";
import Box from "@mui/system/Box";
import { customerSideLinks } from "navigation/links/customerSideNavLinks";
import { Fragment, useEffect } from "react";
import { SideNavWrapper } from "./SideNavStyle";
import { SideLink } from "./CustomLink";
import FlexBox from "./FlexBox";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import LogoutIcon from "@mui/icons-material/Logout";
import clsx from "clsx";
import { logoutUser } from "redux/actions/userActions";
import { H5 } from "components/Typography";
import UserAvatar from "components/styled-components/StyledBadge";
import { getUserOrderHistory } from "redux/actions/orderActions";
import { useHistory } from "react-router";
import { HOME } from "navigation/CONSTANTS";

const mapState = ({ user, ordersData }) => ({
  currentUser: user.currentUser,
  orderHistory: ordersData.orderHistory.data,
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0.5rem",
    cursor: "pointer",
  },
  links: {
    textDecoration: "none",
    marginRight: "0.8rem",
    cursor: "pointer",
    "&:hover": {
      fontWeight: 500,
      color: "#d32f2f",
    },
  },
  sideNavLink: {
    "&:hover": {
      textTransform: "uppercase",
      transition: "text-transform 3s ease-in-out",
    },
  },
}));

const CustomerDashboardNav = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  const { currentUser, orderHistory } = useSelector(mapState);
  const numberOfOrders = Array.isArray(orderHistory) && orderHistory.length;

  useEffect(() => {
    // dispatch(getUserOrderHistory(currentUser.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const signOutUser = () => {
    dispatch(logoutUser());
    history.push(HOME);
  };

  return (
    <SideNavWrapper sx={{ px: "0px", pb: "1.5rem", color: "grey.900" }}>
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <UserAvatar name={currentUser.name} />
        <H5>{currentUser.name}</H5>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        {customerSideLinks.map((item) => (
          <Fragment key={item.title}>
            <Typography p="26px 30px 1rem" color="grey.600" fontSize="12px">
              {item.title}
            </Typography>
            {item.list.map((menu) => (
              <Grid container spacing={2} key={menu.title}>
                <Grid item xs={12}>
                  <SideLink path={menu.path}>
                    <Box className={classes.root}>
                      <FlexBox>
                        <menu.icon
                          fontSize="small"
                          color="inherit"
                          sx={{ mr: "1rem" }}
                        />
                        <Typography variant="body1" component="span">
                          {menu.title}
                        </Typography>
                      </FlexBox>
                      <Typography variant="body2" component="span">
                        {menu.title === "Orders" && numberOfOrders}
                        {/* Inserting the Number of Orders. Conditional on  title of menu otherwise its a blank*/}
                      </Typography>
                    </Box>
                  </SideLink>
                </Grid>
              </Grid>
            ))}
          </Fragment>
        ))}
        <Box className={clsx(classes.links, classes.sideNavLink, classes.root)}>
          <FlexBox onClick={() => signOutUser()}>
            <LogoutIcon fontSize="small" color="inherit" sx={{ mr: "1rem" }} />
            <Typography variant="body1" component="span">
              Logout
            </Typography>
          </FlexBox>
        </Box>
      </Box>
    </SideNavWrapper>
  );
};

export default CustomerDashboardNav;
