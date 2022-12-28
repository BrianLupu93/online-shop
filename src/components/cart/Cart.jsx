import React from "react";
import ProductCart from "../productCard/ProductCart";
import CartDetails from "./CartDetails";

const Cart = () => {
  return (
    <div className="cart-container">
      <div className="col-md-9 cart-list">
        <h1 className="text-center py-3">Shopping-Cart</h1>
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
      </div>
      <div className="col-md-3 cart-order-total">
        <CartDetails />
      </div>
    </div>
  );
};

export default Cart;
