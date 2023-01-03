import Carousel from "../carousel/Carousel";
import React, { useEffect } from "react";
import Navbar from "../navbar/Navbar";
import ProductCard from "../productCard/ProductCard";
import "./Home.css";

import { getAccountDetails } from "../../Slices/accountSlice";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const userId = useSelector((state) => state.auth.userId);

  useEffect(() => {
    if (isLoggedIn) dispatch(getAccountDetails(userId));
  }, [isLoggedIn]);

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
