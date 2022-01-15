import DashboardHeader from "components/navigation-components/DashboardHeader";
import { Fragment, useEffect } from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import TableRow from "components/styled-components/TableRow";
import { H5 } from "components/Typography";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getUserOrders } from "redux/actions/orderActions";
import OrderRow from "components/styled-components/OrderRow";
import FlexBox from "components/styled-components/FlexBox";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const mapState = ({ user, ordersData }) => ({
  currentUser: user.currentUser,
  orderHistory: ordersData.orderHistory,
});

const MyOrders = () => {
  const dispatch = useDispatch();
  const { currentUser, orderHistory } = useSelector(mapState);
  const numberOfOrders = Array.isArray(orderHistory) && orderHistory.length;

  useEffect(() => {
    dispatch(getUserOrders(currentUser._id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <DashboardHeader title="My Orders" icon={ShoppingBagIcon} />
      <TableRow
        sx={{
          display: { xs: "none", md: "flex" },
          padding: "0px 18px",
          background: "none",
        }}
      >
        <H5 color="grey.600" my="0px" mx={0.75} textAlign="left">
          Order #
        </H5>
        <H5 color="grey.600" my="0px" mx={0.75} textAlign="left">
          Status
        </H5>
        <H5 color="grey.600" my="0px" mx={0.75} textAlign="left">
          Date purchased
        </H5>
        <H5 color="grey.600" my="0px" mx={0.75} textAlign="left">
          Total
        </H5>
        <H5
          flex="0 0 0 !important"
          color="grey.600"
          px={2.75}
          py={0.5}
          my={0}
        ></H5>
      </TableRow>

      {numberOfOrders > 0 &&
        orderHistory.map((item, index) => <OrderRow item={item} key={index} />)}

      {/* Pagination displayed for orders more than 10 */}
      {numberOfOrders > 10 && (
        <FlexBox justifyContent="center" mt={5}>
          <Stack spacing={2}>
            <Pagination
              count={5}
              variant="outlined"
              shape="rounded"
              color="primary"
              showFirstButton
              showLastButton
              onChange={(data) => {
                // Complete Pagination
                console.log(data);
              }}
            />
          </Stack>
        </FlexBox>
      )}
    </Fragment>
  );
};

export default MyOrders;
