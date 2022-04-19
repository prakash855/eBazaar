import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "../../Components/Container";
import ProductCard from "../../Components/ProductCard";
import "./Home.css";
import { useDataContext } from "../../Contexts/StateContext/StateContext";

import eComPicture from "../../assets/ecommerce.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const state = useDataContext();
  return (
    <Container>
      <div style={{ position: "relative" }}>
        <button
          onClick={() => navigate("/products")}
          class="btn dark_btn centered"
        >
          Shop Now
        </button>
        <img className="responsive_image" src={eComPicture} alt="product" />
      </div>
      <div className="content_heading">
        <div className="center_aligned">New Arrivals</div>
      </div>
      <div className="allProducts flex">
        {state?.map(
          (item) => item.newArrivals && <ProductCard key={item._id} {...item} />
        )}
      </div>
    </Container>
  );
};

export { Home };
