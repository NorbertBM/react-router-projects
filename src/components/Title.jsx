import React from "react";

export default function Title({ text, classes }) {
  return (
    <h1 className={`title text-center ${classes}`}>
      {text ? text : "Title component"}
    </h1>
  );
}
