import { MenuItem } from "@mui/material";
import { styled } from "@mui/styles";
import { Box } from "@mui/system";
import { CustomLink } from "components/styled-components/CustomLink";
import React from "react";

const Wrapper = styled(Box)(({ theme }) => ({
  "& .category-dropdown-link": {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    padding: "0px 1rem",
    height: 40,
    minWidth: "278px",
    whiteSpace: "pre",
    transition: "all 250ms ease-in-out",
    "& .title": {
      paddingLeft: "0.75rem",
      flexGrow: 1,
    },
  },
  "&:hover": {
    "& > .category-dropdown-link": {
      color: theme.palette.primary.main,
      background: theme.palette.primary.light,
    },
    "& > .mega-menu": {
      display: "block",
    },
  },
}));

const CategoryMenuItem = ({ title, slug, children, ...rest }) => {
  return (
    <Wrapper>
      <CustomLink path={slug}>
        <MenuItem>
          <span className="title">{title}</span>
        </MenuItem>
      </CustomLink>
      {children}
    </Wrapper>
  );
};

export default CategoryMenuItem;
