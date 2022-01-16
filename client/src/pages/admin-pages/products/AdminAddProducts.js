import React, { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { storage } from "services/utils";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Card,
  FormHelperText,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";

import DashboardHeader from "components/navigation-components/DashboardHeader";
import { CustomLink } from "components/styled-components/CustomLink";
import { ADMIN_PRODUCTS } from "navigation/CONSTANTS";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import { createProduct } from "redux/actions/productActions";
import { Box } from "@mui/system";
import { productSchema } from "validations";
import { useNavigate } from "react-router";
import DropZone from "components/styled-components/DropZone";

const mapState = ({ productsData, categoriesData }) => ({
  loading: productsData.loading,
  categories: categoriesData.categories,
});

const AdminAddProducts = () => {
  const dispatch = useDispatch();
  const { loading, categories } = useSelector(mapState);
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState([]);
  const [saving, setSaving] = useState(loading);

  useEffect(() => {
    loading && setSaving(loading);
  }, [loading]);

  const navigate = useNavigate();

  // handling file upload
  const handleOnDrop = (file) => {
    setUploading(true);
    const imageFile = file[0];
    const productRef = ref(storage, `products/${imageFile.name}`);

    uploadBytes(productRef, imageFile).then((snapshot) => {
      setUploading(false);

      // setting file URL
      getDownloadURL(productRef)
        .then((url) => {
          setImageUrl(url);
        })
        .catch((error) => {
          switch (error.code) {
            case "storage/object-not-found":
              console.log("No object exists at the desired reference.");
              break;
            case "storage/bucket-not-found":
              console.log("No bucket is configured for Cloud Storage");
              break;
            case "storage/quota-exceeded":
              console.log(
                "Quota on your Cloud Storage bucket has been exceeded."
              );
              break;

            default:
              console.log("An error ocurred");
              break;
          }
        });
    });
  };

  const handleFormSubmit = (newProduct, { resetForm }) => {
    newProduct.image = imageUrl;
    dispatch(createProduct(newProduct));
    resetForm({});
    !saving && navigate(ADMIN_PRODUCTS);
  };

  return (
    <React.Fragment>
      <DashboardHeader
        title="Add Product"
        icon={AddBusinessIcon}
        button={
          <CustomLink path={ADMIN_PRODUCTS}>
            <Button variant="contained" color="error" sx={{ px: "2rem" }}>
              Products List
            </Button>
          </CustomLink>
        }
      />
      <Card sx={{ p: "3rem" }}>
        <Formik
          initialValues={initialValues}
          validationSchema={productSchema}
          onSubmit={handleFormSubmit}
        >
          <Form>
            <Grid container spacing={3}>
              <Grid item sm={6} xs={12}>
                <Field
                  name="name"
                  label="Product Name"
                  placeholder="Product Name"
                  fullWidth
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
                  name="category"
                  label="Select Category"
                  fullWidth
                  select
                  as={TextField}
                >
                  {categories.map((category) => {
                    const { name, status, _id } = category;
                    return (
                      <MenuItem value={name} key={_id}>
                        {status && name}
                      </MenuItem>
                    );
                  })}
                </Field>
                <ErrorMessage
                  component={FormHelperText}
                  error={true}
                  size="large"
                  sx={{ ml: 1 }}
                  name="category"
                />
              </Grid>
              {imageUrl ? (
                <>
                  <Grid item xs={8}>
                    <Field as={DropZone} onDrop={handleOnDrop} name="image" />
                    <ErrorMessage
                      component={FormHelperText}
                      error={true}
                      size="large"
                      sx={{ ml: 1 }}
                      name="image"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Box>
                      {uploading ? (
                        <Typography variant="subtitle1">
                          Uploading...
                        </Typography>
                      ) : (
                        <Typography
                          component="img"
                          src={imageUrl}
                          alt="Upload Image"
                          sx={{
                            width: "100%",
                            height: 200,
                            objectFit: "contain",
                          }}
                        />
                      )}
                    </Box>
                  </Grid>
                </>
              ) : (
                <Grid item xs={12}>
                  <Field as={DropZone} onDrop={handleOnDrop} name="image" />
                  <ErrorMessage
                    component={FormHelperText}
                    error={true}
                    size="large"
                    sx={{ ml: 1 }}
                    name="image"
                  />
                </Grid>
              )}

              <Grid item xs={12}>
                <Field
                  name="description"
                  label="Description"
                  placeholder="Description"
                  rows={6}
                  multiline
                  as={TextField}
                  fullWidth
                />
                <ErrorMessage
                  component={FormHelperText}
                  error={true}
                  size="large"
                  sx={{ ml: 1 }}
                  name="description"
                />
              </Grid>
              <Grid item sm={4} xs={12}>
                <Field
                  name="qty"
                  label="Quantity in Stock"
                  placeholder="Stock"
                  as={TextField}
                  fullWidth
                />
                <ErrorMessage
                  component={FormHelperText}
                  error={true}
                  size="large"
                  sx={{ ml: 1 }}
                  name="qty"
                />
              </Grid>
              <Grid item sm={4} xs={12}>
                <Field
                  as={TextField}
                  name="brand"
                  label="Product Brand"
                  placeholder="Arshia"
                  fullWidth
                />
                <ErrorMessage
                  component={FormHelperText}
                  error={true}
                  size="large"
                  sx={{ ml: 1 }}
                  name="brand"
                />
              </Grid>
              <Grid item sm={4} xs={12}>
                <Field
                  as={TextField}
                  name="cost"
                  label="Cost Price"
                  placeholder="Cost Price"
                  type="number"
                  fullWidth
                />
                <ErrorMessage
                  component={FormHelperText}
                  error={true}
                  size="large"
                  sx={{ ml: 1 }}
                  name="cost"
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <Field
                  as={TextField}
                  name="price"
                  label="Price"
                  placeholder="Price"
                  type="number"
                  fullWidth
                />
                <ErrorMessage
                  component={FormHelperText}
                  error={true}
                  size="large"
                  sx={{ ml: 1 }}
                  name="price"
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <Field
                  as={TextField}
                  name="discount"
                  label="Discount Amount"
                  placeholder="Discount Value"
                  type="number"
                  fullWidth
                />
                <ErrorMessage
                  component={FormHelperText}
                  error={true}
                  size="large"
                  sx={{ ml: 1 }}
                  name="discount"
                />
              </Grid>
              <Grid item xs={12} sm={12} sx={{ justifyContent: "center" }}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  sx={{ mt: "2rem", mx: "2rem" }}
                  disabled={saving}
                >
                  {saving ? "Saving..." : "Save Product"}
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  type="reset"
                  sx={{ mt: "2rem", mx: "2rem" }}
                >
                  Clear Form
                </Button>
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </Card>
    </React.Fragment>
  );
};

export default AdminAddProducts;

const initialValues = {
  name: "",
  brand: "",
  category: "",
  qty: "",
  cost: "",
  price: "",
  discount: "",
  image: null,
  description: "",
};
