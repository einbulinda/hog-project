import { useEffect, Fragment } from "react";
import DashboardHeader from "components/navigation-components/DashboardHeader";
import ViewListIcon from "@mui/icons-material/ViewList";
import { useDispatch, useSelector } from "react-redux";
import HogTable from "components/tables/HogTable";
import { CustomLink } from "components/styled-components/CustomLink";
import { Button } from "@mui/material";
import { ADD_PRODUCT } from "navigation/CONSTANTS";
import { getAllProducts } from "redux/actions/productActions";

const mapState = ({ productsData }) => ({
  productsList: productsData.products,
});

const columns = [
  { id: "image", label: "Image", minWidth: 50 },
  { id: "name", label: "Name", minWidth: 170 },
  {
    id: "price",
    label: "Price",
    minWidth: 100,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  { id: "discount", label: "Discount %", minWidth: 100, align: "center" },
  { id: "qty", label: "Qty in Hand", minWidth: 100, align: "center" },
  { id: "action", label: "Action", minWidth: 100 },
];

const AdminProductsList = () => {
  const dispatch = useDispatch();
  const { productsList } = useSelector(mapState);
  const editingURL = "/admin/products/edit/";

  useEffect(() => {
    dispatch(getAllProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <DashboardHeader
        title="Products"
        icon={ViewListIcon}
        button={
          <CustomLink path={ADD_PRODUCT}>
            <Button variant="contained" color="error" sx={{ px: "2rem" }}>
              Add A Product
            </Button>
          </CustomLink>
        }
      />
      <HogTable items={productsList} columns={columns} url={editingURL} />
    </Fragment>
  );
};

export default AdminProductsList;
