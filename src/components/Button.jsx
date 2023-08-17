import React from "react";

export default function Button({ classes, text, icon, onClick, type, style }) {
  const alertMissingHandler = () => {
    window.alert("Add event handler to the button!");
  };

  return (
    <button
      className={`btn ${classes}`}
      onClick={onClick ? onClick : alertMissingHandler}
      type={type}
      style={style}
    >
      {" "}
      <div className="d-flex">
        {icon}
        {text ? text : "text"}
      </div>
    </button>
  );
}
