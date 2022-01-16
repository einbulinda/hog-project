import { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { getCategory, updateCategory } from "redux/actions/categoriesActions";
import { categorySchema } from "validations";
import DashboardHeader from "components/navigation-components/DashboardHeader";
import { AddBusiness } from "@mui/icons-material";
import {
  Button,
  Card,
  FormHelperText,
  Grid,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { CustomLink } from "components/styled-components/CustomLink";
import { CATEGORIES } from "navigation/CONSTANTS";
import { ErrorMessage, Field, Form, Formik } from "formik";

const mapState = ({ categoriesData }) => ({
  category: categoriesData.category,
});

const AdminEditCategory = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { category } = useSelector(mapState);
  const { name, status } = category;
  const [cateStatus, setCateStatus] = useState(false);
  const navigate = useNavigate();

  const initialValues = { name, status };

  useEffect(() => {
    dispatch(getCategory(id));
  }, [dispatch, id]);

  const handleChange = (e) => {
    setCateStatus(e.target.value);
  };

  const handleFormSubmit = (data) => {
    data.status = cateStatus;
    data.id = id;
    dispatch(updateCategory(data));
    navigate(CATEGORIES);
  };

  return (
    <Fragment>
      <DashboardHeader
        title={`Editing ${id}`}
        icon={AddBusiness}
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
                  label={`${name} Category`}
                  placeholder={`Editing ${name}`}
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
                  value={cateStatus}
                  placeholder={status ? "Active" : "Inactive"}
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
                  Update Category
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => navigate(CATEGORIES)}
                  sx={{ mt: "2rem", mr: "30%", ml: "1rem" }}
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </Card>
    </Fragment>
  );
};

export default AdminEditCategory;
