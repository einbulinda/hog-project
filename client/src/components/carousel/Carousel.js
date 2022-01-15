import { Slide, Dot, ButtonBack, ButtonNext } from "pure-react-carousel";
import React from "react";
import { makeStyles } from "@mui/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import clsx from "clsx";
import { StyledCarouselProvider, StyledSlider } from "./CarouselStyled";

const useStyles = makeStyles({
  root: {
    position: "relative",
    margin: "auto",
  },
  btn: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    background: "transparent",
    border: "none",
  },
  btnBack: {
    left: 0,
  },
  btnNext: {
    right: 0,
  },
  dotGroup: {
    textAlign: "center",
  },
  dot: {
    background: "transparent",
    border: "none",
  },
});

const Carousel = ({
  step,
  spacing,
  children,
  totalSlides,
  visibleSlides,
  infinite,
  interval,
  currentSlide,
  naturalSlideWidth,
  naturalSlideHeight,
  hasMasterSpinner,
  isIntrinsicHeight,
  autoPlay,
  showDots,
  dotColor,
}) => {
  const classes = useStyles();

  return (
    <StyledCarouselProvider
      step={step}
      spacing={spacing}
      interval={interval}
      infinite={infinite}
      isPlaying={autoPlay}
      totalSlides={totalSlides}
      currentSlide={currentSlide}
      visibleSlides={visibleSlides}
      hasMasterSpinner={hasMasterSpinner}
      isIntrinsicHeight={isIntrinsicHeight}
      naturalSlideWidth={naturalSlideWidth || 100}
      naturalSlideHeight={naturalSlideHeight || 125}
    >
      <div className={classes.root}>
        <StyledSlider spacing={spacing}>
          {React.Children.map(children, (child, ind) => (
            <Slide index={ind}>{child}</Slide>
          ))}
        </StyledSlider>
        <ButtonBack className={clsx(classes.btn, classes.btnBack)}>
          <ChevronLeftIcon color="primary" fontSize="large" />
        </ButtonBack>
        <ButtonNext className={clsx(classes.btn, classes.btnNext)}>
          <ChevronRightIcon color="primary" fontSize="large" />
        </ButtonNext>
      </div>
      {showDots && (
        <div className={classes.dotGroup}>
          {React.Children.map(children, (child, ind) => (
            <Dot className={classes.dot} slide={ind} key={ind}>
              O
            </Dot>
          ))}
        </div>
      )}
    </StyledCarouselProvider>
  );
};

export default Carousel;
