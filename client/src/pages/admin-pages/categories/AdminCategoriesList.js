import DashboardHeader from "components/navigation-components/DashboardHeader";
import ViewListIcon from "@mui/icons-material/ViewList";
import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import HogTable from "components/tables/HogTable";
import { CustomLink } from "components/styled-components/CustomLink";
import { ADD_CATEGORY } from "navigation/CONSTANTS";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { getAllCategories } from "redux/actions/categoriesActions";

const mapState = ({ categoriesData }) => ({
  categoriesList: categoriesData.categories,
});

const columns = [
  { id: "_id", label: "ID", minWidth: 50 },
  { id: "name", label: "Name", minWidth: 50 },
  { id: "status", label: "Is Active", minWidth: 170 },
  { id: "action", label: "Action", minWidth: 100 },
];

const AdminCategoriesList = () => {
  const { categoriesList } = useSelector(mapState);
  const dispatch = useDispatch();
  const editingURL = "/admin/categories/edit/";

  useEffect(() => {
    dispatch(getAllCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <DashboardHeader
        title="Categories"
        icon={ViewListIcon}
        button={
          <CustomLink path={ADD_CATEGORY}>
            <Button variant="contained" color="error" sx={{ px: "2rem" }}>
              Add New Category
            </Button>
          </CustomLink>
        }
      />
      <HogTable items={categoriesList} columns={columns} url={editingURL} />
    </Fragment>
  );
};

export default AdminCategoriesList;
