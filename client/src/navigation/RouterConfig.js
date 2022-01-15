import { Suspense, lazy as Lazy } from "react";
import { Route, Switch } from "react-router";
import Loading from "./Loading";
import * as url from "./CONSTANTS";

// Application Layout
const AppLayout = Lazy(() => import("navigation/layouts/AppLayout"));
const AdminLayout = Lazy(() => import("navigation/layouts/AdminLayout"));
const AdminRoutes = Lazy(() => import("./auth/AdminRoutes"));
const PrivateRoutes = Lazy(() => import("./auth/PrivateRoutes"));
const CustomerLayout = Lazy(() => import("./layouts/CustomerLayout"));

// Application Auth
const UserAuthPage = Lazy(() => import("pages/UserAuthPage"));
const AdminDashboard = Lazy(() => import("pages/admin-pages/AdminDashboard"));

// Pages
const Homepage = Lazy(() => import("pages/Homepage"));
const ProductDetailsPage = Lazy(() => import("pages/ProductDetailsPage"));
const AdminAddProducts = Lazy(() =>
  import("pages/admin-pages/products/AdminAddProducts")
);
const AdminProductsList = Lazy(() =>
  import("pages/admin-pages/products/AdminProductsList")
);
const AdminEditProducts = Lazy(() =>
  import("pages/admin-pages/products/AdminEditProducts")
);
const AdminCategoriesList = Lazy(() =>
  import("pages/admin-pages/categories/AdminCategoriesList")
);
const AdminAddCategory = Lazy(() =>
  import("pages/admin-pages/categories/AdminAddCategory")
);
const AdminEditCategory = Lazy(() =>
  import("pages/admin-pages/categories/AdminEditCategory")
);
const MyProfile = Lazy(() => import("pages/user-pages/MyProfile"));
const EditMyProfile = Lazy(() => import("pages/user-pages/EditMyProfile"));
const MyOrders = Lazy(() => import("pages/user-pages/MyOrders"));
const NotFoundPage = Lazy(() => import("./NotFoundPage"));
const Cart = Lazy(() => import("pages/Cart"));
const CheckoutPage = Lazy(() => import("pages/CheckoutPage"));
const OrderDetailsPage = Lazy(() => import("pages/OrderDetailsPage"));
const PaymentPage = Lazy(() => import("pages/user-pages/PaymentPage"));

const RouterConfig = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        {/* Public Routes */}
        <Route
          exact
          path={url.HOME}
          render={(props) => (
            <AppLayout>
              <Homepage {...props} />
            </AppLayout>
          )}
        />
        <Route
          exact
          path={url.LOGIN}
          render={(props) => (
            <AppLayout>
              <UserAuthPage {...props} />
            </AppLayout>
          )}
        />
        <Route
          exact
          path={url.REGISTER}
          render={(props) => (
            <AppLayout>
              <UserAuthPage {...props} />
            </AppLayout>
          )}
        />
        <Route
          exact
          path={url.PRODUCT_DETAILS}
          render={(props) => (
            <AppLayout>
              <ProductDetailsPage {...props} />
            </AppLayout>
          )}
        />
        <Route
          path={url.CART}
          render={(props) => (
            <AppLayout>
              <Cart {...props} />
            </AppLayout>
          )}
        />

        {/* Private Routes */}
        <Route
          exact
          path={url.PROFILE}
          render={(props) => (
            <PrivateRoutes>
              <AppLayout>
                <CustomerLayout>
                  <MyProfile {...props} />
                </CustomerLayout>
              </AppLayout>
            </PrivateRoutes>
          )}
        />
        <Route
          exact
          path={url.EDIT_PROFILE}
          render={(props) => (
            <PrivateRoutes>
              <AppLayout>
                <CustomerLayout>
                  <EditMyProfile {...props} />
                </CustomerLayout>
              </AppLayout>
            </PrivateRoutes>
          )}
        />
        <Route
          path={url.CHECKOUT}
          render={(props) => (
            <PrivateRoutes>
              <AppLayout>
                <CheckoutPage {...props} />
              </AppLayout>
            </PrivateRoutes>
          )}
        />
        <Route
          path={url.PAYMENT}
          render={(props) => (
            <PrivateRoutes>
              <AppLayout>
                <PaymentPage {...props} />
              </AppLayout>
            </PrivateRoutes>
          )}
        />
        <Route
          exact
          path={url.ORDERS}
          render={(props) => (
            <PrivateRoutes>
              <AppLayout>
                <CustomerLayout>
                  <MyOrders {...props} />
                </CustomerLayout>
              </AppLayout>
            </PrivateRoutes>
          )}
        />
        <Route
          exact
          path={url.ORDER_DETAILS}
          render={(props) => (
            <PrivateRoutes>
              <AppLayout>
                <CustomerLayout>
                  <OrderDetailsPage {...props} />
                </CustomerLayout>
              </AppLayout>
            </PrivateRoutes>
          )}
        />

        {/* Admin Routes */}
        <Route
          exact
          path={url.ADMIN}
          render={(props) => (
            <AdminRoutes>
              <AppLayout>
                <AdminLayout>
                  <AdminDashboard {...props} />
                </AdminLayout>
              </AppLayout>
            </AdminRoutes>
          )}
        />
        <Route
          exact
          path={url.ADMIN_PRODUCTS}
          render={(props) => (
            <AdminRoutes>
              <AppLayout>
                <AdminLayout>
                  <AdminProductsList {...props} />
                </AdminLayout>
              </AppLayout>
            </AdminRoutes>
          )}
        />
        <Route
          exact
          path={url.ADD_PRODUCT}
          render={(props) => (
            <AdminRoutes>
              <AppLayout>
                <AdminLayout>
                  <AdminAddProducts {...props} />
                </AdminLayout>
              </AppLayout>
            </AdminRoutes>
          )}
        />
        <Route
          exact
          path={url.EDIT_PRODUCT}
          render={(props) => (
            <AdminRoutes>
              <AppLayout>
                <AdminLayout>
                  <AdminEditProducts {...props} />
                </AdminLayout>
              </AppLayout>
            </AdminRoutes>
          )}
        />
        <Route
          exact
          path={url.CATEGORIES}
          render={(props) => (
            <AdminRoutes>
              <AppLayout>
                <AdminLayout>
                  <AdminCategoriesList {...props} />
                </AdminLayout>
              </AppLayout>
            </AdminRoutes>
          )}
        />
        <Route
          exact
          path={url.ADD_CATEGORY}
          render={(props) => (
            <AdminRoutes>
              <AppLayout>
                <AdminLayout>
                  <AdminAddCategory {...props} />
                </AdminLayout>
              </AppLayout>
            </AdminRoutes>
          )}
        />
        <Route
          exact
          path={url.EDIT_CATEGORY}
          render={(props) => (
            <AdminRoutes>
              <AppLayout>
                <AdminLayout>
                  <AdminEditCategory {...props} />
                </AdminLayout>
              </AppLayout>
            </AdminRoutes>
          )}
        />

        {/* Catch all route. Always at bottom */}
        <Route
          path="*"
          render={(props) => (
            <AppLayout>
              <NotFoundPage {...props} />
            </AppLayout>
          )}
        />
      </Switch>
    </Suspense>
  );
};

export default RouterConfig;
