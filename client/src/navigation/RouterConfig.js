import { Suspense, lazy as Lazy } from "react";
import { Route, Routes } from "react-router";
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
      <Routes>
        {/* Public Routes */}
        <Route
          path={url.HOME}
          element={
            <AppLayout>
              <Homepage />
            </AppLayout>
          }
        />
        <Route
          path={url.LOGIN}
          element={
            <AppLayout>
              <UserAuthPage />
            </AppLayout>
          }
        />
        <Route
          path={url.REGISTER}
          element={
            <AppLayout>
              <UserAuthPage />
            </AppLayout>
          }
        />
        <Route
          path={url.PRODUCT_DETAILS}
          element={
            <AppLayout>
              <ProductDetailsPage />
            </AppLayout>
          }
        />
        <Route
          path={url.CART}
          element={
            <AppLayout>
              <Cart />
            </AppLayout>
          }
        />

        {/* Private Routes */}
        <Route
          path={url.PROFILE}
          element={
            <PrivateRoutes>
              <AppLayout>
                <CustomerLayout>
                  <MyProfile />
                </CustomerLayout>
              </AppLayout>
            </PrivateRoutes>
          }
        />
        <Route
          path={url.EDIT_PROFILE}
          element={
            <PrivateRoutes>
              <AppLayout>
                <CustomerLayout>
                  <EditMyProfile />
                </CustomerLayout>
              </AppLayout>
            </PrivateRoutes>
          }
        />
        <Route
          path={url.CHECKOUT}
          element={
            <PrivateRoutes>
              <AppLayout>
                <CheckoutPage />
              </AppLayout>
            </PrivateRoutes>
          }
        />
        <Route
          path={url.PAYMENT}
          element={
            <PrivateRoutes>
              <AppLayout>
                <PaymentPage />
              </AppLayout>
            </PrivateRoutes>
          }
        />
        <Route
          path={url.ORDERS}
          element={
            <PrivateRoutes>
              <AppLayout>
                <CustomerLayout>
                  <MyOrders />
                </CustomerLayout>
              </AppLayout>
            </PrivateRoutes>
          }
        />
        <Route
          path={url.ORDER_DETAILS}
          element={
            <PrivateRoutes>
              <AppLayout>
                <CustomerLayout>
                  <OrderDetailsPage />
                </CustomerLayout>
              </AppLayout>
            </PrivateRoutes>
          }
        />

        {/* Admin Routes */}
        <Route
          path={url.ADMIN}
          element={
            <AdminRoutes>
              <AppLayout>
                <AdminLayout>
                  <AdminDashboard />
                </AdminLayout>
              </AppLayout>
            </AdminRoutes>
          }
        />
        <Route
          path={url.ADMIN_PRODUCTS}
          element={
            <AdminRoutes>
              <AppLayout>
                <AdminLayout>
                  <AdminProductsList />
                </AdminLayout>
              </AppLayout>
            </AdminRoutes>
          }
        />
        <Route
          path={url.ADD_PRODUCT}
          element={
            <AdminRoutes>
              <AppLayout>
                <AdminLayout>
                  <AdminAddProducts />
                </AdminLayout>
              </AppLayout>
            </AdminRoutes>
          }
        />
        <Route
          path={url.EDIT_PRODUCT}
          element={
            <AdminRoutes>
              <AppLayout>
                <AdminLayout>
                  <AdminEditProducts />
                </AdminLayout>
              </AppLayout>
            </AdminRoutes>
          }
        />
        <Route
          path={url.CATEGORIES}
          element={
            <AdminRoutes>
              <AppLayout>
                <AdminLayout>
                  <AdminCategoriesList />
                </AdminLayout>
              </AppLayout>
            </AdminRoutes>
          }
        />
        <Route
          path={url.ADD_CATEGORY}
          element={
            <AdminRoutes>
              <AppLayout>
                <AdminLayout>
                  <AdminAddCategory />
                </AdminLayout>
              </AppLayout>
            </AdminRoutes>
          }
        />
        <Route
          path={url.EDIT_CATEGORY}
          element={
            <AdminRoutes>
              <AppLayout>
                <AdminLayout>
                  <AdminEditCategory />
                </AdminLayout>
              </AppLayout>
            </AdminRoutes>
          }
        />

        {/* Catch all route. Always at bottom */}
        <Route
          path="*"
          element={
            <AppLayout>
              <NotFoundPage />
            </AppLayout>
          }
        />
      </Routes>
    </Suspense>
  );
};

export default RouterConfig;
