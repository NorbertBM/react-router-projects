import React from "react";
import "../App.css";

import { Link, Outlet } from "react-router-dom";
// import { getApps } from "../apps";

export default function Root() {
  //   const { apps } = useLoaderData();
  return (
    <div className="container">
      <nav className="navbar bg-accept text-light">
        <ul className="navbar-nav">
          <Link className="nav-item nav-link" to="/">
            Home
          </Link>
          <Link className="nav-item nav-link" to="/about">
            About
          </Link>
          <Link className="nav-item nav-link" to="/dashboard">
            Dashboard
          </Link>
          <Link className="nav-item nav-link" to="/nothing-here">
            Nothing Here
          </Link>{" "}
          <Link className="nav-item nav-link" to="/lazy">
            Lazy
          </Link>
        </ul>
      </nav>
      <div className="container apps-container">
        <Outlet />
      </div>
    </div>
  );
}
