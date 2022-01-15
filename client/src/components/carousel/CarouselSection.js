import { Container } from "@mui/material";
import { Box } from "@mui/system";
import Carousel from "./Carousel";
import CarouselCard1 from "./carousel-cards/CarouselCard1";
import { mainCarousel } from "./carousel-cards/carouselData";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const CarouselSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box bgcolor="white" mb={7.5}>
      <Container sx={{ py: "2rem" }}>
        <Carousel
          naturalSlideHeight={isMobile ? 85 : 35}
          totalSlides={mainCarousel.length}
          visibleSlides={1}
          infinite={true}
          autoPlay={true}
          showDots={true}
          showArrow={false}
          spacing="0px"
        >
          {mainCarousel.map((carousel, key) => (
            <CarouselCard1 data={carousel} key={key} isMobile={isMobile} />
          ))}
        </Carousel>
      </Container>
    </Box>
  );
};

export default CarouselSection;
