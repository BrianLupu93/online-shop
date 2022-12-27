import React from "react";
import image from "../../images/royal4.jpg";

const ProductCard = () => {
  return (
    <div className="product-card-container m-3">
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text.</p>
          <p className="card-text">29,49$</p>
          <a href="/" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
