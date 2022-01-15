import { Card, Chip, Typography } from "@mui/material";
import HoverBox from "components/styled-components/HoverBox";
import React from "react";

const ProductCard2 = ({ title, subtitle, imgUrl, textWhite }) => {
  return (
    <Card sx={{ position: "relative" }}>
      <Chip
        color="secondary"
        label={title}
        size="small"
        sx={{
          position: "absolute",
          fontWeight: "600",
          fontSize: "10px",
          px: "8px",
          top: "0.875rem",
          left: "0.875rem",
          zIndex: 2,
        }}
      />

      <Chip
        sx={{
          position: "absolute",
          fontWeight: "600",
          fontSize: "10px",
          px: "8px",
          top: "0.875rem",
          right: "0.875rem",
          zIndex: 2,
          color: textWhite,
        }}
        label={subtitle}
        size="small"
      />
      <HoverBox position="relative" height="120px" borderRadius="8px">
        <Typography component={imgUrl} layout="fill" borderRadius="8px" />
      </HoverBox>
    </Card>
  );
};

export default ProductCard2;
