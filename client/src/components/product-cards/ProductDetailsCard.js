import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { addToCart } from "redux/actions/cartActions";
import NumberFormat from "react-number-format";
import { getProduct } from "redux/actions/productActions";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import FlexBox from "components/styled-components/FlexBox";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ProductRating from "components/styled-components/ProductRating";
import { CART } from "navigation/CONSTANTS";

const mapState = ({ productsData }) => ({
  product: productsData.product,
});

const ProductDetailsCard = () => {
  const dispatch = useDispatch();
  const { product } = useSelector(mapState);
  const navigate = useNavigate();
  const { id } = useParams();
  const { image, name, brand, price, qty } = product;

  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);

  const handleAddToCart = (product) => {
    if (!product) return;
    dispatch(addToCart(product));
    navigate(CART);
  };

  return (
    <Box width="100%">
      <Grid container spacing={3} justifyContent="space-around">
        <Grid item md={6} xs={12} alignItems="center">
          <Box>
            <FlexBox justifyContent="center" mb={6} mt={3}>
              <img
                src={image && image[0]}
                alt={name}
                height="100%"
                width={300}
                loading="eager"
                objectfit="contain"
              />
            </FlexBox>
          </Box>
        </Grid>
        <Grid item md={4} xs={12} alignItems="center">
          <Typography variant="h4" mb={2} mt={6}>
            {name}
          </Typography>
          <FlexBox alignItems="center" mb={2}>
            <Box>Brand : </Box>
            <Typography variant="h6" ml={1}>
              {brand}
            </Typography>
          </FlexBox>
          <FlexBox alignItems="center" mb={2}>
            <Box lineHeight="1">Rated :</Box>
            <Box mx={1} lineHeight="1">
              <ProductRating ratingValue={4.5} readOnly fontSize="1.25rem" />
            </Box>
            <Typography variant="body1" lineHeight="1">
              (50)
            </Typography>
          </FlexBox>
          <Box mb={3}>
            <Typography variant="h4" mb={0.5} lineHeight="1">
              <NumberFormat
                value={price}
                displayType="text"
                thousandSeparator={true}
                prefix={"Ksh. "}
              />
            </Typography>
            <Box>
              {qty > 0 ? (
                <Typography variant="subtitle1" color="success">
                  In Stock
                </Typography>
              ) : (
                <Typography variant="subtitle1">Out of Stock</Typography>
              )}
            </Box>
            <Button
              variant="contained"
              color="error"
              sx={{
                mb: "36px",
                px: "1.75rem",
                height: "40px",
              }}
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDetailsCard;
