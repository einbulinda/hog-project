import * as url from "navigation/CONSTANTS";
import Grid from "@mui/material/Grid";
import Box from "@mui/system/Box";
import React from "react";
import { CustomLink } from "components/styled-components/CustomLink";
import Logo from "assets/logos/mainLogoTxtWhite.png";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import { Paragraph } from "./Typography";
import { Typography } from "@mui/material";
import MobileApps from "components/MobileApps";
import {
  Facebook,
  Google,
  Instagram,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import GlamourButton from "./styled-components/GlamourButton";
import FlexBox from "components/styled-components/FlexBox";

const FooterLogo = styled("img")(({ theme }) => ({
  maxHeight: "5rem",
  padding: "0.2rem",
  height: "100%",
  cursor: "pointer",
  marginBottom: "1rem",
}));

const Footer = () => {
  return (
    <footer>
      <Box bgcolor="#0c0e30" mb={2.5}>
        <Container sx={{ p: "0.5rem", color: "white" }}>
          <Box py={3} overflow="hidden">
            <Grid container spacing={3}>
              <Grid
                item
                lg={4}
                md={6}
                sm={6}
                xs={12}
                sx={{ textAlign: "center" }}
              >
                <CustomLink path={url.HOME}>
                  <FooterLogo src={Logo} alt="House of Glamour Logo" />
                </CustomLink>
                <Paragraph mb={2.5} color="grey.500">
                  <Typography component="span" sx={{ display: "inline-block" }}>
                    Find us on Ground Floor shop GA5 at
                  </Typography>
                  <Typography component="span" sx={{ display: "inline-block" }}>
                    Magharibi Place Building near T-Mall
                  </Typography>
                  <Typography component="span" sx={{ display: "inline-block" }}>
                    on Mai Mahiu road off Lang'ata Road
                  </Typography>
                </Paragraph>
                <MobileApps />
              </Grid>
              <Grid item lg={2} md={6} sm={6} xs={6}>
                <Box
                  fontSize="25px"
                  fontWeight="600"
                  mb={2.5}
                  lineHeight="1"
                  color="white"
                >
                  About Us
                </Box>
                <div>
                  {aboutLinks.map((item, ind) => (
                    <Typography key={ind}>
                      <CustomLink path={url.HOME}>{item}</CustomLink>{" "}
                    </Typography>
                  ))}
                </div>
              </Grid>
              <Grid item lg={3} md={6} sm={6} xs={6}>
                <Box
                  fontSize="25px"
                  fontWeight="600"
                  mb={2.5}
                  lineHeight="1"
                  color="white"
                >
                  Customer Care
                </Box>

                <div>
                  {customerCareLinks.map((item, ind) => (
                    <Typography key={ind}>
                      <CustomLink path={url.HOME}>{item}</CustomLink>{" "}
                    </Typography>
                  ))}
                </div>
              </Grid>
              <Grid
                item
                lg={3}
                md={6}
                sm={6}
                xs={12}
                sx={{ textAlign: "center" }}
              >
                <Box
                  fontSize="25px"
                  fontWeight="600"
                  mb={2.5}
                  lineHeight="1"
                  color="white"
                >
                  Contact Us
                </Box>
                <Box py={0.6} color="grey.500">
                  <Typography>P. O Box 8118 - 00200,</Typography>
                  <Typography>City Square, Nairobi, </Typography>
                  <Typography>Kenya</Typography>
                </Box>
                <Box py={0.6} color="grey.500">
                  Email: hseofgla@gmail.com
                </Box>
                <Box py={0.6} mb={2} color="grey.500">
                  Phone: +254 722 522 119
                </Box>
                <FlexBox
                  className="flex"
                  mx={-0.625}
                  sx={{ justifyContent: "center" }}
                >
                  {iconList.map(
                    (item, ind) =>
                      item.isActive && (
                        <CustomLink
                          path={item.url}
                          key={ind}
                          target="_blank"
                          rel="noreferrer noopenner"
                        >
                          <GlamourButton
                            m={0.5}
                            bgcolor="rgba(0,0,0,0.2)"
                            fontSize="18px"
                            padding="10px"
                          >
                            <item.icon fontSize="large" />
                          </GlamourButton>
                        </CustomLink>
                      )
                  )}
                </FlexBox>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;

const aboutLinks = [
  "Careers",
  "Our Story",
  "Contact Us",
  "Terms & Conditions",
  "Privacy Policy",
];

const customerCareLinks = [
  "Help Center",
  "How to Buy",
  "Track Your Order",
  "Returns & Refunds",
];

const iconList = [
  {
    icon: Facebook,
    url: "https://www.facebook.com/",
    isActive: true,
  },
  { icon: Twitter, url: "https://twitter.com/", isActive: false },
  {
    icon: YouTube,
    url: "/",
    isActive: false,
  },
  { icon: Google, url: "/", isActive: false },
  {
    icon: Instagram,
    url: "https://www.instagram.com/",
    isActive: true,
  },
];
