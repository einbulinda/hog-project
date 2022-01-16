import { CameraEnhance, Person } from "@mui/icons-material";
import DashboardHeader from "components/navigation-components/DashboardHeader";
import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import * as url from "navigation/CONSTANTS";
import { CustomLink } from "components/styled-components/CustomLink";
import { Avatar, Button, FormHelperText, Grid, TextField } from "@mui/material";
import Card1 from "components/styled-components/Card1";
import { storage } from "services/utils";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import FlexBox from "components/styled-components/FlexBox";
import { Box } from "@mui/system";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { profileUpdate } from "redux/actions/userActions";
import { H5, Paragraph } from "components/Typography";
import { useNavigate } from "react-router";
import CustomerDashboardNav from "components/styled-components/CustomerDashboardNav";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const EditMyProfile = () => {
  const { currentUser } = useSelector(mapState);
  const navigate = useNavigate();
  const names = currentUser.name.split(" ", 2);
  const dispatch = useDispatch();
  const [imgUrl, setImgUrl] = useState("");
  const [birthDate, setBirthDate] = useState(new Date());

  const handleBirthDate = (newBirthDate) => {
    setBirthDate(newBirthDate);
  };

  const handleImageUpload = (file) => {
    const profileImg = file[0];
    const profileRef = ref(storage, `users/${profileImg.name}`);

    uploadBytes(profileRef, profileImg).then((snapshot) => {
      getDownloadURL(profileRef)
        .then((url) => setImgUrl(url))
        .catch((error) => {
          switch (error.code) {
            case "storage/object-not-found":
              console.log("No object exists at the desired reference.");
              break;
            case "storage/bucket-not-found":
              console.log("No bucket is configured for Cloud Storage");
              break;
            case "storage/quota-exceeded":
              console.log(
                "Quota on your Cloud Storage bucket has been exceeded."
              );
              break;

            default:
              console.log("An error ocurred");
              break;
          }
        });
    });
  };

  const handleProfileUpdate = ({
    firstName,
    lastName,
    contact,
    email,
    dob,
  }) => {
    const updatedProfile = {
      name: `${firstName} ${lastName}`,
      email: email,
      contact: contact,
      dob: birthDate,
      _id: currentUser._id,
      photo: imgUrl,
    };
    dispatch(profileUpdate(updatedProfile));
    navigate(url.PROFILE);
  };

  // Form Initial Values
  const initialValues = {
    firstName: names[0],
    lastName: names[1],
    email: currentUser.email,
    contact: currentUser.contact || "",
    dob: new Date(currentUser.dob) || new Date(),
  };

  return (
    <Fragment>
      <DashboardHeader
        icon={Person}
        title="Edit Profile"
        button={
          <CustomLink path={url.PROFILE}>
            <Button
              color="primary"
              sx={{ px: "2rem", bgcolor: "primary.light" }}
            >
              Back to Profile
            </Button>
          </CustomLink>
        }
        navigation={<CustomerDashboardNav />}
      />
      <Card1>
        <FlexBox alignItems="flex-end" mb={3}>
          <Avatar
            sx={{ height: 64, width: 64 }}
            src={imgUrl ? imgUrl : currentUser.photo}
          />
          <Box ml={-2.5}>
            <label htmlFor="profile-image">
              <Button
                component="span"
                color="secondary"
                sx={{
                  bgcolor: "grey.300",
                  height: "auto",
                  p: "8px",
                  borderRadius: "50%",
                }}
              >
                <CameraEnhance fontSize="small" />
              </Button>
            </label>
          </Box>
          <Box display="none">
            <input
              onChange={(e) => handleImageUpload(e.target.files)}
              id="profile-image"
              accept="image/*"
              type="file"
            />
          </Box>
          <FlexBox ml={2}>
            <Grid container spacing={0.5}>
              <Grid item md={4} lg={4} sm={12} xs={12}>
                <H5>User ID: </H5>{" "}
              </Grid>
              <Grid item md={8} lg={8} sm={12} xs={12}>
                <Paragraph>{currentUser._id}</Paragraph>
              </Grid>
            </Grid>
          </FlexBox>
        </FlexBox>

        <Formik
          initialValues={initialValues}
          validationSchema={profileSchema}
          onSubmit={handleProfileUpdate}
        >
          <Form>
            <Box mb={4}>
              <Grid container spacing={3}>
                <Grid item md={6} xs={12}>
                  <Field
                    as={TextField}
                    fullWidth
                    label="First Name"
                    name="firstName"
                  />
                  <ErrorMessage
                    component={FormHelperText}
                    fullWidth
                    error={true}
                    size="large"
                    sx={{ ml: 1 }}
                    name="firstName"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <Field
                    as={TextField}
                    fullWidth
                    label="Last Name"
                    name="lastName"
                  />
                  <ErrorMessage
                    component={FormHelperText}
                    fullWidth
                    error={true}
                    size="large"
                    sx={{ ml: 1 }}
                    name="lastName"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <Field as={TextField} fullWidth label="Email" name="email" />
                  <ErrorMessage
                    component={FormHelperText}
                    fullWidth
                    error={true}
                    size="large"
                    sx={{ ml: 1 }}
                    name="email"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <Field
                    as={TextField}
                    fullWidth
                    label="Mobile"
                    name="contact"
                  />
                  <ErrorMessage
                    component={FormHelperText}
                    fullWidth
                    error={true}
                    size="large"
                    sx={{ ml: 1 }}
                    name="contact"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <MobileDatePicker
                      label="Date of Birth"
                      inputFormat="dd/MM/yyyy"
                      value={birthDate}
                      onChange={handleBirthDate}
                      renderInput={(params) => (
                        <Fragment>
                          <Field
                            as={TextField}
                            {...params}
                            fullWidth
                            name="dob"
                          />
                          <ErrorMessage
                            component={FormHelperText}
                            fullWidth
                            error={true}
                            size="large"
                            sx={{ ml: 1 }}
                            name="dob"
                          />
                        </Fragment>
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
              </Grid>
            </Box>
            <Button type="submit" variant="contained" color="primary">
              Update Profile
            </Button>
          </Form>
        </Formik>
      </Card1>
    </Fragment>
  );
};

export default EditMyProfile;

const profileSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("First name is required")
    .min(2, "Should be more than one character"),
  lastName: Yup.string()
    .required("Last name is required")
    .min(2, "Should be more than one character"),
  email: Yup.string()
    .email("Please enter a valid email.")
    .max(255)
    .required("Email is required"),
  contact: Yup.number()
    .required("Phone Number is required")
    .min(10, "Phone number is too short"),
  dob: Yup.date().required("Invalid date"),
});
