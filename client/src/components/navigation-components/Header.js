import Container from "@mui/material/Container";
import { styled } from "@mui/styles";
import Box from "@mui/system/Box";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import React, { useState, Fragment } from "react";
import { layoutConstant } from "utils";
import FlexBox from "components/styled-components/FlexBox";
import MainLogo from "components/icons/MainLogo";
import CategoryMenu from "components/categories/CategoryMenu";
import Category from "components/categories/Category";
import IconButton from "@mui/material/IconButton";
import { KeyboardArrowDown, ShoppingBagOutlined } from "@mui/icons-material";
import SearchBox from "components/SearchBox";
import { Avatar, Badge, Drawer, Menu, MenuItem, Tooltip } from "@mui/material";
import { selectCartItemsCount } from "redux/selectors/cartSelectors";
import { logoutUser } from "redux/actions/userActions";
import { useSelector } from "react-redux";
import { CustomLink } from "components/styled-components/CustomLink";
import * as url from "navigation/CONSTANTS";
import MiniCart from "components/MiniCart";
import UserAvatar from "components/styled-components/StyledBadge";
import { PersonOutline } from "@mui/icons-material";

const mapState = (state) => ({
  currentUser: state.user.currentUser,
  totalCartItems: selectCartItemsCount(state),
});

export const HeaderWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 1,
  height: layoutConstant.headerHeight,
  background: theme.palette.background.paper,
  transition: "height 250ms ease-in-out",

  [theme.breakpoints.down("sm")]: {
    height: layoutConstant.mobileHeaderHeight,
  },
}));

const HogButton = styled(Box)({ minWidth: 0, minHeight: 0 });

const Header = ({ isFixed, className }) => {
  const [sidenavOpen, setSidenavOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const { currentUser, totalCartItems } = useSelector(mapState);
  const open = Boolean(anchorEl);

  const toggleSidenav = () => setSidenavOpen(!sidenavOpen);

  const cartHandle = (
    <Badge badgeContent={totalCartItems} color="primary">
      <Box
        component={IconButton}
        ml={2.5}
        bgcolor="grey.200"
        p={1.25}
        onClick={toggleSidenav}
      >
        <ShoppingBagOutlined />
      </Box>
    </Badge>
  );

  return (
    <HeaderWrapper className={clsx(className)}>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <FlexBox
          alignItems="center"
          mr={2}
          minWidth="170px"
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <CustomLink path={url.HOME}>
            <MainLogo />
          </CustomLink>

          {isFixed && (
            <CategoryMenu color="grey.600" alignItems="center" ml={3}>
              <FlexBox>
                <HogButton color="inherit" sx={{ padding: "0.8rem" }} mt={8}>
                  <Category fontSize="medium" color="inherit" />
                  <KeyboardArrowDown fontSize="medium" color="inherit" />
                </HogButton>
              </FlexBox>
            </CategoryMenu>
          )}
        </FlexBox>
        <FlexBox justifyContent="center" flex="1 1 0">
          <SearchBox /> {/*The Search Component pending implementation  */}
        </FlexBox>

        <FlexBox
          alignItems="center"
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          {cartHandle}

          {currentUser ? (
            <Fragment>
              <Box
                component={IconButton}
                ml={2}
                p={1.25}
                bgcolor="grey.200"
                id="profile-button"
                aria-controls="profile-menu"
                aria-haspopup="true"
                onClick={(e) => setAnchorEl(e.currentTarget)}
              >
                {currentUser.photo ? (
                  <Avatar
                    sx={{ height: 40, width: 40 }}
                    src={currentUser.photo}
                  />
                ) : (
                  <UserAvatar name={currentUser.name} />
                )}
              </Box>

              <Menu
                id="profile-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={() => setAnchorEl(null)}
                MenuListProps={{
                  "aria-labelledby": "profile-button",
                }}
              >
                <MenuItem>
                  <CustomLink path={url.PROFILE}>Profile</CustomLink>
                </MenuItem>
                {currentUser.isAdmin && (
                  <MenuItem>
                    <CustomLink path={url.ADMIN}>Admin</CustomLink>
                  </MenuItem>
                )}
                <MenuItem>
                  <CustomLink path={url.ORDERS}>Orders</CustomLink>
                </MenuItem>
                <MenuItem>
                  <CustomLink path={url.WISHLIST}>Wishlist</CustomLink>
                </MenuItem>
                <MenuItem onClick={() => dispatch(logoutUser())}>
                  Logout
                </MenuItem>
              </Menu>
            </Fragment>
          ) : (
            <MenuItem sx={{ ml: 2.5, bgcolor: "grey.200", p: 1.25 }}>
              <CustomLink path={url.LOGIN}>
                <Tooltip title="Login" placement="bottom">
                  <PersonOutline />
                </Tooltip>
              </CustomLink>
            </MenuItem>
          )}
        </FlexBox>

        <Drawer open={sidenavOpen} anchor="right" onClose={toggleSidenav}>
          <MiniCart />
        </Drawer>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
