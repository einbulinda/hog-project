import { Rating } from "@mui/material";
import { Box } from "@mui/system";
import FlexBox from "components/styled-components/FlexBox";
import HoverBox from "components/styled-components/HoverBox";
import { H4, Small } from "components/Typography";
import React from "react";
import NumberFormat from "react-number-format";

const ProductCard3 = ({ imgUrl, rating, title, price, reviewCount = 0 }) => {
  return (
    <Box>
      <HoverBox mb={2} mx="auto" borderRadius="8px">
        <img
          src={imgUrl}
          width={0}
          height={0}
          layout="responsive"
          alt={title}
          mx="auto"
        />
      </HoverBox>
      <FlexBox justifyContent="center" alignItems="center" mb={0.5}>
        <Rating precision={0.5} value={rating || 4.5} color="warn" readOnly />
        <Small fontWeight="600" pl={0.5}>
          {reviewCount || 21}
        </Small>
      </FlexBox>
      <H4
        fontWeight="600"
        fontSize="14px"
        textAlign="center"
        mb={0.5}
        title={title}
        ellipsis
      >
        {title}
      </H4>
      <H4
        fontWeight="600"
        fontSize="14px"
        textAlign="center"
        color="primary.main"
      >
        <NumberFormat
          value={price}
          displayType="text"
          thousandSeparator={true}
          prefix={"Ksh. "}
        />
      </H4>
    </Box>
  );
};

export default ProductCard3;
