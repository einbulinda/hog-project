import { styled } from "@mui/styles";
import Box from "@mui/system/Box";
import { CustomLink } from "components/styled-components/CustomLink";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useSelector } from "react-redux";
import { selectCartItemsCount } from "redux/selectors/cartSelectors";
import { layoutConstant } from "utils";
import { mobileMenuLinks } from "navigation/links/mobileMenuLinks";
import Badge from "@mui/material/Badge";
import Typography from "@mui/material/Typography";
import { LOGIN, PROFILE } from "navigation/CONSTANTS";
import { Avatar } from "@mui/material";
import UserAvatar from "components/styled-components/StyledBadge";
import { PersonOutline } from "@mui/icons-material";

const mapState = (state) => ({
  currentUser: state.user.currentUser,
  totalCartItems: selectCartItemsCount(state),
});

// styled components
const Wrapper = styled(Box)(({ theme }) => ({
  display: "none",
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  height: layoutConstant.mobileNavHeight,
  justifyContent: "space-around",
  backgroundColor: theme.palette.background.paper,
  boxShadow: "0px 1px 4px 3px rgba(0, 0, 0, 0.1)",
  zIndex: 999,

  "@media only screen and (max-width: 900px)": {
    display: "flex",
    width: "100vw",
  },
}));

const StyledCustomLink = styled(CustomLink)(() => ({
  flex: "1 1 0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "2rem",
}));

// const useStyles = makeStyles({
//   profile: {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     fontSize: "2rem",
//     textDecoration: "none",
//     marginRight: "0.8rem",
//     cursor: "pointer",
//     "&:hover": {
//       fontWeight: 500,
//       color: "#d32f2f",
//     },
//   },
//   sideNavLink: {
//     "&:hover": {
//       textTransform: "uppercase",
//       transition: "text-transform 3s ease-in-out",
//     },
//   },
// });

const MobileNavBar = () => {
  const theme = useTheme();
  // const classes = useStyles();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const { currentUser, totalCartItems } = useSelector(mapState);

  const iconStyle = {
    marginBottom: "3px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return isMobile ? (
    <Wrapper>
      {mobileMenuLinks.map((item) => (
        <StyledCustomLink path={item.path} key={item.title}>
          {item.title === "Cart" ? (
            <Badge badgeContent={totalCartItems} color="primary">
              <item.icon fontSize="medium" sx={iconStyle} />
            </Badge>
          ) : (
            <item.icon sx={iconStyle} fontSize="medium" />
          )}
          <Typography variant="subtitle1">{item.title}</Typography>
        </StyledCustomLink>
      ))}
      {currentUser ? (
        <StyledCustomLink path={PROFILE}>
          {currentUser.photo ? (
            <Avatar sx={{ height: 30, width: 30 }} src={currentUser.photo} />
          ) : (
            <UserAvatar name={currentUser.name} />
          )}
          <Typography variant="subtitle1">Profile</Typography>
        </StyledCustomLink>
      ) : (
        <StyledCustomLink path={LOGIN}>
          <PersonOutline sx={iconStyle} fontSize="medium" />
          <Typography variant="subtitle1">Login</Typography>
        </StyledCustomLink>
      )}
    </Wrapper>
  ) : null;
};

export default MobileNavBar;
