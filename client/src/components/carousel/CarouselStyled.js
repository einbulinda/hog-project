import { styled } from "@mui/material/styles";
import { CarouselProvider, Slider } from "pure-react-carousel";

export const StyledCarouselProvider = styled(CarouselProvider)(
  ({ spacing }) => ({
    position: "relative",
    minWidth: 0,
    "& .carousel__inner-slide": {
      margin: "auto",
      width: `calc(100% - ${spacing || "0px"})`,
    },
    "&:hover $arrowButton": {
      display: "flex",
    },
  })
);

export const StyledSlider = styled(Slider)(({ spacing }) => ({
  marginLeft: `calc(-1 * ${spacing || "0px"}/2)`,
  marginRight: `calc(-1 * ${spacing || "0px"}/2)`,
}));
