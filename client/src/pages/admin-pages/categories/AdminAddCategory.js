import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import {
  Button,
  Card,
  FormHelperText,
  Grid,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import DashboardHeader from "components/navigation-components/DashboardHeader";
import { CustomLink } from "components/styled-components/CustomLink";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { CATEGORIES } from "navigation/CONSTANTS";
import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { createCategory } from "redux/actions/categoriesActions";
import { categorySchema } from "validations";

const AdminAddCategory = () => {
  const [status, setStatus] = useState(false);
  const dispatch = useDispatch();

  const handleFormSubmit = (data, { resetForm }) => {
    dispatch(createCategory(data));
    resetForm({});
  };

  const handleChange = (e) => {
    setStatus(e.target.value);
  };

  return (
    <Fragment>
      <DashboardHeader
        title="Add A Category"
        icon={AddBusinessIcon}
        button={
          <CustomLink path={CATEGORIES}>
            <Button variant="contained" color="error" sx={{ px: "2rem" }}>
              Categories List
            </Button>
          </CustomLink>
        }
      />

      <Card sx={{ p: "3rem" }}>
        <Formik
          initialValues={initialValues}
          validationSchema={categorySchema}
          onSubmit={handleFormSubmit}
        >
          <Form>
            <Grid container spacing={3}>
              <Grid item sm={6} xs={12}>
                <Field
                  name="name"
                  label="Name"
                  placeholder="Category Name"
                  fullWidth
                  size="large"
                  as={TextField}
                />
                <ErrorMessage
                  component={FormHelperText}
                  error={true}
                  size="large"
                  sx={{ ml: 1 }}
                  name="name"
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <Field
                  name="status"
                  label="Status"
                  id="status"
                  value={status}
                  placeholder="Status"
                  fullWidth
                  onChange={handleChange}
                  as={Select}
                >
                  <MenuItem value={true}>Active</MenuItem>
                  <MenuItem value={false}>Inactive</MenuItem>
                </Field>
                <ErrorMessage
                  component={FormHelperText}
                  error={true}
                  size="large"
                  sx={{ ml: 1 }}
                  name="status"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  sx={{ mt: "2rem", ml: "30%", mr: "1rem" }}
                >
                  Save Category
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  type="reset"
                  sx={{ mt: "2rem", mr: "30%", ml: "1rem" }}
                >
                  Clear Form
                </Button>
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </Card>
    </Fragment>
  );
};

export default AdminAddCategory;

const initialValues = { name: "", status: true };
