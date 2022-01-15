const { styled } = require("@mui/styles");
const { Box } = require("@mui/system");

const HoverBox = styled(Box)({
  position: "relative",

  "&:after": {
    position: "absolute",
    content: '" "',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    transition: "all 250ms ease-in-out",
  },

  "&:hover:after": {
    background: "rgba(0, 0, 0, 0.3)",
    borderRadius: "8px",
  },
});

export default HoverBox;
