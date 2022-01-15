import { Container, Grid } from "@mui/material";
import Box from "@mui/system/Box";
import { CustomLink } from "components/styled-components/CustomLink";
import DottedStar from "components/icons/DottedStar";
import RankBadge from "components/icons/RankBadge";
import ProductCard3 from "components/product-cards/ProductCard3";
import ProductCard4 from "components/product-cards/ProductCard4";
import SectionHeader from "components/templates/SectionHeader";
import GlamourCard from "components/styled-components/GlamourCard";
import React from "react";

const TopRatings = () => {
  return (
    <Box mb={7.5}>
      <Container>
        <Box>
          <Grid container spacing={4}>
            <Grid item lg={6} xs={12}>
              <SectionHeader
                icon={<RankBadge />}
                title="Top Ratings"
                seeMoreLink="#"
              />
              <GlamourCard sx={{ p: "1rem" }}>
                <Grid container spacing={4}>
                  {topRatedProducts.map((item) => (
                    <Grid item md={3} sm={6} xs={6} key={item.title}>
                      <CustomLink path={item.productUrl}>
                        <ProductCard3 />
                      </CustomLink>
                    </Grid>
                  ))}
                </Grid>
              </GlamourCard>
            </Grid>
            <Grid item md={6} xs={12}>
              <SectionHeader
                icon={<DottedStar />}
                title="Featured Brands"
                seeMoreLink="#"
              />
              <GlamourCard sx={{ p: "1rem" }}>
                <Grid container spacing={4}>
                  {brandList.map((item) => (
                    <Grid item sm={6} xs={12} key={item.title}>
                      <CustomLink path={item.productUrl}>
                        <ProductCard4 {...item} />
                      </CustomLink>
                    </Grid>
                  ))}
                </Grid>
              </GlamourCard>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default TopRatings;

const topRatedProducts = [];
const brandList = [];
