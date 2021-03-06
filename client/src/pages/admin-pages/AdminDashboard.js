import ShoppingBag from "@mui/icons-material/ShoppingBag";
import { Card, Divider, Grid, Typography } from "@mui/material";
import FlexBox from "components/styled-components/FlexBox";
import { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "redux/actions/categoriesActions";
import { getAllProducts } from "redux/actions/productActions";

const mapState = ({ productsData, categoriesData }) => ({
  products: productsData.products,
  categories: categoriesData.categories,
});

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const { products, categories } = useSelector(mapState);

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const cardList = [
    {
      title: "Sales Revenue",
      amount: "Ksh. 304,500.00",
      subtitle: "Income generated by the application.",
    },
    {
      title: "Products",
      amount: products.length,
      subtitle: "Total number of listed products",
    },
    {
      title: "Pending Orders",
      amount: "08",
      subtitle: "7/3/2020 - 8/1/2020",
    },
    {
      title: "Product Categories",
      amount: categories.length,
      subtitle: "Number of categories the products are classified",
    },
  ];

  return (
    <Fragment>
      <FlexBox sx={{ alignItems: "center", fontWeight: 700 }}>
        <ShoppingBag fontSize="large" />
        <Typography variant="h5" component="h3">
          Dashboard
        </Typography>
      </FlexBox>
      <Divider variant="inset" />
      <Grid container spacing={3} mt={3}>
        {cardList.map((item, ind) => (
          <Grid item lg={4} md={4} sm={6} xs={12} key={ind}>
            <Card sx={{ textAlign: "center", py: "1.5rem", height: "100%" }}>
              <Typography variant="h5" color="grey.600" mb={1}>
                {item.title}
              </Typography>
              <Typography
                variant="h4"
                color="grey.700"
                mb={0.5}
                lineHeight="1.3"
              >
                {item.amount}
              </Typography>
              <Typography variant="body1" component="p" color="grey.600">
                {item.subtitle}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
};

export default AdminDashboard;
