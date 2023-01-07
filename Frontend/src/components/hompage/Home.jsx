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
      <Spinner
        display={fetching === "undefined" || !fetching ? "none" : "block"}
        message={"Products..."}
      />
      <div className="products-list">
        {allProducts?.map((product, i) => {
          return (
            <ProductCard
              key={i}
              title={product.brand}
              body={`-- ${
                product.model ? product.model : product.category
              } -- ${product.lensType ? product.lensType : product.frameType}`}
              price={product.price}
              category={product.category}
              disponibility={product.order ? "order Now" : "in Stock"}
              id={product.id}
              reviews={product.reviews}
              stars={product.stars}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
