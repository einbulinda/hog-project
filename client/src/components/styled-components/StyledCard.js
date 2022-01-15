import Card from "@mui/material/Card";
import { styled } from "@mui/styles";

const StyledCard = styled(Card)({
  position: "relative",
  padding: "1.5rem 1.75rem",
  "@media only screen and (max-width: 678px)": {
    padding: "1rem",
  },
});

export default StyledCard;
