import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
import { ErrorMessage, Field } from "formik";
import React, { Fragment } from "react";

const FormField = ({ fieldLabel, fieldName, ...props }) => {
  return (
    <Fragment>
      <Field
        {...props}
        as={TextField}
        fullWidth
        label={fieldLabel}
        name={fieldName}
        sx={{ mb: "1rem" }}
      />
      <ErrorMessage
        component={FormHelperText}
        fullWidth
        error={true}
        size="large"
        sx={{ mt: "-1rem", mb: "1rem" }}
        name={fieldName}
      />
    </Fragment>
  );
};

export default FormField;
