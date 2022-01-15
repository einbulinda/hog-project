import {
  Box,
  Button,
  FormHelperText,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { ErrorMessage, Field, Form } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategories } from "redux/actions/categoriesActions";
import DropZone from "components/styled-components/DropZone";
import { useEffect } from "react";

const mapState = ({ categoriesData }) => ({
  categories: categoriesData.categories,
});

const ProductForm = (imageUrl, handleOnDrop, uploading, saving) => {
  const dispatch = useDispatch();
  const { categories } = useSelector(mapState);

  useEffect(() => {
    dispatch(getAllCategories());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
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
              <Field
                as={DropZone}
                onDrop={(file) => handleOnDrop(file)}
                name="image"
              />
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
                  <Typography variant="subtitle1">Uploading...</Typography>
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
  );
};

export default ProductForm;
