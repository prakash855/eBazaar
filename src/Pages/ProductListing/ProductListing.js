import React from "react";
import { RotatingLines } from "react-loader-spinner";
import Container from "../../Components/Container";
import Filter from "../../Components/Filter/Filter";
import ProductCard from "../../Components/ProductCard";
import { useDataContext } from "../../StateManagement/Contexts/StateContext/StateContext";
import "./ProductListing.css";

const ProductListing = () => {
  const { state, filteredProducts } = useDataContext();
  console.log(filteredProducts)
  return (
    <Container>
      <section className="container flex">
        <Filter />
        <div className="content flex wrap">
          {filteredProducts.length === 0 && (
            <div className="loader">
              <RotatingLines
                width="100"
                strokeColor="#FF5733"
                strokeWidth="1"
              />
            </div>
          )}
          {filteredProducts.map((item) => (
            <ProductCard key={item._id} {...item} />
          ))}
        </div>
      </section>
    </Container>
  );
};

export default ProductListing;
