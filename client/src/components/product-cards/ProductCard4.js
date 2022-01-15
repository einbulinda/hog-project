import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import PriceTag from "components/styled-components/PriceTag";
import HoverBox from "components/styled-components/HoverBox";
import { H4 } from "components/Typography";
import React from "react";

const ProductCard4 = ({ imgUrl, title, price, offer, id }) => {
  return (
    <Box>
      <HoverBox mb={1}>
        <Typography
          component="img"
          src={imgUrl}
          width="100%"
          height={200}
          sx={{ objectFit: "cover", borderRadius: "8px" }}
          alt={title}
        />
      </HoverBox>
      <H4 fontSize="14px" fontWeight="600">
        {title}
      </H4>
      <H4 fontWeight="600" fontSize="14px" color="primary.main">
        <PriceTag price={price} offer={offer || 0} />
      </H4>
    </Box>
  );
};

export default ProductCard4;
