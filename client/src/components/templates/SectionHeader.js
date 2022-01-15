import { ArrowRight } from "@mui/icons-material";
import React from "react";
import { CustomLink } from "components/styled-components/CustomLink";
import FlexBox from "components/styled-components/FlexBox";
import { H2 } from "components/Typography";

const SectionHeader = ({ title, seeMoreLink, icon }) => {
  return (
    <FlexBox justifyContent="space-between" alignItems="center" mb={3}>
      <FlexBox alignItems="center">
        {icon && (
          <FlexBox mr={1} alignItems="center">
            {icon}
          </FlexBox>
        )}
        <H2 fontWeight="bold" lineHeight="1">
          {title}
        </H2>
      </FlexBox>
      {seeMoreLink && (
        <CustomLink path={seeMoreLink}>
          <FlexBox alignItems="center" ml={1} color="grey.600">
            View all
            <ArrowRight fontSize="small" color="inherit" />
          </FlexBox>
        </CustomLink>
      )}
    </FlexBox>
  );
};

export default SectionHeader;
