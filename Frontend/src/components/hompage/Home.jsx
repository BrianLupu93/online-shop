import Carousel from "../carousel/Carousel";
import React, { useEffect } from "react";
import Navbar from "../navbar/Navbar";
import ProductCard from "../productCard/ProductCard";
import "./Home.css";
import Spinner from "../../utils/spinner/Spinner";

import { getAccountDetails } from "../../Slices/accountSlice";
import { getProducts } from "../../Slices/productsSlice";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const userId = useSelector((state) => state.auth.userId);
  const fetching = useSelector((state) => state.products.fetching);
  const allProducts = useSelector((state) => state.products.allProducts);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    if (isLoggedIn) dispatch(getAccountDetails(userId));
  }, [isLoggedIn]);

  return (
    <div className="home-container">
      <Navbar />
      <Carousel />
      <Spinner
        display={fetching === "undefined" || !fetching ? "none" : "block"}
        message={"Products..."}
      />
      <div className="products-list">
        {allProducts?.map((product) => {
          return (
            <ProductCard
              key={product.id}
              title={product.brand}
              body={`${product.brand} -- ${
                product.type ? product.type : product.lensType
              }`}
              price={product.price}
              category={product.category}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
