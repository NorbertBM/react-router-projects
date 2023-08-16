import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
// import App from "./App";
import Root, { loader as rootLoader } from "./routes/root";
import ErrorPage from "./error-page";

import Apps from "./routes/apps";
import App1 from "./projects/Simple-SSR-Website/App1";
import About from "./projects/Simple-SSR-Website/App1/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    // loader: rootLoader,
    children: [
      {
        path: "apps/:appId",
        element: <Apps />,
      },
      {
        path: "App1/",
        element: <App1 />,
        children: [
          {
            path: "App1/:about",
            element: <About />,
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
