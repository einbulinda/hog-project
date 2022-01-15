import LinenImg1 from "assets/categorybanner/linen/classic-dc2.jpg";
import LinenImg2 from "assets/categorybanner/linen/classic-dc5.jpg";
import StandVacuum from "assets/categorybanner/cleaning/stand-vacuum.jpg";
import SilentVacuum from "assets/categorybanner/cleaning/silent-vacuum.jpg";
import LinenImg3 from "assets/categorybanner/linen/classic-dc7.jpg";
import DoublePan from "assets/categorybanner/cookware/doublePan.jpg";
import Casserole from "assets/categorybanner/cookware/ss_casserole.jpg";
import Steamer from "assets/categorybanner/cookware/steamer.jpg";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  media: {
    maxWidth: "100%",
    height: "auto",
  },
}));

export const CookwareBanner = () => {
  const classes = useStyles();
  return (
    <Box>
      <Grid container>
        <Grid item xs={4}>
          <Typography className={classes.media} component="img" src={Steamer} />
        </Grid>
        <Grid item xs={4}>
          <Typography
            className={classes.media}
            component="img"
            src={Casserole}
          />
        </Grid>
        <Grid item xs={4}>
          <Typography
            className={classes.media}
            component="img"
            src={DoublePan}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export const LinenBanner = () => {
  const classes = useStyles();
  return (
    <Box>
      <Grid container>
        <Grid item xs={4}>
          <Typography
            className={classes.media}
            component="img"
            src={LinenImg2}
          />
        </Grid>
        <Grid item xs={4}>
          <Typography
            className={classes.media}
            component="img"
            src={LinenImg1}
          />
        </Grid>
        <Grid item xs={4}>
          <Typography
            className={classes.media}
            component="img"
            src={LinenImg3}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
export const CleaningBanner = () => {
  const classes = useStyles();
  return (
    <Box>
      <Grid container>
        <Grid item xs={6}>
          <Typography
            className={classes.media}
            component="img"
            src={StandVacuum}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography
            className={classes.media}
            component="img"
            src={SilentVacuum}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export const KitchenStorageBanner = () => {
  // const classes = useStyles();
  return (
    <Box>
      <Grid container>
        <Grid item xs={4}>
          Img1
        </Grid>
        <Grid item xs={4}>
          Img2
        </Grid>
        <Grid item xs={4}>
          Img3
        </Grid>
      </Grid>
    </Box>
  );
};
