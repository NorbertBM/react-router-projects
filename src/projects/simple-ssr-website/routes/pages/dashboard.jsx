import React from "react";
import { Link, Outlet } from "react-router-dom";
export default function Dashboard() {
  return (
    <div className="container">
      <h4 className="title text-center">Who are you?</h4>
      <nav className="navbar bg-light text-dark">
        <ul className="navbar-nav ">
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard/private">
              Private
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard/enterprise">
              Enterprise
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard/comingSoon">
              Coming Soon
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}
