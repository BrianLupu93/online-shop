import React from "react";
import ProductCart from "../productCard/ProductCart";
import CartDetails from "./CartDetails";

const Cart = () => {
  return (
    <div className="cart-container">
      <div className="cart-list">
        <h1 className="text-center py-3">Shopping-Cart</h1>
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
      </div>
      <div className="cart-order-total">
        <CartDetails />
      </div>
    </div>
  );
};

export default Cart;
