import FlashOnIcon from "@mui/icons-material/FlashOn";
import Box from "@mui/system/Box";
import { useWindowSize } from "navigation/auth/customHooks";
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard1 from "components/product-cards/ProductCard1";
import Carousel from "components/carousel/Carousel";
import { useSelector } from "react-redux";
import SectionCreator from "components/templates/SectionCreator";
import { useDispatch } from "react-redux";
import { getAllProducts } from "redux/actions/productActions";

const mapState = ({ productsData }) => ({ products: productsData.products });

const FlashDeals = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(mapState);
  const [visibleSlides, setVisibleSlides] = useState(4);
  // For mobile views
  const width = useWindowSize();

  useEffect(() => {
    dispatch(getAllProducts());
    // Check screen width
    if (width < 500) setVisibleSlides(1);
    else if (width < 650) setVisibleSlides(2);
    else if (width < 950) setVisibleSlides(3);
    else setVisibleSlides(4);
  }, [width]);

  // Filter Products only those with discounts. first 20 to be displayed.
  const discountDeals = products.filter(
    function (pdt) {
      if (this.limit < 20 && pdt.discount > 0) {
        this.limit++;
        return true;
      }
      return false;
    },
    { limit: 0 }
  );

  return (
    <SectionCreator
      icon={<FlashOnIcon color="primary" />}
      title="Flash Deals"
      seeMoreLink="#"
    >
      <Box mt={-0.5} mb={-0.5}>
        <Carousel
          naturalSlideHeight={145}
          totalSlides={products.length}
          visibleSlides={visibleSlides}
          infinite={true}
        >
          {discountDeals.map((item) => (
            <Box py={0.5} spacing={2} key={item._id}>
              <ProductCard1 product={item} />
            </Box>
          ))}
        </Carousel>
      </Box>
    </SectionCreator>
  );
};

export default FlashDeals;
