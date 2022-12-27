import Carousel from "../carousel/Carousel";
import React from "react";
import Navbar from "../navbar/Navbar";
import ProductCard from "../productCard/ProductCard";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
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

export default Home;
