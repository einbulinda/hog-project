const { Rating } = require("@mui/material");
const { styled, compose, spacing, typography } = require("@mui/system");

const GlamourRating = styled(Rating)(compose(spacing, typography));

export default GlamourRating;
