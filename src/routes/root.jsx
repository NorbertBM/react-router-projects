import React from "react";
import "../App.css";

import { Link, Outlet, useLoaderData } from "react-router-dom";
// import { getApps } from "../apps";

export default function Root() {
  //   const { apps } = useLoaderData();
  return (
    <div className="container">
      <h1 className="title text-center">Apps Dashboard</h1>

      <nav className="navbar">
        {/* {apps.length ? (
          <ul>
            {apps.map((app) => (
              <li key={app.id}>
                <Link to={`apps/${app.id}`}>{app.name}</Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>No apps!</p>
        )} */}

        <ul className="d-grid">
          <li>
            <Link to={`App1/`}>
              <div className="card">
                <div className="card-body">SSR</div>
              </div>
            </Link>
          </li>
          <li>
            <Link to={`apps/2`}>App 2</Link>
          </li>{" "}
          {/* <li>
            <Link to={`App1/`}>SSR</Link>
          </li> */}
        </ul>
      </nav>
      <div className="container apps-container">
        <Outlet />
      </div>
    </div>
  );
}
// export async function loader() {
//   const apps = await getApps();
//   return { apps };
// }
