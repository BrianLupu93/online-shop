import React from "react";
import sunglasses from "../../images/sunglasses.jpeg";
import eyeglasses from "../../images/eyeglasses.jpg";
import lens from "../../images/lens.jpg";
import { Link } from "react-router-dom";

const ProductCard = ({ title, body, price, category, disponibility }) => {
  return (
    <div className="product-card-container m-3">
      <div className="card" style={{ width: "18rem" }}>
        {disponibility === "order Now" ? (
          <small className="mx-2 my-2 text-danger">{disponibility}</small>
        ) : (
          <small className="mx-2 my-2 text-success">{disponibility}</small>
        )}
        <img
          src={
            category === "SUNGLASSES"
              ? sunglasses
              : category === "GLASSES"
              ? eyeglasses
              : lens
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <Link
            to="/product-details"
            className="text-body text-decoration-none"
          >
            <h5 className="card-title">{title}</h5>
          </Link>
          <p className="card-text">{body}</p>
          <p className="card-text">{price}$</p>

          <a href="/" className="btn btn-primary">
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
