import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import mpesaLogo from "assets/svg-files/M-PESA_LOGO.svg";
import StyledCard from "components/styled-components/StyledCard";
import FlexBox from "components/styled-components/FlexBox";
import { H5, H6, Paragraph, Small } from "components/Typography";
import NumberFormat from "react-number-format";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { checkUserSession } from "redux/actions/userActions";
import { Divider, Typography } from "@mui/material";
import { CustomLink } from "components/styled-components/CustomLink";
import { PAYMENT_TERMS } from "navigation/CONSTANTS";
import { initiateMpesa } from "redux/actions/orderActions";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const PaymentPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { currentUser } = useSelector(mapState);
  const order = location.state.order;
  const { orderTotal } = order;
  const contact = currentUser.contact;
  const [mpesaPhone, setMpesaPhone] = useState(contact);

  const initiateMpesaStk = () => {
    dispatch(initiateMpesa({ phone: mpesaPhone, total: orderTotal }));
  };

  useEffect(() => {
    dispatch(checkUserSession());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    console.log(order);
  }, []);

  return (
    <Container
      maxWidth="xl"
      sx={{
        backgroundColor: "#e7e8ea",
        paddingBottom: "1rem",
        marginTop: "1rem",
        padding: "0.5rem",
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ mb: "0.5rem", mt: "1rem", px: "1rem" }}>
          <FlexBox justifyContent="space-between">
            <H6 color="grey.600">Order Summary</H6>
            <H6 sx={{ cursor: "pointer", color: "steelblue" }}>
              {" "}
              {/*On click opens a modal */}
              Order Details {">"}
            </H6>
          </FlexBox>
        </Box>
        <StyledCard>
          <FlexBox justifyContent="space-between">
            <H5>TOTAL TO PAY</H5>
            <H5 sx={{ color: "steelblue" }}>
              <NumberFormat
                value={orderTotal}
                displayType="text"
                thousandSeparator={true}
                prefix={"KES "}
              />
            </H5>
          </FlexBox>
        </StyledCard>
        <Paragraph
          color="grey.600"
          sx={{
            paddingLeft: "0.5rem",
            my: "0.5rem",
            textTransform: "uppercase",
          }}
        >
          You will pay with:
        </Paragraph>
        <StyledCard sx={{ mb: "1rem" }}>
          <FlexBox justifyContent="space-between">
            <H5>
              <i>
                {mpesaPhone
                  ? `M-PESA XXXXX - ${mpesaPhone.substr(mpesaPhone.length - 4)}`
                  : "M-Pesa Number Not Found"}
              </i>
            </H5>
            <Typography
              component="img"
              src={mpesaLogo}
              width={90}
              height={35}
            />
          </FlexBox>
          <Divider variant="middle" textAlign="center" />

          <Typography
            align="center"
            variant="h6"
            sx={{
              textTransform: "uppercase",
              mt: "1rem",
              color: "steelblue",
              cursor: "pointer",
            }}
          >
            Use different mpesa contact
          </Typography>
        </StyledCard>
        <StyledCard>
          <FlexBox justifyContent="center">
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              sx={{ textTransform: "uppercase" }}
              onClick={initiateMpesaStk}
            >
              Pay Now :{" "}
              {
                <NumberFormat
                  value={orderTotal}
                  displayType="text"
                  thousandSeparator={true}
                  prefix={"KES "}
                />
              }
            </Button>
          </FlexBox>
        </StyledCard>
        <Box sx={{ textAlign: "center" }}>
          <Small sx={{ mx: "0.5rem" }}>
            By tapping "PAY NOW" I accept House of Glamour's
            <br />
            <CustomLink path={PAYMENT_TERMS}>
              Payments Terms & Conditions
            </CustomLink>
            <br />
            <CustomLink path={PAYMENT_TERMS}>
              General Terms & Conditions{" "}
            </CustomLink>
            <br /> &{" "}
            <CustomLink path={PAYMENT_TERMS}>
              Privacy and Cookie Notice
            </CustomLink>
          </Small>
        </Box>
      </Container>
    </Container>
  );
};

export default PaymentPage;
