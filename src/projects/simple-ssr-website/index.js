import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import Root from "./routes/root";
import ErrorElement from "./error-page";
// Create the router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/pages/home";
import About from "./routes/pages/about";
import Dashboard from "./routes/pages/dashboard";

import Private from "./routes/pages/dashboardPrivate";
import DashboardEnterprise from "./routes/pages/dashboardEnterprise";
import IndexRoute from "./routes/indexRoute";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <div>Hello world!</div>,
    element: <Root />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/dashboard",
        element: <Dashboard />,

        errorElement: <ErrorElement />,
        children: [
          { index: true, element: <IndexRoute /> },
          {
            path: "/dashboard/private",
            element: <Private />,
          },
          {
            path: "/dashboard/enterprise",
            element: <DashboardEnterprise />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
