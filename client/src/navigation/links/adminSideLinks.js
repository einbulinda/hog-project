import Dashboard from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import * as link from "navigation/CONSTANTS";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import CategoryIcon from "@mui/icons-material/Category";
import HomeIcon from "@mui/icons-material/Home";
// import { selectProducts } from "redux/selectors/productsSelector";

export const sideLinks = [
  {
    path: link.ADMIN,
    title: "Dashboard",
    icon: Dashboard,
  },
  {
    path: link.HOME,
    title: "Home",
    icon: HomeIcon,
  },
  {
    path: link.ADMIN_PRODUCTS,
    title: "Products List",
    icon: AssignmentIcon,
  },
  {
    path: link.ADD_PRODUCT,
    title: "Add New Product",
    icon: NoteAddIcon,
  },
  {
    path: link.CATEGORIES,
    title: "Categories List",
    icon: CategoryIcon,
  },
  {
    path: link.ADD_CATEGORY,
    title: "Add A Category",
    icon: NoteAddIcon,
  },
  {
    path: link.ADMIN_ORDERS,
    title: "Orders",
    icon: ShoppingCart,
    count: 18,
  },
];
