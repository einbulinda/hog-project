import { styled } from "@mui/material/styles";

const ButtonText = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));

export default ButtonText;
