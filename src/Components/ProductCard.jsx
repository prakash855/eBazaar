import React from "react";

const ProductCard = ({
  title,
  price,
  discountPrice,
  discountPercent,
  imgURL,
  rating,
}) => {
  return (
    <div className="card_with_badge flex shadow">
      <div className="card_badge flex">
        <i className="bi bi-suit-heart"></i>
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
          <button className="btn btn_icon warning_btn flex flex-center">
            <i className="i_btn bi bi-cart"></i>
            Add to Cart
          </button>
          <div className="flex">
            <i class="rated rating bi bi-star-fill"></i> &nbsp;
            <small>{rating}/5</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
