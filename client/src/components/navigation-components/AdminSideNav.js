import { SideNavWrapper } from "./SideNavStyle";
import { sideLinks } from "navigation/links/adminSideLinks";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FlexBox from "./FlexBox";
import { makeStyles } from "@mui/styles";
import { SideLink } from "./CustomLink";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProductsStart } from "redux/actions/productActions";

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
  const dispatch = useDispatch();
  const { products } = useSelector(mapState);
  const totalProducts = products.length;

  useEffect(() => {
    dispatch(fetchProductsStart());
  }, [dispatch]);

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
