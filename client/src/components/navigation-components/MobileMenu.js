import React from "react";

const MobileMenu = () => {
  const mobileMenuId = "primary-search-account-menu-mobile";
  return (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show wishlist items" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <FavoriteIcon />
          </Badge>
        </IconButton>
        <p>Wishlist Items</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show cart items" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <ShoppingBagIcon />
          </Badge>
        </IconButton>
        <p>In Cart</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircleIcon />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
};

export default MobileMenu;
