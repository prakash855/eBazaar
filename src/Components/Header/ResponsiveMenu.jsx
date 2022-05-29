import React, { useEffect } from "react";
import * as MdIcons from "react-icons/md";
import * as GiIcons from "react-icons/gi";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../StateManagement/Contexts/AuthContext/AuthContext";

const ResponsiveMenu = ({ setShowResponsiveMenu }) => {
  const navigate = useNavigate();
  const { token, logOut } = useAuth();

  return (
    <div className="responsive-menu shadow flex">
      <GiIcons.GiCrossMark
        className="resp-cross"
        onClick={() => setShowResponsiveMenu(false)}
      />
      <div className="top-resp">
        <div
          onClick={() => {
            navigate("/products"), setShowResponsiveMenu(false);
          }}
          className="resp-menues flex"
        >
          <MdIcons.MdProductionQuantityLimits className="resp-nav-icons" />
          Products
        </div>
        <div
          onClick={() => {
            token ? navigate("/wishlist") : navigate("/login"),
              setShowResponsiveMenu(false);
          }}
          className="resp-menues flex"
        >
          <GiIcons.GiHeartPlus className="resp-nav-icons" />
          Wishlist
        </div>
        <div
          onClick={() => {
            token ? navigate("/cart") : navigate("/login"),
              setShowResponsiveMenu(false);
          }}
          className="resp-menues flex"
        >
          <GiIcons.GiShoppingCart className="resp-nav-icons" />
          Cart
        </div>
      </div>
      <div className="bottom-resp">
        <div
          onClick={() => {
            navigate("/login"), setShowResponsiveMenu(false);
          }}
          className="resp-menues flex"
        >
          {!token
            ? [<MdIcons.MdOutlineLogin className="resp-nav-icons" />, `Login`]
            : ``}
        </div>
        <div
          onClick={() => {
            logOut(), navigate("/login"), setShowResponsiveMenu(false);
          }}
          className="resp-menues flex"
        >
          {token
            ? [<MdIcons.MdOutlineLogout className="resp-nav-icons" />, `Logout`]
            : ``}
        </div>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
