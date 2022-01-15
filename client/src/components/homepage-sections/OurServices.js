import { Card, Container, Grid, IconButton } from "@mui/material";
import CashlessPayments from "components/icons/CashlessPayments";
import CustomerService from "components/icons/CustomerService";
import Shield from "components/icons/Shield";
import Truck from "components/icons/Truck";
import { H4, Span } from "components/Typography";
import React, { useState } from "react";

const OurServices = () => {
  const [hoveredState, setHoveredState] = useState("");

  return (
    <Container sx={{ mb: "70px" }}>
      <Grid container spacing={3}>
        {serviceList.map((item, key) => (
          <Grid item lg={3} md={6} xs={12} key={key}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                p: "3rem",
                height: "100%",
                borderRadius: "8px",
              }}
              onMouseEnter={() => setHoveredState(key)}
              onMouseLeave={() => setHoveredState("")}
              raised={key === hoveredState}
            >
              <IconButton
                fontSize="1.75rem"
                height="64px"
                width="64px"
                bgcolor="grey.200"
              >
                <item.icon fontSize="inherit" />
              </IconButton>
              <H4 mt={2.5} mb={1.25} textAlign="center">
                {item.title}
              </H4>
              <Span textAlign="center" color="grey.600">
                {item.message}
              </Span>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

const serviceList = [
  {
    icon: Truck,
    title: "Countrywide Delivery",
    message: "No hustle in receiving your products wherever you are.",
  },
  {
    icon: CashlessPayments,
    title: "Safe Payment",
    message: "M-Pesa, Visa are accepted.",
  },
  {
    icon: Shield,
    title: "Shop With Confidence",
    message: "Ample parking and professional products handling",
  },
  {
    icon: CustomerService,
    title: "24/7 Support",
    message: "Share your concerns with us, you might get an offer!!",
  },
];

export default OurServices;
