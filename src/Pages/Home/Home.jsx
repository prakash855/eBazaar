import React from "react";
import Container from "../../Components/Container";
import ProductCard from "../../Components/ProductCard";
import "./Home.css";
import { useDataContext } from "../../StateManagement/Contexts/StateContext/StateContext";

import eComPicture from "../../assets/ecommerce.jpg";
import { useNavigate } from "react-router-dom";
import { getNewArrivals } from "../../Utilities/getNewArrivals";
import { useDocumentTitle } from "../../Hooks/useDocumentTitle";

const Home = () => {
  useDocumentTitle("");
  const navigate = useNavigate();
  const { state } = useDataContext();
  const { products } = state;

  return (
    <Container>
      <div style={{ position: "relative" }}>
        <button
          onClick={() => navigate("/products")}
          className="btn dark_btn centered"
        >
          Shop Now
        </button>
        <img className="responsive_image" src={eComPicture} alt="product" />
      </div>
      <div className="content_heading">
        <div className="center_aligned">New Arrivals</div>
      </div>
      <div className="allProducts flex">
        {getNewArrivals(products)?.map((item) => (
          <ProductCard key={item._id} {...item} />
        ))}
      </div>
    </Container>
  );
};

export { Home };
