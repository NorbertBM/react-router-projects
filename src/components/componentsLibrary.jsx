import React from "react";

export function Title({ text, classes }) {
  return (
    <h1 className={`title text-center ${classes}`}>
      {text ? text : "Title component"}
    </h1>
  );
}
export function Subtitle({ text, classes }) {
  return (
    <h2 className={`subtitle text-center ${classes}`}>
      {text ? text : "Subtitle component"}
    </h2>
  );
}

export function Button({ classes, text, icon, onClick, type, style }) {
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

// CARD

export function Card({
  title,
  text,
  children,
  cardClass,
  icon_1,
  icon_2,
  icon_3,
  btnIcon,
  startEvent,
  btnText,
  btnClass,
  cardHeader = true,
  cardBody = true,
  cardFooter = true,
}) {
  return (
    <div className={`card ${cardClass}`} style={{ width: 200 }}>
      {cardHeader && (
        <div className="card-header">
          {icon_1}
          {icon_2}
          {icon_3}
        </div>
      )}
      <div className="card-body">
        <h3 className="card-title">{title ? title : "card title"}</h3>
        <div className="card-text">
          {text}
          {children}
        </div>
      </div>
      {cardFooter && (
        <div className="card-footer">
          <Button
            classes={btnClass}
            text={btnText}
            icon={btnIcon}
            onClick={startEvent}
          />
        </div>
      )}
    </div>
  );
}

// MODAL

export function Modal({ title, text, loginEvent, cancelEvent }) {
  return (
    <div className="modal  ">
      <div className="modal-content fadeIn-2ms">
        <h1 className="mb-1">{title}</h1>
        <p className="mb-1">{text ? text : "Modal content goes here"}</p>
        <div className="d-flex space-between">
          <Button classes={"btn-primary"} text={"Login"} onClick={loginEvent} />
          <Button text={"Close"} onClick={cancelEvent} />
        </div>
      </div>
    </div>
  );
}

export function Header({
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
