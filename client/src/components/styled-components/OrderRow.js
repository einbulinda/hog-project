import { CustomLink } from "components/styled-components/CustomLink";
import TableRow from "components/styled-components/TableRow";
import { H5 } from "components/Typography";
import Box from "@mui/system/Box";
import Chip from "@mui/material/Chip";
import { Typography } from "@mui/material";
import NumberFormat from "react-number-format";
import IconButton from "@mui/material/IconButton";
import EastIcon from "@mui/icons-material/East";

const OrderRow = ({ item }) => {
  const { _id, status, createdAt, orderTotal } = item;

  // Format Chip color based on status
  const getColor = (status) => {
    switch (status) {
      case "Pending":
        return "secondary";
      case "Processing":
        return "secondary";
      case "Delivered":
        return "success";
      case "Cancelled":
        return "error";
      default:
        return "";
    }
  };

  return (
    <CustomLink path={`/orders/${_id}`}>
      <TableRow sx={{ my: "1rem", padding: "6px 18px" }}>
        <H5 m={0.75} textAlign="left">
          {_id}
        </H5>
        <Box m={0.75}>
          <Chip
            size="small"
            label={status}
            // Bug identified 24/10/2021 - color of chip not formatted as expected.
            sx={{
              p: "0.25rem 0.5rem",
              fontSize: 12,
              color: !!getColor(status) ? `${getColor(status)}.900` : "inherit",
              backgroundColor: !!getColor(status)
                ? `${getColor(status)}.100`
                : "none",
            }}
          />
        </Box>
        <Typography className="pre" m={0.75} textAlign="left">
          {new Date(createdAt).toDateString()}
        </Typography>
        <Typography m={0.75} textAlign="left">
          <NumberFormat
            value={orderTotal}
            displayType="text"
            thousandSeparator={true}
            prefix={"Ksh. "}
          />
        </Typography>
        <Typography
          textAlign="center"
          color="grey.600"
          sx={{
            flex: "0 0 0 !important",
            display: { xs: "none", md: "block" },
          }}
        >
          <IconButton>
            <EastIcon fontSize="small" color="inherit" />
          </IconButton>
        </Typography>
      </TableRow>
    </CustomLink>
  );
};

export default OrderRow;
