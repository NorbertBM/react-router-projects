import React from "react";
import "../App.css";

import { Link, Outlet } from "react-router-dom";
// import { getApps } from "../apps";

export default function Root() {
  //   const { apps } = useLoaderData();
  return (
    <div className="container">
      <nav className="navbar bg-dark text-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/nothing-here">
              Nothing Here
            </Link>
          </li>
        </ul>
      </nav>
      <div className="container apps-container">
        <Outlet />
      </div>
    </div>
  );
}
