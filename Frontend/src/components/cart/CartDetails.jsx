import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const CartDetails = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div>
      <div className="card text-center">
        <div className="card-header">
          <strong>Cart Details</strong>
        </div>
        <div className="card-body">
          <h5 className="card-title">Total</h5>
          <p className="card-text">{`Your cart contain (${cartItems.length} ${
            cartItems.length === 1 ? "item" : "items"
          })`}</p>
          <p className="card-text">
            <strong>Subtotal </strong>price 278,99$
          </p>
          <Link to="/order-details" className="btn btn-primary">
            Proceed to Order Details
          </Link>
        </div>
        <div className="card-footer text-muted">
          Do you have a discout code?
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
