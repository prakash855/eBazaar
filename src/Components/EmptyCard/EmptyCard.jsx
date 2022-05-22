import React from "react";
import { useNavigate } from "react-router-dom";
import "./EmptyCard.css";

const EmptyCart = ({ card, text, action }) => {
  const navigate = useNavigate();
  return (
    <div className="center_aligned flex flex-center empty_cart">
      <div className="card flex shadow">
        <img
          src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
          alt=""
        />
        <div className="content_subheading_heading">Your {card} is empty!</div>
        <small>{text}</small>
        <button onClick={() => navigate("/products")} class="btn primary_btn">
          {action}
        </button>
      </div>
    </div>
  );
};

export default EmptyCart;
