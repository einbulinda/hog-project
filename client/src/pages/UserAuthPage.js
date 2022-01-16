import { Grid } from "@mui/material";
import {
  Button,
  Card,
  Container,
  Divider,
  FormHelperText,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import * as url from "navigation/CONSTANTS";
import GoogleLogo from "assets/GoogleLogo";
import { makeStyles } from "@mui/styles";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import React, { useCallback, useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, loginUser } from "redux/actions/userActions";
import { H3, H6, Small } from "components/Typography";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box } from "@mui/system";
import FlexBox from "components/styled-components/FlexBox";
import { CustomLink } from "components/styled-components/CustomLink";
import { useLocation, useNavigate } from "react-router";

const mapState = (state) => ({
  currentUser: state.user.currentUser,
});

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));

const UserAuthPage = () => {
  const navigate = useNavigate();
  const currentURL = useLocation();
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [passwordVisibility2, setPasswordVisibility2] = useState(false);
  const dispatch = useDispatch();
  const [login, setLogin] = useState(true);
  const classes = useStyles();
  const { currentUser } = useSelector(mapState);

  const togglePasswordVisibility = useCallback(() => {
    setPasswordVisibility((visible) => !visible);
  }, []);

  const toggleConfirmPassword = useCallback(() => {
    setPasswordVisibility2((visible) => !visible);
  }, []);

  // Google Signin
  const handleGoogleSignin = () => {
    dispatch();
  };

  const handleSubmit = (credentials, { resetForm }) => {
    const { firstName, lastName, email, password } = credentials;

    if (login) {
      dispatch(loginUser({ email, password }));
    } else {
      dispatch(registerUser({ firstName, lastName, email, password }));
    }
    resetForm({});
  };

  useEffect(() => {
    if (currentUser) navigate(url.HOME);
  }, [currentUser, navigate]);

  useEffect(() => {
    if (currentURL === "/login") setLogin(true);
    if (currentURL === "/register") setLogin(false);
  }, [currentURL]);

  const signInSchema = Yup.object().shape({
    login: Yup.boolean(),
    firstName: Yup.string().when("login", {
      is: false,
      then: Yup.string()
        .required("First name is required")
        .min(2, "Should be more than one character"),
      otherwise: Yup.string(),
    }),
    lastName: Yup.string().when("login", {
      is: false,
      then: Yup.string()
        .required("Last name is required")
        .min(2, "Should be more than one character"),
      otherwise: Yup.string(),
    }),
    email: Yup.string()
      .email("Please enter a valid email.")
      .max(255)
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required.")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
    confirmPassword: Yup.string().when("login", {
      is: false,
      then: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
      ),
      otherwise: Yup.string(),
    }),
  });

  return (
    <Container maxWidth="sm" sx={{ justifyContent: "center", p: 1.25 }}>
      <Card elevation={3} className={classes.root}>
        <Container>
          <Formik
            initialValues={initialValues}
            validationSchema={signInSchema}
            onSubmit={handleSubmit}
          >
            <Form className="content">
              <H3 textAlign="center" m={1}>
                Welcome to House of Glamour
              </H3>
              <Small
                fontSize="12px"
                fontWeight="600"
                color="grey.800"
                textAlign="center"
                mb={3.5}
                display="block"
              >
                {login ? "Email & Password" : "Create an Account"}
              </Small>
              <Grid container spacing={2}>
                {!login && (
                  <Fragment>
                    <Grid item xs={12} sm={6}>
                      <Field
                        as={TextField}
                        name="firstName"
                        fullWidth
                        label="First Name"
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
                    <Grid item xs={12} sm={6}>
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
                    </Grid>{" "}
                  </Fragment>
                )}
                <Grid item xs={12}>
                  <Field
                    margin="normal"
                    fullWidth
                    label="Email Address"
                    name="email"
                    autoFocus
                    as={TextField}
                  />
                  <ErrorMessage
                    component={FormHelperText}
                    fullWidth
                    error={true}
                    size="large"
                    sx={{ ml: 1 }}
                    name="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    margin="normal"
                    fullWidth
                    name="password"
                    label="Password"
                    as={TextField}
                    type={passwordVisibility ? "text" : "password"}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={togglePasswordVisibility}
                            edge="end"
                          >
                            {passwordVisibility ? (
                              <Visibility className="" />
                            ) : (
                              <VisibilityOff />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <ErrorMessage
                    component={FormHelperText}
                    fullWidth
                    error={true}
                    size="large"
                    sx={{ ml: 1 }}
                    type="password"
                    name="password"
                  />
                </Grid>
                {!login && (
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      fullWidth
                      name="confirmPassword"
                      label="Confirm Password"
                      type={passwordVisibility2 ? "text" : "password"}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={toggleConfirmPassword}
                              edge="end"
                            >
                              {passwordVisibility2 ? (
                                <Visibility className="" />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                    <ErrorMessage
                      component={FormHelperText}
                      fullWidth
                      error={true}
                      size="large"
                      sx={{ ml: 1 }}
                      name="confirmPassword"
                    />
                  </Grid>
                )}
              </Grid>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 2, mb: 4, height: 44 }}
              >
                {login ? "Login" : "Register"}
              </Button>
              {login && (
                <Fragment>
                  <Box mb={2}>
                    <Box width="200px" mx="auto">
                      <Divider />
                    </Box>
                    <FlexBox justifyContent="center" mt={-1.625}>
                      <Box color="grey.600" bgColor="background.paper" px={2}>
                        OR
                      </Box>
                    </FlexBox>
                  </Box>
                  {/* Google Signin */}
                  <Button
                    size="medium"
                    fullWidth
                    onClick={handleGoogleSignin}
                    variant="contained"
                    color="secondary"
                    sx={{ my: 1 }}
                  >
                    <Typography
                      component="img"
                      src={GoogleLogo}
                      alt="Google Sign In"
                    />
                    <Box fontSize="12px" ml={1}>
                      Continue with Google
                    </Box>
                  </Button>
                </Fragment>
              )}
            </Form>
          </Formik>
          <Grid
            container
            spacing={4}
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid item xs={5}>
              {login ? (
                <CustomLink path={url.REGISTER}>
                  <H6 sx={{ ml: 0 }}>Create an Account</H6>
                </CustomLink>
              ) : (
                <CustomLink path={url.LOGIN}>
                  <H6 sx={{ ml: 0 }}>Login </H6>
                </CustomLink>
              )}
            </Grid>
            <Grid item xs={5}>
              <CustomLink path={url.RESET_PASSWORD}>
                <H6 sx={{ textAlign: "right" }}>Forgot Password</H6>
              </CustomLink>
            </Grid>
          </Grid>
        </Container>
      </Card>
    </Container>
  );
};

export default UserAuthPage;

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
