import Typography from "@mui/material/Typography";
import React from "react";
import Logo from "assets/logos/mainLogo.png";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router";
import { HOME } from "navigation/CONSTANTS";

const useStyles = makeStyles((theme) => ({
  logo: {
    maxHeight: "4rem",
    padding: "0.2rem",
    height: "100%",
    cursor: "pointer",
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      // flexGrow: 1,
    },
  },
}));

const MainLogo = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleMenuClick = (pageURL) => {
    navigate(pageURL);
  };

  return (
    <Typography className={classes.title}>
      <img
        className={classes.logo}
        src={Logo}
        alt="House of Glamour Brand"
        onClick={() => handleMenuClick(HOME)}
      />
    </Typography>
  );
};

export default MainLogo;
