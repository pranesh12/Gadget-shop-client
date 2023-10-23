import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductDetail from "./Pages/products/ProductDetail.jsx";
import store from "./redux/store.js";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "/:productId",
    element: <ProductDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <App />
    </Provider>
  </React.StrictMode>
);
