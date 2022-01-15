import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const PaperItem = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "50vh",
  lineHeight: "60px",
  width: "60vw",
}));

export default PaperItem;
