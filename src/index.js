import React from "react";
import ReactDOM from "react-dom/client";
import NotFound from "./pages/NotFound";
import App from "./App";

import Home from "./pages/Home";

import Cart from "./pages/Cart";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {store} from './redux/store';
import { Provider } from 'react-redux'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Provider store={store}><App /></Provider>,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
