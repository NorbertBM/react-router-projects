import React from "react";

export default function Apps() {
  const app = {
    name: "Name",
    img: "https://placekitten.com/g/200/200",
    twitter: "your_handle",
    notes: "Some notes",
    favorite: true,
  };
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">
          {app.name} {app.favorite ? <span>⭐️</span> : null}
        </h3>
        <div>
          <img key={app.img} src={app.img || null} />
        </div>
      </div>
    </div>
  );
}
