import Rating from "@mui/material/Rating";

const ProductRating = ({ ratingValue, ...props }) => {
  return <Rating defaultValue={ratingValue} {...props} precision={0.5} />;
};

export default ProductRating;
