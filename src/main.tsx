import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Checkout from "./routes/Checkout";
import Home from "./routes/Home";
import App from "./routes/App";

export const routeArr = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "checkout/",
        element: <Checkout />,
      },
    ],
  },
];

const container = document.getElementById("root") as any;
let root = container._reactRootContainer;

if (!root) {
  root = ReactDOM.createRoot(container);
  container._reactRootContainer = root;
}

const router = createBrowserRouter(routeArr);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
