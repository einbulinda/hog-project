import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { CART } from "navigation/CONSTANTS";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import NumberFormat from "react-number-format";
import Link from "@mui/material/Link";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { useCallback, useState } from "react";
import { styled } from "@mui/system";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import CardHeader from "@mui/material/CardHeader";
import { useDispatch } from "react-redux";
import { addToCart } from "redux/actions/cartActions";
import Star from "@mui/icons-material/Star";
import StarHalf from "@mui/icons-material/StarHalf";
import StarOutline from "@mui/icons-material/StarOutline";
import { IconButton } from "@mui/material";
import { Favorite, FavoriteBorder, RemoveRedEye } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  root: { maxWidth: 400, margin: "auto" },
  media: { height: 200, width: "100%", objectFit: "cover" },
}));

const StyledChip = styled(Chip)(() => ({
  position: "absolute",
  fontSize: "10px",
  fontWeight: 600,
  paddingLeft: 3,
  paddingRight: 3,
  top: "10px",
  left: "10px",
  zIndex: 11,
}));

const ProductCard = ({ offer = 0, products }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleDialog = useCallback(() => {
    setOpen((open) => !open);
  }, []);

  const toggleIsFavorite = async () => {
    setIsFavorite((fav) => !fav);
  };

  const handleAddToCart = (product) => {
    if (!product) return;
    dispatch(addToCart(product));
    history.push(CART);
  };

  const handleWishlist = (product) => {
    // implement same as cart logic.
    // setWishlist(!wishlist);
  };

  return (
    <Box p={4}>
      <Grid container spacing={2}>
        {products.map((product, index) => {
          const { documentID, imageUrl, productName, retailPrice } = product;
          return (
            <Grid item key={index}>
              <Card className={classes.root}>
                <CardHeader
                  avatar={
                    offer !== 0 && (
                      <StyledChip
                        color="primary"
                        size="small"
                        label={`${offer}% off`}
                        aria-label="sale discount"
                      />
                    )
                  }
                  action={
                    <Stack spacing={-1} className={classes.stacks}>
                      <IconButton onClick={toggleDialog}>
                        <RemoveRedEye color="secondary" fontSize="small" />
                      </IconButton>
                      <IconButton onClick={toggleIsFavorite}>
                        {isFavorite ? (
                          <Favorite color="primary" fontSize="small" />
                        ) : (
                          <FavoriteBorder fontSize="small" />
                        )}
                      </IconButton>
                    </Stack>
                  }
                />
                <Link
                  underline="none"
                  component={RouterLink}
                  to={`/product/${documentID}`}
                >
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={imageUrl}
                      title={productName}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5">
                        {productName}
                      </Typography>
                      <Typography variant="h6">
                        <NumberFormat
                          value={retailPrice}
                          displayType="text"
                          thousandSeparator={true}
                          prefix={"Ksh. "}
                        />
                      </Typography>
                      {/* Dynamic rating to be implemented from average user's ratings */}
                      <Typography component="span" color="#D4AF37">
                        <Star />
                        <Star />
                        <Star />
                        <StarHalf />
                        <StarOutline />
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Link>
                <CardActions
                  sx={{
                    padding: "0.5rem 1.2rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <AddShoppingCartIcon
                    onClick={() => handleAddToCart(product)}
                    color="error"
                    fontSize="medium"
                    sx={{
                      cursor: "pointer",
                    }}
                  />
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ProductCard;
