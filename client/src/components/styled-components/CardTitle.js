import Typography from "@mui/material/Typography";
import React from "react";

const CardTitle = (props) => {
  return (
    <Typography variant="h6" color="error" fontWeight="600" mb={2}>
      {props.children}
    </Typography>
  );
};

export default CardTitle;
