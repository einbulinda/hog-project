import { CallOutlined, MailOutline } from "@mui/icons-material";
import Container from "@mui/material/Container";
import { styled } from "@mui/styles";
import * as link from "navigation/CONSTANTS";
import React from "react";
import { layoutConstant } from "utils";
import { CustomLink } from "components/styled-components/CustomLink";
import FlexBox from "components/styled-components/FlexBox";
import { Span } from "components/Typography";

const TopbarWrapper = styled("div")(({ theme }) => ({
  background: theme.palette.secondary.main,
  color: theme.palette.secondary.contrastText,
  height: layoutConstant.topbarHeight,
  fontSize: 12,
  "& .topbarLeft": {
    "& .logo": {
      display: "none",
    },
    "& .title": {
      marginLeft: "10px",
    },
    "@media only screen and (max-width: 900px)": {
      "& .logo": {
        display: "block",
      },
      "& > *:not(.logo)": {
        display: "none",
      },
    },
  },
  "& .topbarRight": {
    "& .link": {
      paddingRight: 30,
      color: theme.palette.secondary.contrastText,
    },
    "@media only screen and (max-width: 900px)": {
      "& .link": {
        display: "none",
      },
    },
  },
  "& .smallRoundedImage": {
    height: 15,
    width: 25,
    borderRadius: 2,
  },
  "& .handler": {
    height: layoutConstant.topbarHeight,
  },
  "& .menuTitle": {
    fontSize: 12,
    marginLeft: "0.5rem",
    fontWeight: 600,
  },
  "& .menuItem": {
    minWidth: 100,
  },
  "& .marginRight": {
    marginRight: "1.25rem",
  },
}));

const Topbar = () => {
  return (
    <TopbarWrapper>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
        }}
      >
        <FlexBox className="topbarLeft" alignItems="center">
          <FlexBox alignItems="center">
            <CallOutlined fontSize="small" />
            <Span className="title">+254 722 522 119</Span>
          </FlexBox>
          <FlexBox alignItems="center" ml={2.5}>
            <MailOutline fontSize="small" />
            <Span className="title">support@houseofglamour.com</Span>
          </FlexBox>
        </FlexBox>

        <FlexBox className="topbarRight" alignItems="center">
          <CustomLink path={link.ABOUT} color="#ffffff">
            Our Story
          </CustomLink>
          <CustomLink path={link.HELP} color="#ffffff">
            Need Help?
          </CustomLink>
        </FlexBox>
      </Container>
    </TopbarWrapper>
  );
};

export default Topbar;
