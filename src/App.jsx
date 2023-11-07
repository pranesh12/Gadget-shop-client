import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  Routes,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import ProductDetail from "./Pages/products/ProductDetail";
import Layout from "./Components/Layout/Layout";
import RegisterForm from "./Pages/RegisterForm/RegisterForm";
import LoginForm from "./Pages/LoginForm/LoginForm";
import Cart from "./Pages/Cart/Cart";
import PrivateRoute from "./routes/PrivateRoute";
import UserOrder from "./Pages/userOrder/UserOrder";
import AdminLayOut from "./Pages/Admin/AdminLayOut";
import Admin from "./Pages/Admin/Admin";

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
          path: "/login",
          element: <LoginForm />,
        },
        {
          path: "/register",
          element: <ProductDetail />,
        },
        {
          path: "/product/:productId",
          element: <RegisterForm />,
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
          element: <Admin />,
        },
      ],
    },
  ]);

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path="/" element={<Layout />}>
  //       <Route index element={<Home />} />
  //       <Route path="/product/:productId" element={<ProductDetail />} />
  //       <Route path="/login" element={<LoginForm />} />
  //       <Route path="/register" element={<RegisterForm />} />
  //       <Route path="/userorder" element={<UserOrder />} />
  //       <Route
  //         path="/cart"
  //         element={
  //           <PrivateRoute>
  //             <Cart />
  //           </PrivateRoute>
  //         }
  //       />
  //     </Route>
  //   )
  // );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
