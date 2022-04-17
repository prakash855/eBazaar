import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "../../Components/Container";
import ProductCard from "../../Components/ProductCard";
import "./Home.css";
import { useDataContext } from "../../Contexts/StateContext/StateContext";

import eComPicture from "../../assets/ecommerce.jpg";

const Home = () => {
  const state = useDataContext();
  return (
    <Container>
      <img className="responsive_image" src={eComPicture} alt="product"></img>
      <div className="content_heading">
        <div className="center_aligned">New Arrivals</div>
      </div>
      <div className="allProducts flex">
        {state?.map((item) => item.newArrivals && <ProductCard key={item._id} {...item} />)}
      </div>
    </Container>
  );
};

export { Home };
