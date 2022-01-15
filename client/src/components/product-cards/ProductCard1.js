import React, { useCallback, useState, Fragment } from "react";
import GlamourCard from "components/styled-components/GlamourCard";
import { styled } from "@mui/system";
import Chip from "@mui/material/Chip";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import {
  Alert,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Rating,
  Snackbar,
  Typography,
} from "@mui/material";
import {
  Close,
  Favorite,
  FavoriteBorder,
  RemoveRedEye,
} from "@mui/icons-material";
import FlexBox from "components/styled-components/FlexBox";
import { H3 } from "components/Typography";
import { CustomLink } from "components/styled-components/CustomLink";
import { useDispatch } from "react-redux";
import { addToCart } from "redux/actions/cartActions";
import { useHistory } from "react-router";
import { CART } from "navigation/CONSTANTS";
import PriceTag from "components/styled-components/PriceTag";
import ProductIntro from "./ProductIntro";

const StyledGlamourCard = styled(GlamourCard)(() => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  height: "27rem",
  justifyContent: "space-between",
  margin: "auto",
  overflow: "hidden",
  transition: "all 250ms ease-in-out",
  borderRadius: "8px",
  width: "15rem",

  "&:hover": {
    "& .show-icons": {
      display: "flex",
    },
  },
}));

const ImageWrapper = styled(Box)(({ theme }) => ({
  textAlign: "center",
  minHeight: "17rem",
  maxHeight: "17rem",
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
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

const HoverIconWrapper = styled(Box)(({ theme }) => ({
  display: "none",
  flexDirection: "column",
  position: "absolute",
  top: "7px",
  right: "15px",
  cursor: "pointer",
  zIndex: 2,
  [theme.breakpoints.down("md")]: {
    display: "flex",
  },
}));

const ContentWrapper = styled(Box)(() => ({
  padding: "1rem",
  "& .title, & .categories": {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}));

const useStyles = makeStyles((theme) => ({
  media: {
    maxWidth: "100%",
    height: "auto",
  },
  stacks: {
    cursor: "pointer",
    zIndex: 2,
    [theme.breakpoints.down("md")]: {
      display: "flex",
    },
  },
}));

const ProductCard1 = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    _id,
    qty,
    name,
    price,
    image,
    offer = 0,
    rating,
    hideRating,
  } = product;

  const toggleDialog = useCallback(() => {
    setOpen((open) => !open);
  }, []);

  const toggleIsFavorite = async () => {
    setIsFavorite((fav) => !fav);
  };

  // Closing Toast
  const handleCloseToast = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setToast(false);
  };

  // Toast Action
  const action = (
    <Fragment>
      <Button color="secondary" size="small" onClick={() => history.push(CART)}>
        CART
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={() => handleCloseToast()}
      >
        <CloseIcon fontSize="small" />
      </IconButton>{" "}
    </Fragment>
  );

  // Add to Cart
  const handleAddToCart = (product) => {
    if (!product) return;
    dispatch(addToCart(product));
    setToast(true);
  };

  return (
    <StyledGlamourCard>
      <ImageWrapper>
        {offer !== 0 && (
          <StyledChip color="primary" size="small" label={`${offer}% off`} />
        )}
        <HoverIconWrapper className="show-icons">
          <IconButton sx={{ p: "6px" }} onClick={toggleDialog}>
            <RemoveRedEye color="primary" fontSize="small" />
          </IconButton>
          <IconButton sx={{ p: "6px" }} onClick={toggleIsFavorite}>
            {isFavorite ? (
              <Favorite color="primary" fontSize="small" />
            ) : (
              <FavoriteBorder fontSize="small" />
            )}
          </IconButton>
        </HoverIconWrapper>
        <Typography
          component="img"
          src={image[0]}
          alt={name}
          className={classes.media}
        />
      </ImageWrapper>
      <ContentWrapper>
        <Box flex="1 1 0" minWidth="0px" mr={1}>
          <CustomLink path={`/product/${_id}`}>
            <H3
              className="title"
              fontSize="18px"
              textAlign="left"
              fontWeight="600"
              color="text.secondary"
              mb={0.5}
              title={name}
            >
              {name}
            </H3>
          </CustomLink>
          {!hideRating && <Rating value={rating || 0} color="warn" readOnly />}
          <FlexBox alignItems="center" mt={0.5} mb={1}>
            <Box pr={2} fontWeight="600" color="primary.main">
              <PriceTag price={price} offer={offer} />
            </Box>
            {!!offer && (
              <Box color="grey.600" fontWeight="600">
                <del>
                  <PriceTag price={price} offer={0} />
                </del>
              </Box>
            )}
          </FlexBox>
        </Box>
        <FlexBox
          sx={{
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            startIcon={<ShoppingBagOutlinedIcon />}
            onClick={() => handleAddToCart(product)}
          >
            Add to Cart
          </Button>
        </FlexBox>
      </ContentWrapper>

      {/* Snackbar on Adding to Cart */}
      <Snackbar
        open={toast}
        autoHideDuration={3000}
        onClose={handleCloseToast}
        action={action}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseToast}
          severity="success"
          sx={{ width: "100%" }}
        >
          Added to Cart!
        </Alert>
      </Snackbar>

      <Dialog open={open} maxWidth={false} onClose={toggleDialog}>
        <DialogContent sx={{ paddingBottom: "1.25rem" }}>
          <ProductIntro
            imgUrl={[image]}
            title={name}
            price={price}
            id={_id}
            qty={qty}
          />
          <IconButton
            sx={{ position: "absolute", top: 0, right: 0 }}
            onClick={toggleDialog}
          >
            <Close className="close" fontSize="small" color="primary" />
          </IconButton>
        </DialogContent>
      </Dialog>
    </StyledGlamourCard>
  );
};

export default ProductCard1;
