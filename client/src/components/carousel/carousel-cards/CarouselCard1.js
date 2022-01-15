import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Box from "@mui/system/Box";
import Button from "@mui/material/Button";
import GlamourImage from "components/styled-components/GlamourImage";
import { Paragraph } from "components/Typography";

const StyledBox = styled(Box)(({ theme }) => ({
  textAlign: "left",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  ".title": {
    fontSize: 50,
    marginTop: 0,
    marginBottom: "1.35rem",
    lineHeight: 1.2,
  },

  ".mobile_title": {
    color: theme.palette.error.dark,
    textAlign: "center",
    fontSize: 16,
  },
  ".mobile_title + *": {
    fontSize: 13,
  },
  ".mobile_btn": {
    height: 36,
    padding: "0 1.5rem",
    fontSize: 13,
  },
}));

const CarouselCard1 = ({ data, isMobile }) => {
  const { title, heading, body, imgUrl } = data;

  return (
    <StyledBox>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        <Grid item className="grid-item" sm={5} xs={12}>
          <h1 className={isMobile ? "mobile_title" : "title"}>{heading}</h1>
          <Paragraph
            color="secondary.main"
            mb={2.7}
            sx={{ textAlign: isMobile ? "center" : "inherit" }}
          >
            {body}
          </Paragraph>
          {!isMobile && (
            <Button
              className="button-link"
              variant="contained"
              color="primary"
              disableElevation
              sx={{
                px: "1.75rem",
                height: "44px",
                borderRadius: "8px",
              }}
            >
              Shop Now
            </Button>
          )}
        </Grid>
        <Grid item sm={5} xs={12}>
          {isMobile ? (
            <Grid container spacing={1} sx={{ mt: "-2.8rem" }}>
              <Grid item xs={8}>
                <GlamourImage
                  src={imgUrl}
                  alt={title}
                  sx={{
                    display: "block",
                    mx: "auto",
                    maxHeight: 200,
                    maxWidth: "auto",
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <Box
                  sx={{
                    pt: 10,
                  }}
                >
                  <Button
                    className="mobile_btn"
                    variant="contained"
                    color="primary"
                    sx={{
                      ml: "-3rem",
                      mt: "3rem",
                      height: "44px",
                      borderRadius: "8px",
                    }}
                  >
                    Shop Now
                  </Button>
                </Box>
              </Grid>
            </Grid>
          ) : (
            <GlamourImage
              src={imgUrl}
              alt="Steamer Carousel"
              sx={{
                display: "block",
                mx: "auto",
                maxHeight: 400,
                maxWidth: "auto",
              }}
            />
          )}
        </Grid>
      </Grid>
    </StyledBox>
  );
};

export default CarouselCard1;
