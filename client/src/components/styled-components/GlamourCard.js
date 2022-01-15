import Card from "@mui/material/Card";
import { styled } from "@mui/styles";

// Custom Styled Card
const GlamourCard = styled(({ hoverEffect, children, ...rest }) => (
  <Card {...rest}>{children}</Card>
))(({ theme, hoverEffect }) => ({
  borderRadius: "8px",
  overflow: "unset",
  transition: "all 250ms ease-in-out",
  "&:hover": {
    boxShadow: hoverEffect ? theme.shadows[3] : "",
  },
}));

export default GlamourCard;
