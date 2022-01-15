import { Container, Grid } from "@mui/material";
import AdminSideNav from "components/styled-components/AdminSideNav";
import React from "react";

const AdminLayout = ({ children }) => {
  return (
    <Container sx={{ my: "2rem" }}>
      <Grid container spacing={3}>
        <Grid
          item
          lg={3}
          xs={12}
          sx={{ display: { xs: "none", sm: "none", md: "block" } }}
        >
          <AdminSideNav />
        </Grid>
        <Grid item lg={9} xs={12}>
          {children}
        </Grid>
      </Grid>
    </Container>
  );
};

export default AdminLayout;
