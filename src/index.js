import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import Root from "./routes/root";
import ErrorElement from "./error-page";
// Create the router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/pages/home";
import About from "./routes/pages/about";

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
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
