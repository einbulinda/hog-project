import Card from "@mui/material/Card";
import { styled } from "@mui/system";

export const SideNavWrapper = styled(Card)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    height: "calc(100vh - 64px)",
    boxShadow: "none",
    overflowY: "auto",
  },
}));
