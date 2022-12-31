import React from "react";
import image from "../../images/royal4.jpg";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <div className="product-card-container m-3">
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <Link
            to="/product-details"
            className="text-body text-decoration-none"
          >
            <h5 className="card-title">Card title</h5>
          </Link>
          <p className="card-text">Some quick example text.</p>
          <p className="card-text">29,49$</p>
          <a href="/" className="btn btn-primary">
            Add to Cart / Edit
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;