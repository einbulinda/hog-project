import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import PaperItem from "components/styled-components/PaperItem";
import { Button, Typography } from "@mui/material";
import { HOME } from "./CONSTANTS";

import { CustomLink } from "components/styled-components/CustomLink";
import { useNavigate } from "react-router";
import ButtonText from "components/styled-components/ButtonText";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Box
          sx={{
            p: 2,
            backgroundColor: "background.default",
            display: "flex",
            justifyContent: "center",
            marginTop: "10vh",
          }}
        >
          <PaperItem elevation={5}>
            <Typography variant="h3" sx={{ p: 2 }}>
              SORRY
            </Typography>
            <ButtonText>
              We could not find that page <br />
              <CustomLink path={HOME}>Go Shopping</CustomLink>
            </ButtonText>
            {/* Consider auto redirecting back */}
            <Button variant="contained" onClick={() => navigate(-1)}>
              GO BACK
            </Button>
          </PaperItem>
        </Box>
      </Grid>
    </Grid>
  );
};

export default NotFoundPage;
