import React from "react";
import Container from "../../Components/Container";
import ProductCard from "../../Components/ProductCard";
import RangeInput from "../../Components/RangeInput/RangeInput";
import { useDataContext } from "../../Contexts/StateContext/StateContext";
import "./ProductListing.css";

const ProductListing = () => {
  const state = useDataContext();
  return (
    <Container>
      <section className="container flex">
        <div className="sidebar">
          <div className="filter_and_Clear flex">
            <b className="filter_type">Filter</b>
            <a href="#">clear</a>
          </div>
          <div className="product_price">
            <b className="filter_type">Price</b>
            <RangeInput />
          </div>

          <div className="product_category flex">
            <b className="filter_type">Category</b>
            <div>
              <input
                checked
                type="checkbox"
                id="checkbox1"
                name="checkbox1"
                value="checked"
              />
              <label for="vehicle1">Men Clothing</label>
            </div>
            <div>
              <input checked type="checkbox" id="checkbox1" name="checkbox1" />
              <label for="vehicle1">Men Clothing</label>
            </div>
          </div>

          <div className="product_rating flex">
            <b className="filter_type">Rating</b>
            <div>
              <input type="radio" id="html" name="fav_language" value="HTML" />
              <label for="html">4 stars & above</label>
            </div>

            <div>
              <input type="radio" id="css" name="fav_language" value="CSS" />
              <label for="css">3 stars & above</label>
            </div>

            <div>
              <input
                type="radio"
                id="javascript"
                name="fav_language"
                value="JavaScript"
              />
              <label for="javascript">2 stars & above</label>
            </div>

            <div>
              <input
                type="radio"
                id="javascript"
                name="fav_language"
                value="JavaScript"
              />
              <label for="javascript">1 star & above</label>
            </div>
          </div>

          <div className="product_rating flex">
            <b className="filter_type">Sort by</b>
            <div>
              <input type="radio" id="html" name="sort" value="HTML" />
              <label for="html">Price- Low to High</label>
            </div>

            <div>
              <input type="radio" id="css" name="sort" value="CSS" />
              <label for="css">Price- High to Low</label>
            </div>
          </div>
        </div>
        <div className="content flex wrap">
          {state?.map((item) => (
            <ProductCard key={item._id} {...item} />
          ))}
        </div>
      </section>
    </Container>
  );
};

export default ProductListing;
