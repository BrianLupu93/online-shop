import React from "react";
import image from "../../images/royal4.jpg";

const ProductCart = () => {
  return (
    <div className="product-cart-container">
      <div className="card mb-3">
        <div className="row g-0 ">
          <div className="col-md-2 d-flex align-items-center">
            <img
              src={image}
              className="img-fluid rounded-start cart-img"
              alt="..."
            />
          </div>
          <div className="col-md-10">
            <div className="card-body cart-body">
              <h3 className="card-title">Card title</h3>
              <p>⭐⭐⭐⭐⭐</p>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <h4>32,45$</h4>
              <div className="details-buttons-cart">
                <a href="/" className="btn btn-primary details-btn">
                  Add to Cart
                </a>
                <a href="/" className="btn btn-primary details-btn">
                  Delete from Cart
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

export default ProductCart;
