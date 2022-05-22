import React from "react";
import CartItem from "./CartItem";
import EmptyCard from "../../Components/EmptyCard/EmptyCard";
import "./CartCard.css";
import { useCart } from "../../StateManagement/Contexts/CartContext/CartContext";
import { useDocumentTitle } from "../../Hooks/useDocumentTitle";
import { totalMRP, totalPrice } from "./PriceDetails";
import { priceFormatter } from "../../Utilities/priceFormatter";
import Container from "../Container";

const CartCard = () => {
  useDocumentTitle("Cart");
  const {
    state: { cart },
    incrementCartQuantity,
    decrementCartQuantity,
    deleteCartQuantity,
  } = useCart();

  // get total price
  const getTotalPrice = cart.reduce(totalPrice, 0);

  // get total MRP
  const getTotalMRP = cart.reduce(totalMRP, 0);

  // get discount
  const discount = (mrp, price) => mrp - price;
  const getDiscount = discount(getTotalMRP, getTotalPrice);

  return (
    <Container>
      <section
        className={
          cart.length === 0
            ? `center_aligned flex flex-center`
            : `flex mycart_container`
        }
      >
        <div className="flex cart_items">
          {cart?.map((product) => (
            <CartItem key={product._id} {...product} />
          ))}
          {cart?.length === 0 && (
            <EmptyCard
              card={"cart"}
              text="You have no items in your cart."
              action="Add Items Now"
            />
          )}
        </div>
        {cart?.length > 0 && (
          <div className="card flex shadow cart_price">
            <div className="content_subheading_heading">Price Details</div>
            <hr />
            <div className="mycart_price flex">
              <div className="price_name">
                Price{" "}
                {cart?.length > 1
                  ? `(${cart?.length} items)`
                  : `(${cart?.length} item)`}
              </div>
              <div className="price_amount">₹{priceFormatter(getTotalMRP)}</div>
            </div>

            <div className="mycart_price flex">
              <div className="price_name">delivery charges</div>
              <div className="price_amount">₹0</div>
            </div>

            <div className="mycart_price flex">
              <div className="price_name">discount</div>
              <div className="price_amount">₹{priceFormatter(getDiscount)}</div>
            </div>

            <b className="mycart_total_amount">
              <div className="mycart_price flex">
                <div className="price_name">Total Amount</div>
                <div className="price_amount">
                  ₹{priceFormatter(getTotalPrice)}
                </div>
              </div>
            </b>
            <small className="center_aligned">
              you will save ₹{priceFormatter(-getDiscount)} on this order
            </small>
            <button className="btn primary_btn">Place order</button>
          </div>
        )}
      </section>
    </Container>
  );
};

export default CartCard;
