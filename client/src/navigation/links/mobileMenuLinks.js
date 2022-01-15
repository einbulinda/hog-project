import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import * as link from "navigation/CONSTANTS";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

export const mobileMenuLinks = [
  {
    path: link.HOME,
    title: "Home",
    icon: HomeOutlinedIcon,
  },
  {
    path: link.PRODUCTS,
    title: "Category",
    icon: CategoryOutlinedIcon,
  },
  {
    path: link.CART,
    title: "Cart",
    icon: ShoppingCartOutlinedIcon,
  },
  // {
  //   path: link.PROFILE,
  //   title: "Account",
  //   icon: PersonOutlineOutlinedIcon,
  // },
];
