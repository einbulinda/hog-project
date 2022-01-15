import React, { Fragment } from "react";
import TableRow from "components/TableRow";
import FlexBox from "components/FlexBox";
import Typography from "@mui/material/Typography";
import { CustomLink } from "components/CustomLink";
import Pagination from "@mui/material/Pagination";
import Avatar from "@mui/material/Avatar";
import NumberFormat from "react-number-format";
import IconButton from "@mui/material/IconButton";
import EastIcon from "@mui/icons-material/East";

const CustomTable = ({ items }) => {
  return (
    <Fragment>
      <TableRow
        sx={{
          display: { xs: "none", md: "flex" },
          padding: "0px 18px",
          mb: "-0.125rem",
          bgcolor: "transparent",
        }}
        elevation={0}
      >
        <FlexBox my="0px" mx={0.75} flex="2 2 220px !important">
          <Typography
            variant="subtitle1"
            ml={7}
            color="grey.600"
            textAlign="left"
          >
            Name
          </Typography>
        </FlexBox>
        <Typography
          variant="subtitle1"
          color="grey.600"
          my="0px"
          mx={0.75}
          textAlign="left"
        >
          Stock
        </Typography>
        <Typography
          variant="subtitle1"
          color="grey.600"
          my="0px"
          mx={0.75}
          textAlign="left"
        >
          Regular price
        </Typography>
        <Typography
          variant="subtitle1"
          color="grey.600"
          my="0px"
          mx={0.75}
          textAlign="left"
        >
          Sale Price
        </Typography>
        <Typography
          variant="subtitle1"
          flex="0 0 0 !important"
          color="grey.600"
          px={2.75}
          my="0px"
        ></Typography>
      </TableRow>
      {items.map((product, index) => {
        const {
          documentID,
          productName,
          retailPrice,
          salePrice,
          stockQuantity,
          imageUrl,
        } = product;

        return (
          <CustomLink path={`/admin/edit-product/${documentID}`} key={index}>
            <TableRow sx={{ padding: "6px 18px", my: "-0.3rem" }}>
              <FlexBox alignItems="center" m={0.75} flex="2 2 220px !important">
                <Avatar src={imageUrl} sx={{ height: 36, width: 36 }} />
                <Typography textAlign="left" ml={2.5}>
                  {productName}
                </Typography>
              </FlexBox>
              <Typography
                m={0.75}
                textAlign="left"
                fontWeight="600"
                color={stockQuantity < 6 ? "error.main" : "inherit"}
              >
                {stockQuantity.toString().padStart(2, "0")}
              </Typography>
              <Typography m={0.75} textAlign="left" fontWeight="400">
                <NumberFormat
                  value={retailPrice}
                  displayType="text"
                  thousandSeparator={true}
                  prefix={"Ksh. "}
                />
              </Typography>
              <Typography m={0.75} textAlign="left" fontWeight="400">
                <NumberFormat
                  value={salePrice}
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
      })}
      <FlexBox justifyContent="center" mt={5}>
        <Pagination count={items.length / 5} shape="rounded" />
      </FlexBox>
    </Fragment>
  );
};

export default CustomTable;
