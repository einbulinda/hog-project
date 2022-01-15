import { Container } from "@mui/material";
import Box from "@mui/system/Box";
import React from "react";
import SectionHeader from "./SectionHeader";

const SectionCreator = ({ icon, seeMoreLink, title, children }) => {
  return (
    <Box mb={5.5}>
      <Container sx={{ pb: " 1rem" }}>
        {title && (
          <SectionHeader title={title} seeMoreLink={seeMoreLink} icon={icon} />
        )}

        {children}
      </Container>
    </Box>
  );
};

export default SectionCreator;
