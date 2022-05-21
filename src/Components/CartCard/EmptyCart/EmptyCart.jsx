import React from "react";
import { useNavigate } from "react-router-dom";
import "./EmptyCart.css";

const EmptyCart = () => {
  const navigate = useNavigate();
  return (
    <div className="center_aligned flex flex-center empty_cart">
      <div className="card flex shadow">
        <div className="content_subheading_heading">Your cart is empty!</div>
        <button onClick={() => navigate("/products")} class="btn primary_btn">
          Add items to it now
        </button>
        <img
          src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
          alt=""
        />
      </div>
    </div>
  );
};

export default EmptyCart;
