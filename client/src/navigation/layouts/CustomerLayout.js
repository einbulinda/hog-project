import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CustomerDashboardNav from "components/styled-components/CustomerDashboardNav";

const CustomerLayout = ({ children }) => {
  return (
    <Container sx={{ my: "2rem" }}>
      <Grid container spacing={3}>
        <Grid
          item
          lg={3}
          xs={12}
          sx={{ display: { xs: "none", sm: "none", md: "block" } }}
        >
          <CustomerDashboardNav />
        </Grid>
        <Grid item lg={9} xs={12}>
          {children}
        </Grid>
      </Grid>
    </Container>
  );
};

export default CustomerLayout;
