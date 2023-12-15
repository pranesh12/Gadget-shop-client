import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import ProductDetail from "./Pages/products/ProductDetail";
import Layout from "./Components/Layout/Layout";
import RegisterForm from "./Pages/RegisterForm/RegisterForm";
import LoginForm from "./Pages/LoginForm/LoginForm";
import Cart from "./Pages/Cart/Cart";
import PrivateRoute from "./routes/PrivateRoute";
import UserOrder from "./Pages/userOrder/UserOrder";
import AdminLayOut from "./Components/AdminLayout/AdminLayOut";
import Admin from "./Pages/Admin/Admin";
import AdminOrders from "./Pages/Admin/AdminOrders";
import AdminProduct from "./Pages/Admin/AdminProducts";
import AdminUsers from "./Pages/Admin/AdminUsers";
import "./App.css";
import AddProduct from "./Pages/Admin/AddProducts";
import UpdateProduct from "./Pages/Admin/UpdateProduct";
import AdminPrivateRoute from "./routes/AdminPrivateRoute";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/product/:productId",
          element: <ProductDetail />,
        },
        {
          path: "/auth/login",
          element: <LoginForm />,
        },
        {
          path: "/auth/register",
          element: <RegisterForm />,
        },
        {
          path: "/product/:productId",
          element: <ProductDetail />,
        },
        {
          path: "/userorder",
          element: <UserOrder />,
        },
        {
          path: "/cart",
          element: (
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          ),
        },
      ],
    },

    {
      path: "/admin",
      element: <AdminLayOut />,
      children: [
        {
          path: "/admin",
          element: (
            <AdminPrivateRoute>
              <Admin />
            </AdminPrivateRoute>
          ),
        },
        {
          path: "/admin/products",
          element: (
            <AdminPrivateRoute>
              <AdminProduct />
            </AdminPrivateRoute>
          ),
        },
        {
          path: "/admin/orders",
          element: (
            <AdminPrivateRoute>
              <AdminOrders />
            </AdminPrivateRoute>
          ),
        },
        {
          path: "/admin/users",
          element: (
            <AdminPrivateRoute>
              <AdminUsers />
            </AdminPrivateRoute>
          ),
        },
        {
          path: "/admin/addproducts",
          element: (
            <AdminPrivateRoute>
              <AddProduct />
            </AdminPrivateRoute>
          ),
        },
        {
          path: "/admin/updateproduct/:id",
          element: (
            <AdminPrivateRoute>
              <UpdateProduct />
            </AdminPrivateRoute>
          ),
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
