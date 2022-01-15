const {
  styled,
  compose,
  spacing,
  positions,
  typography,
  sizing,
  border,
  bgcolor,
} = require("@mui/system");

const GlamourIconButton = styled(
  compose(spacing, positions, typography, sizing, border, bgcolor)
);

export default GlamourIconButton;
