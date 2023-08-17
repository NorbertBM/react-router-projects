import React from "react";

import { Subtitle, Card } from "../../components/componentsLibrary";

export default function DashboardEnterprise() {
  return (
    <div>
      <Subtitle text={"For enterprise use"} />
      <div className="d-flex">
        <Card
          title={"Enterprise"}
          btnText={"Buy now"}
          cardBody={true}
          cardHeader={true}
        >
          <h4>Price</h4>
          <h2>€ 19.99/month</h2>
        </Card>
        <section className="m-2">
          <h3 className="mb-2">What you get</h3>
          <ul>
            <li>Unlimited access to all courses</li>
            <li>Unlimited access to all courses</li>
            <li>Unlimited access to all courses</li>
            <li>Unlimited access to all courses</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
