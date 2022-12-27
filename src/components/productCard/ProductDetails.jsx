import React from "react";
import image from "../../images/royal4.jpg";

const ProductDetails = () => {
  return (
    <div className="product-details-container">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={image} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">Card title</h3>
              <p>⭐⭐⭐⭐⭐</p>
              <p className="card-text  details-content">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer. This is a wider card with supporting text below as a
                natural lead-in to additional content. This content is a little
                bit longer.
              </p>
              <h4>32,45$</h4>
              <div className="details-buttons">
                <a href="/" className="btn btn-primary details-btn">
                  Add to Cart
                </a>
              </div>
              <p className="card-text text-success">This product is in Stock</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
