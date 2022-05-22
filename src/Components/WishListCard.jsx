import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../StateManagement/Contexts/AuthContext/AuthContext";
import { useCart } from "../StateManagement/Contexts/CartContext/CartContext";

import * as AiIcons from "react-icons/ai";
import { useWishList } from "../StateManagement/Contexts/WishListContext/WishListContext";

const WishListCard = (product) => {
  const { title, price, discountPrice, discountPercent, imgURL, rating } =
    product;

  const {
    addToCart,
    state: { cart },
  } = useCart();

  const { removeFromWishList } = useWishList();

  const { token } = useAuth();
  const navigate = useNavigate();

  const addToCartHandler = (product) => {
    addToCart(product);
  };

  return (
    <div className="card_with_badge flex shadow">
      <div className="card_badge flex">
        <div
          onClick={() => removeFromWishList(product)}
          class="card_badge flex"
        >
          <button class="btn_float round flex flex-center">
            <AiIcons.AiOutlineDelete />
          </button>
        </div>
      </div>
      <div className="">
        <img className="card_image" src={imgURL} alt="" />
      </div>
      <div className="card_detail">
        <div className="card_name">{title}</div>
        <div className="card_price">
          ₹{discountPrice}&nbsp; <del className="deleted">₹{price}</del>&nbsp;
          <span className="highlights card_deal">{discountPercent}% OFF</span>
        </div>

        <div className="flex rates">
          {cart.find((theProduct) => theProduct._id === product._id) ? (
            <button
              onClick={() => {
                navigate("/cart");
              }}
              className="btn btn_icon dark_btn flex flex-center"
            >
              <i className="i_btn bi bi-cart"></i>
              View Cart
            </button>
          ) : (
            <button
              onClick={() => {
                addToCartHandler(product);
              }}
              className="btn btn_icon warning_btn flex flex-center"
            >
              <i className="i_btn bi bi-cart"></i>
              Add to Cart
            </button>
          )}
          <div className="flex">
            <i className="rated rating bi bi-star-fill"></i> &nbsp;
            <h5>{rating}/5</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishListCard;
