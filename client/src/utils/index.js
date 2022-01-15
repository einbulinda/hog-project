import axios from "axios";

export const checkUserIsAdmin = (currentUser) => {
  if (!currentUser || !Array.isArray(currentUser.userRoles)) return false;
  const { userRoles } = currentUser;

  if (userRoles.includes("admin")) return true;

  return false;
};

// Create baseURL - not to type absolute URL all the time
export const apiInstance = axios.create({
  baseURL: "http://localhost:5001/houseofglamour-ke/us-central1/api",
});

export const deviceSize = {
  xs: 425,
  sm: 768,
  md: 1024,
  lg: 1440,
};

export const layoutConstant = {
  topbarHeight: 40,
  grocerySidenavWidth: 280,
  containerWidth: 1200,
  mobileNavHeight: 64,
  headerHeight: 80,
  mobileHeaderHeight: 64,
};
