import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { makeStyles } from "@mui/styles";
import Blender from "assets/carousel/beverage/blender2in1.jpg";
import Citrus from "assets/carousel/beverage/citrus_press.jpg";

const useStyles = makeStyles({
  media: {
    width: "auto",
    height: "10rem",
  },
});

const CarouselCard2 = () => {
  const classes = useStyles();

  return (
    <Container>
      <Box sx={{ px: "1.5rem" }}>
        <Grid container>
          <Grid item md={4} xs={12} justifyContent="center">
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="flex-end"
            >
              <Grid item xs={0}>
                <Typography
                  className={classes.media}
                  component="img"
                  src={Blender}
                />
              </Grid>
              <Grid item>
                <Typography
                  sx={{ width: "auto", height: "15rem" }}
                  component="img"
                  src={Citrus}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={8} xs={12}>
            Full
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default CarouselCard2;
