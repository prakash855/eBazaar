import React from "react";
import { useCart } from "../../StateManagement/Contexts/CartContext/CartContext";

const CartItem = (product) => {
  const { imgURL, title, price, discountPrice, qty } = product;
  console.log(product);
  const {
    state: { cart },
    incrementCartQuantity,
    decrementCartQuantity,
    deleteCartQuantity,
  } = useCart();
  return (
    <div className="Horizontal_card cart_item grid shadow">
      <img className="card_image cart_imgs" src={imgURL} alt={title} />
      <div className="card_detail">
        <div className="card_name">{title}</div>
        <div className="card_price">
          ₹{price}&nbsp; <del className="deleted">₹{discountPrice}</del>&nbsp;
          <span className="highlights card_deal">24% OFF</span>
        </div>
        <div className="content_text mycart_inc_dec flex">
          Quantity:
          <i
            onClick={() =>
              qty > 1 && decrementCartQuantity(product, `decrement`)
            }
            className={
              qty > 1 ? `bi bi-dash-circle cursor` : `bi bi-dash-circle`
            }
          ></i>
          <b>{qty}</b>
          <i
            onClick={() => incrementCartQuantity(product, `increment`)}
            className="bi bi-plus-circle cursor"
          ></i>
        </div>
        <div className="btn_mycart flex">
          <button
            onClick={() => deleteCartQuantity(product)}
            className="btn secondary_btn"
          >
            Remove from cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
