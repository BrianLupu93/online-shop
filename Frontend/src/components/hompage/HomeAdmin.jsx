import Carousel from "../carousel/Carousel";
import React from "react";
import ProductCard from "../productCard/ProductCard";
import "./Home.css";
import NavbarAdmin from "../navbar/NavbarAdmin";

const HomeAdmin = () => {
  return (
    <div className="home-container">
      <NavbarAdmin />
      <Carousel />
      <div className="products-list">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default HomeAdmin;
