import SectionCreator from "components/templates/SectionCreator";
import Category from "components/icons/Category";
import React, { useEffect, useState } from "react";
import Carousel from "components/carousel/Carousel";
import { useWindowSize } from "navigation/auth/customHooks";
import { Box } from "@mui/system";
import { CustomLink } from "components/styled-components/CustomLink";
import { Card } from "@mui/material";
import ProductCard2 from "components/product-cards/ProductCard2";
import {
  CleaningBanner,
  CookwareBanner,
  KitchenStorageBanner,
  LinenBanner,
} from "components/categories/CategoryBanners";

const TopCategories = () => {
  const [visibleSlides, setVisibleSlides] = useState(4);

  // For mobile views
  const width = useWindowSize();

  useEffect(() => {
    // Check screen width
    if (width < 500) setVisibleSlides(1);
    else if (width < 650) setVisibleSlides(2);
    else if (width < 950) setVisibleSlides(3);
    else setVisibleSlides(4);
  }, [width]);

  return (
    <SectionCreator
      icon={<Category color="primary" />}
      title="Top Categories"
      seeMoreLink="#"
    >
      <Box>
        <Carousel
          naturalSlideHeight="50"
          totalSlides={6}
          visibleSlides={visibleSlides}
        >
          {categoryList.map((item, ind) => (
            <CustomLink path={item.categoryUrl} key={ind}>
              <Card sx={{ p: "1rem" }} elevation={0}>
                <ProductCard2
                  title={item.title}
                  subtitle={item.subtitle}
                  imgUrl={item.imgUrl}
                  textWhite={item.textWhite}
                />
              </Card>
            </CustomLink>
          ))}
        </Carousel>
      </Box>
    </SectionCreator>
  );
};

export default TopCategories;

const categoryList = [
  {
    title: "Cleaning Equipment",
    subtitle: "5 sold this week",
    categoryUrl: "/cleaning-equipment",
    imgUrl: CleaningBanner,
  },
  {
    title: "Linen",
    subtitle: "12 pre-orders today",
    categoryUrl: "/linen",
    imgUrl: LinenBanner,
    textWhite: "#FFFFFF",
  },
  {
    title: "Cookware",
    subtitle: "50 orders in 2 weeks",
    categoryUrl: "/cookware",
    imgUrl: CookwareBanner,
    textWhite: "primary",
  },
  {
    title: "Kitchen Storage",
    subtitle: "6 arrivals this month",
    categoryUrl: "/kitchen-storage",
    imgUrl: KitchenStorageBanner,
  },
  {
    title: "Utensil & Cutlery",
    subtitle: "Black Fri Offer",
    categoryUrl: "/utensil-and-cutlery",
    imgUrl: "",
  },
  {
    title: "Kitchen Appliances",
    subtitle: "Finest Dining",
    categoryUrl: "/kitchen-appliances",
    imgUrl: "",
  },
];
