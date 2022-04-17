import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="navigation flex shadow">
      <div onClick={() => navigate("/")} className="nav_head">
        eBazaar
      </div>
      <div className="nav_input">
        <input className="input shadow" type="text" placeholder="Search" />
      </div>
      <div className="nav_actions flex">
        <div onClick={() => navigate("/products")} className="nav_head">
          Products
        </div>
        <div onClick={() => navigate("/mockman")} className="nav_head">
        Mockman
      </div>
        <button
          onClick={() => navigate("/login")}
          className="btn secondary_btn"
        >
          Login
        </button>
        <div onClick={() => navigate("/wishlist")} className="icons">
          <i className="bi bi-suit-heart icon_sm"></i>
          <span className="badge badge_small flex flex-center">4</span>
        </div>
        <div onClick={() => navigate("/cart")} className="icons">
          <i className="bi bi-cart icon_sm"></i>
          <span className="badge badge_small flex flex-center">4</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
