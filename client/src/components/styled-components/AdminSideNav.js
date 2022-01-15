import { SideNavWrapper } from "components/styled-components/SideNavStyle";
import { sideLinks } from "navigation/links/adminSideLinks";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FlexBox from "components/styled-components/FlexBox";
import { makeStyles } from "@mui/styles";
import { SideLink } from "components/styled-components/CustomLink";
import { useSelector } from "react-redux";

const mapState = ({ productsData }) => ({
  products: productsData.products,
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0.5rem",
    cursor: "pointer",
  },
}));

const AdminSideNav = () => {
  const classes = useStyles();
  const { products } = useSelector(mapState);
  const totalProducts = products.length;

  return (
    <SideNavWrapper sx={{ px: "0.8rem", py: "1.5rem", color: "grey.900" }}>
      <Box sx={{ flexGrow: 1 }}>
        {sideLinks.map((item) => (
          <Grid container spacing={2} key={item.title}>
            <Grid item xs={12}>
              <SideLink path={item.path}>
                <Box className={classes.root}>
                  <FlexBox alignItems="center">
                    <item.icon
                      fontSize="small"
                      color="inherit"
                      sx={{ mr: "1rem" }}
                    />
                    <Typography variant="body1" component="span">
                      {item.title}
                    </Typography>
                  </FlexBox>
                  <Typography variant="body2" component="span">
                    {item.title === "Products" && totalProducts}
                  </Typography>
                </Box>
              </SideLink>
            </Grid>
          </Grid>
        ))}
      </Box>
    </SideNavWrapper>
  );
};

export default AdminSideNav;
