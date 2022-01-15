import { ChevronRight } from "@mui/icons-material";
import { Container, Grid, MenuItem } from "@mui/material";
import { styled } from "@mui/styles";
import navbarMenuLinks from "navigation/links/navbarMenuLinks";
import Category from "components/categories/Category";
import CategoryMenu from "components/categories/CategoryMenu";
import { CustomLink } from "components/styled-components/CustomLink";
import FlexBox from "components/styled-components/FlexBox";
import GlamourButton from "components/styled-components/GlamourButton";
import GlamourCard from "components/styled-components/GlamourCard";
import { Paragraph } from "components/Typography";

const navLinkStyle = {
  cursor: "pointer",
  marginRight: "2rem",
  transition: "color 150ms ease-in-out",
  "&:hover": {
    color: "primary.main",
  },
  "&:last-child": {
    marginRight: "0",
  },
};

// Styled Components
const StyledNavLink = styled(CustomLink)(() => ({ ...navLinkStyle }));

const NavBarWrapper = styled(GlamourCard)(({ theme }) => ({
  display: "block",
  position: "relative",
  height: "50px",
  borderRadius: "0px",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const InnerContainer = styled(Container)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "100%",
}));

const CategoryMenuButton = styled(GlamourButton)(({ theme }) => ({
  width: "278px",
  height: "40px",
  px: "1rem",
  backgroundColor: theme.palette.grey[100],
}));

const Navbar = ({ navListOpen, hideCategories }) => {
  // Menu Links
  const renderNestedNav = (list) => {
    return list.map((nav) => (
      <StyledNavLink path={nav.url} key={nav.title}>
        <MenuItem>{nav.title}</MenuItem>
      </StyledNavLink>
    ));
  };

  return (
    <NavBarWrapper elevation={2} hoverEffect={false}>
      {!hideCategories ? (
        <InnerContainer>
          <Grid container>
            <Grid item md={4}>
              <CategoryMenu open={navListOpen}>
                <CategoryMenuButton variant="text">
                  <Category fontSize="small" />
                  <Paragraph
                    fontWeight="600"
                    textAlign="left"
                    flex="1 1 0"
                    ml={1.25}
                    color="grey.600"
                  >
                    Categories
                  </Paragraph>
                  <ChevronRight className="dropdown-icon" fontSize="small" />
                </CategoryMenuButton>
              </CategoryMenu>
            </Grid>
            <Grid item md={8}>
              <FlexBox>{renderNestedNav(navbarMenuLinks)}</FlexBox>
            </Grid>
          </Grid>
        </InnerContainer>
      ) : (
        <InnerContainer sx={{ justifyContent: "flex-end" }}>
          <FlexBox>{renderNestedNav(navbarMenuLinks)}</FlexBox>
        </InnerContainer>
      )}
    </NavBarWrapper>
  );
};

export default Navbar;
