import Grid from "@mui/material/Grid";
import regions from "assets/regions.json";
import StyledCard from "components/styled-components/StyledCard";
import CardTitle from "components/styled-components/CardTitle";
import FormField from "components/styled-components/FormField";
import { Button, MenuItem, Typography } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { addressSchema } from "validations";
import { Form, Formik } from "formik";
import DashboardHeader from "components/navigation-components/DashboardHeader";
import { useDispatch, useSelector } from "react-redux";
import { getAddressData, saveAddressDetails } from "redux/actions/userActions";
import DoneAllIcon from "@mui/icons-material/DoneAll";

const mapState = (state) => ({
  currentUser: state.user.currentUser,
  address: state.user.address,
});

const CheckoutForm = () => {
  const { currentUser, address } = useSelector(mapState);
  const dispatch = useDispatch();
  const [load, setLoad] = useState(false);
  const [countySelected, setCountySelected] = useState("");
  const [townSelected, setTownSelected] = useState("");

  const handleCounty = (e) => {
    setCountySelected(e.target.value);
  };

  const pickTowns = regions.filter((x) => x.county === countySelected);
  const townsArray = countySelected ? pickTowns[0].towns : ["Select County"];
  const handleTown = (e) => {
    setTownSelected(e.target.value);
  };

  const handleAddress = (addressData) => {
    addressData.county = countySelected;
    addressData.town = townSelected;
    addressData.uid = currentUser._id;
    setLoad(true);
    dispatch(saveAddressDetails(addressData));
  };

  useEffect(() => {
    dispatch(getAddressData(currentUser._id));
  }, [currentUser._id, dispatch]);

  return (
    <Fragment>
      <DashboardHeader
        title={
          <Typography variant="body1" color="grey.500" fontSize="18px">
            CHECKOUT
          </Typography>
        }
        icon={ShoppingCartCheckoutIcon}
      />
      <StyledCard sx={{ mb: "1rem" }}>
        <CardTitle>
          {" "}
          <DoneAllIcon
            color="success"
            sx={{ fontSize: "1.3rem", marginTop: "0.8rem" }}
          />
          1. Shipping Address
        </CardTitle>
        {!address.length === 0 ? (
          <Grid container spacing={1} sx={{ fontStyle: " italic" }}>
            <Grid item sm={5}>
              <Typography>{`${address[0].firstName} ${address[0].lastName}`}</Typography>
              <Typography>{address[0].phone}</Typography>
              <Typography>{`${address[0].town} - ${address[0].county}`}</Typography>
            </Grid>
            <Grid item sm={5}>
              <Typography sx={{ whiteSpace: "pre-line" }}>
                {address[0].deliveryAddress}
              </Typography>
            </Grid>
          </Grid>
        ) : (
          <Formik
            initialValues={initialValues}
            validationSchema={addressSchema}
            onSubmit={handleAddress}
          >
            <Form>
              <Grid container spacing={6}>
                <Grid item sm={6} xs={12}>
                  <FormField fieldLabel="First Name *" fieldName="firstName" />
                </Grid>
                <Grid item sm={6} xs={12}>
                  <FormField fieldLabel="Last Name *" fieldName="lastName" />
                </Grid>
              </Grid>
              <Grid container spacing={6}>
                <Grid item sm={6} xs={12}>
                  <FormField fieldLabel="Mobile Number *" fieldName="phone" />
                </Grid>
              </Grid>
              <Grid container spacing={6}>
                <Grid item sm={6} xs={12}>
                  <FormField
                    fieldLabel="County Region *"
                    fieldName="county"
                    select
                    value={countySelected}
                    onChange={handleCounty}
                  >
                    {regions.map((region) => {
                      const { code, county } = region;
                      return (
                        <MenuItem value={county} key={code}>
                          {county}
                        </MenuItem>
                      );
                    })}
                  </FormField>
                </Grid>
                <Grid item sm={6} xs={12}>
                  <FormField
                    fieldLabel="Town/Area *"
                    fieldName="town"
                    select
                    value={townSelected}
                    onChange={handleTown}
                  >
                    {townsArray.map((area, index) => (
                      <MenuItem value={area} key={index}>
                        {area}
                      </MenuItem>
                    ))}
                  </FormField>
                </Grid>
              </Grid>
              <Grid item sm={12} xs={12}>
                <FormField
                  fieldLabel="Delivery Address *"
                  fieldName="deliveryAddress"
                  rows={4}
                  multiline
                />
              </Grid>
              <Grid item sm={12} xs={12}>
                <Button
                  variant="contained"
                  color="success"
                  type="submit"
                  disabled={load}
                >
                  {load ? "Saving..." : "Save Address"}
                </Button>
              </Grid>
            </Form>
          </Formik>
        )}
      </StyledCard>
    </Fragment>
  );
};

export default CheckoutForm;

const initialValues = {
  firstName: "",
  lastName: "",
  phone: "",
  county: "",
  town: "",
  deliveryAddress: "",
};
