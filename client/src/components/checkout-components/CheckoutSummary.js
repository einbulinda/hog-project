import { Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardTitle from "components/styled-components/CardTitle";
import FlexBox from "components/styled-components/FlexBox";
import StyledCard from "components/styled-components/StyledCard";
import NumberFormat from "react-number-format";

const CheckoutSummary = ({ orderTotal, subTotal, discount }) => {
  const total = orderTotal;
  return (
    <StyledCard sx={{ mb: "0.7rem" }}>
      <CardTitle>Order Summary</CardTitle>
      <FlexBox justifyContent="space-between" alignItems="center" mb={1}>
        <Typography variant="body1" color="grey.600">
          Subtotal:{" "}
        </Typography>
        <Typography variant="h6" color="grey.600">
          <NumberFormat
            value={subTotal}
            displayType="text"
            thousandSeparator={true}
            prefix={"Ksh. "}
          />
        </Typography>
      </FlexBox>
      <FlexBox justifyContent="space-between" alignItems="center" mb={2}>
        <Typography color="grey.600">Discount:</Typography>
        <FlexBox alignItems="flex-end">
          <Typography fontSize="18px" fontWeight="600" lineHeight="1">
            <NumberFormat
              value={discount}
              displayType="text"
              thousandSeparator={true}
              prefix={"Ksh. "}
            />
          </Typography>
        </FlexBox>
      </FlexBox>

      <Divider sx={{ mb: "1rem" }} />

      <Typography
        fontSize="25px"
        fontWeight="600"
        lineHeight="1"
        textAlign="right"
        mb={1}
      >
        <NumberFormat
          value={total}
          displayType="text"
          thousandSeparator={true}
          prefix={"Ksh. "}
        />
      </Typography>
    </StyledCard>
  );
};

export default CheckoutSummary;
