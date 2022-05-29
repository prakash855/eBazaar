import React, { useState } from "react";
import "./Header.css";
import * as AiIcons from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../StateManagement/Contexts/CartContext/CartContext";
import { useAuth } from "../../StateManagement/Contexts/AuthContext/AuthContext";
import { useWishList } from "../../StateManagement/Contexts/WishListContext/WishListContext";
import ResponsiveMenu from "./ResponsiveMenu";

const Header = () => {
  const [showResponsiveMenu, setShowResponsiveMenu] = useState(false);
  const navigate = useNavigate();
  const { token, logOut } = useAuth();

  const {
    state: { cart },
  } = useCart();

  const {
    state: { wishList },
  } = useWishList();

  return (
    <div className="navigation flex shadow">
      <AiIcons.AiOutlineMenu
        className="resp-nav-icons"
        onClick={() => setShowResponsiveMenu(!showResponsiveMenu)}
      />
      <div onClick={() => navigate("/")} className="nav_head cursor">
        eBazaar
      </div>
      <div className="nav_input">
        <input className="input shadow" type="text" placeholder="Search" />
      </div>
      <div className="nav_actions flex cursor">
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
        <div
          onClick={() => (token ? navigate("/wishlist") : navigate("/login"))}
          className="icons"
        >
          <i className="bi bi-suit-heart icon_sm"></i>
          <span className="badge badge_small flex flex-center">
            {wishList?.length}
          </span>
        </div>
        <div
          onClick={() => (token ? navigate("/cart") : navigate("/login"))}
          className="icons"
        >
          <i className="bi bi-cart icon_sm"></i>
          <span className="badge badge_small flex flex-center">
            {cart?.length}
          </span>
        </div>
        {token && (
          <AiIcons.AiOutlineLogout
            onClick={() => {
              logOut(), navigate("/login");
            }}
          />
        )}
      </div>
      {showResponsiveMenu && (
        <ResponsiveMenu setShowResponsiveMenu={setShowResponsiveMenu} />
      )}
    </div>
  );
};

export default Header;
