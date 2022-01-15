import { Fragment } from "react";
import CarouselSection from "components/carousel/CarouselSection";
import Navbar from "components/navigation-components/Navbar";
import FlashDeals from "components/homepage-sections/FlashDeals";
import TopCategories from "components/homepage-sections/TopCategories";
import TopRatings from "components/homepage-sections/TopRatings";
import NewArrivals from "components/homepage-sections/NewArrivals";
import OurServices from "components/homepage-sections/OurServices";

const Homepage = () => {
  return (
    <Fragment>
      <Navbar hideCategories={false} />
      <CarouselSection />
      <FlashDeals />
      <TopCategories />
      <TopRatings />
      <NewArrivals />
      <OurServices />
    </Fragment>
  );
};

export default Homepage;
