import React from "react";

const Header = () => {
  return (
    <div className="navigation flex shadow">
      <div className="nav_head">Pencil-UI</div>
      <div className="nav_input">
        <input className="input shadow" type="text" placeholder="Search" />
      </div>
      <div className="nav_actions flex">
        <button className="btn secondary_btn">Login</button>
        <div className="icons">
          <i className="bi bi-suit-heart icon_sm"></i>
          <span className="badge badge_small flex flex-center">4</span>
        </div>
        <div className="icons">
          <i className="bi bi-cart icon_sm"></i>
          <span className="badge badge_small flex flex-center">4</span>
        </div>
        <div>Cart</div>
      </div>
    </div>
  );
};

export default Header;
