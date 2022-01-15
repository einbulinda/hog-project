import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Image from "components/styled-components/GlamourImage";
import { styled } from "@mui/styles";
import FlexBox from "components/styled-components/FlexBox";
import { CustomLink } from "components/styled-components/CustomLink";
import { Button, IconButton, Typography } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import NumberFormat from "react-number-format";
import { useDispatch } from "react-redux";
import {
  removeCartItem,
  addToCart,
  reduceCartQuantity,
} from "redux/actions/cartActions";

const CartProductCardStyled = styled(Card)(({ theme }) => ({
  position: "relative",
  display: "flex",
  borderRadius: "10px",
  overflow: "hidden",
  backgroundColor: theme.palette.background.paper,
  marginBottom: "1.5rem",
  boxShadow: theme.shadows[2],

  "& .product-details": {
    padding: "20px",
  },

  "& .title": {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },

  "@media only screen and (max-width: 425px)": {
    flexWrap: "wrap",
    img: {
      height: "auto",
      minWidth: "100%",
    },
  },
}));

const CartProductCard = (product) => {
  const dispatch = useDispatch();
  const { name, quantity, price, image, _id } = product;

  const handleRemoveCartItem = (_id) => {
    dispatch(removeCartItem(_id));
  };

  const handleAddQuantity = (product) => {
    dispatch(addToCart(product));
  };

  const handleReduceQuantity = (product) => {
    dispatch(reduceCartQuantity(product));
  };

  return (
    <CartProductCardStyled raised={true}>
      <Image
        src={image[0]}
        height={100}
        width={100}
        display="block"
        alt={name}
      />
      <FlexBox
        className="product-details"
        flexDirection="column"
        justifyContent="space-between"
        minWidth="0px"
        width="100%"
      >
        <CustomLink path={`/product/${_id}`}>
          <Typography
            variant="body1"
            component="span"
            className="title"
            fontWeight="600"
            fontSize="18px"
            mb={1}
          >
            {name}
          </Typography>
        </CustomLink>
        <Box position="absolute" right="1rem" top="1rem">
          <IconButton
            size="small"
            sx={{ padding: "4px", ml: "12px" }}
            onClick={() => handleRemoveCartItem(_id)}
          >
            <DeleteIcon fontSize="small" color="error" />
          </IconButton>
        </Box>
        <FlexBox justifyContent="space-between" alignItems="flex-end">
          <FlexBox flexWrap="wrap" alignItems="center">
            <Typography
              variant="body1"
              component="span"
              color="grey.600"
              mr={2}
            >
              <NumberFormat
                value={price}
                displayType="text"
                thousandSeparator={true}
                prefix={"Ksh. "}
              />{" "}
              X {quantity}
            </Typography>
            <Typography
              variant="body1"
              component="span"
              fontWeight={600}
              color="error.main"
              mr={2}
            >
              <NumberFormat
                value={price * quantity}
                displayType="text"
                thousandSeparator={true}
                prefix={"Ksh. "}
              />
            </Typography>
          </FlexBox>
          <FlexBox alignItems="center">
            <Button
              variant="outlined"
              color="primary"
              size="small"
              disabled={quantity === 1}
              sx={{ borderRadius: "4rem" }}
              onClick={() => handleReduceQuantity(product)}
            >
              <Remove fontSize="small" />
            </Button>
            <Typography
              component="span"
              variant="body1"
              mx={1}
              fontWeight="600"
              fontSize="15px"
            >
              {quantity}
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              // padding="5px"
              size="small"
              // borderColor="primary.light"
              sx={{ borderRadius: "8rem" }}
              onClick={() => handleAddQuantity(product)}
            >
              <Add fontSize="small" />
            </Button>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </CartProductCardStyled>
  );
};

export default CartProductCard;
