// [ ] 05-04-Children Prop
import React from "react";

import Title from "./Title";

export default function Header({
  children,
  logIn,
  handleShowLogInForm,
  handleScrollToOffers,
  headerImg,
}) {
  return (
    <header className="header d-flex">
      {children && children}

      <div className="header-content mb-2">
        <Title
          text={"Learn to code by watching others"}
          classes={"header-title fs-xxl mb-3 "}
        />
        <p className="header-text mb-3">Header text...</p>
        <div className="header-btn">
          <a
            className="btn btn-primary text-light"
            onClick={
              !logIn
                ? handleShowLogInForm
                : () => window.alert("You are logged in.")
            }
          >
            Try it free 30 days
          </a>

          <a className="btn btn-secondary" onClick={handleScrollToOffers}>
            Learn more...
          </a>
        </div>
      </div>

      {/* --------------------- */}
      <img
        className="header-img"
        src={headerImg && headerImg}
        alt="header-img"
      />
    </header>
  );
}
