import { Avatar, Button, Grid, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import FlexBox from "components/styled-components/FlexBox";
import PriceTag from "components/styled-components/PriceTag";
import { H1, H2, H6 } from "components/Typography";
import React, { useCallback, useState } from "react";
import ImageViewer from "react-simple-image-viewer";

const ProductIntro = ({ imgUrl, title, price, id, qty }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  const handleImageClick = (ind) => {
    setSelectedImage(ind);
  };

  return (
    <Box width="100%">
      <Grid container spacing={3} justifyContent="space-around">
        <Grid item md={6} xs={12} alignItems="center">
          <Box>
            <FlexBox justifyContent="center" mb={6}>
              <Typography
                src={imgUrl[selectedImage]}
                alt={title}
                onClick={() =>
                  openImageViewer(imgUrl.indexOf(imgUrl[selectedImage]))
                }
                height={300}
                width={300}
                loading="eager"
                component="img"
              />
              {isViewerOpen && (
                <ImageViewer
                  src={imgUrl}
                  currentIndex={currentImage}
                  onClose={() => closeImageViewer()}
                  backgroundStyle={{ backgroundColor: "rgba(0,0,0,0.9" }}
                />
              )}
            </FlexBox>
            <FlexBox overflow="auto">
              {imgUrl.map((url, ind) => (
                <Box
                  height={64}
                  width={64}
                  minwidth={64}
                  bgcolor="white"
                  borderRadius="10px"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  border="1px solid"
                  style={{ cursor: "pointer" }}
                  ml={ind === 0 ? "auto" : 0}
                  mr={ind === imgUrl.length - 1 ? "auto" : "10px"}
                  borderColor={
                    selectedImage === ind ? "primary.main" : "grey.400"
                  }
                  onClick={(ind) => handleImageClick(ind)}
                  key={ind}
                >
                  <Avatar src={url} variant="square" height={40} />
                </Box>
              ))}
            </FlexBox>
          </Box>
        </Grid>
        <Grid item md={6} xs={12} alignItems="center">
          <H1 mb={2}>{title}</H1>
          <FlexBox alignItems="center" mb={2}>
            <Box>Brand:</Box>
            <H6 ml={1}>Arshia</H6>
          </FlexBox>
          <FlexBox alignItems="center" mb={2}>
            <Box lineHeight="1">Rated:</Box>
            <Box mx={1} lineHeight="1">
              <Rating color="warn" fontSize="1.25rem" value={4} readOnly />
            </Box>
            <H6 lineHeight="1">(50)</H6>
          </FlexBox>
          <Box mb={3}>
            <H2 color="primary.main" mb={0.5} lineHeight="1">
              <PriceTag price={price} offer={0} />
            </H2>
            {qty > 0 && <Box color="inherit">Stock Available</Box>}
          </Box>
          <Button
            sx={{ mb: "36px", px: "1.75rem", height: "40px" }}
            variant="contained"
            color="primary"
          >
            Add To Cart
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductIntro;
