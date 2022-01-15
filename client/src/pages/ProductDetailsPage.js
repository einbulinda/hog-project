import { makeStyles } from "@mui/styles";
import ProductDetailsCard from "components/product-cards/ProductDetailsCard";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100%",
  },
}));

const ProductDetailsPage = () => {
  const classes = useStyles();
  // eslint-disable-next-line no-unused-vars
  const [selectedOption, setSelectedOption] = useState(0);

  // const handleTabOption = () => {};

  return (
    <div className={classes.root}>
      <ProductDetailsCard />
      {/* Tabs for description & reviews */}
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          {/* <Tabs
            value={setSelectedOption}
            onChange={handleTabOption}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="product description & review"
          >
            <Tab label="Description" />
            <Tab label="Review (3)  " />
          </Tabs> */}
        </Box>
      </Box>

      {/* Frequently bought */}
      {/* Related Products */}
    </div>
  );
};

export default ProductDetailsPage;
