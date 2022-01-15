import * as link from "navigation/CONSTANTS";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonIcon from "@mui/icons-material/Person";
import PlaceIcon from "@mui/icons-material/Place";

export const customerSideLinks = [
  {
    title: "DASHBOARD",
    list: [
      {
        path: link.ORDERS,
        title: "Orders",
        icon: ShoppingBagIcon,
      },
      {
        path: link.WISHLIST,
        title: "Wishlist",
        icon: FavoriteBorderIcon,
      },
    ],
  },
  {
    title: "ACCOUNT SETTINGS",
    list: [
      {
        path: link.PROFILE,
        title: "Profile Info",
        icon: PersonIcon,
      },
      {
        path: link.ADDRESS,
        title: "Address",
        icon: PlaceIcon,
      },
    ],
  },
];
