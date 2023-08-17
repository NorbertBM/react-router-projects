import React from "react";

import { Subtitle, Card } from "../../components/componentsLibrary";

export default function DashboardPrivate() {
  return (
    <div>
      <Subtitle text={"For personal use"} />
      <div className="d-flex">
        <Card
          title={"Private"}
          btnText={"Buy now"}
          cardBody={true}
          cardHeader={true}
        >
          <h4>Price</h4>
          <h2>€ 9.99/month</h2>
        </Card>
        <section className="m-2">
          <h3 className="mb-2">What you get</h3>
          <ul>
            <li>Limited access to all courses</li>
            <li>Limited access to all courses</li>
            <li>Limited access to all courses</li>
            <li>Limited access to all courses</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
