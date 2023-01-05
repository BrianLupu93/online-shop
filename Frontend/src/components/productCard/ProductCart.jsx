import React from "react";
import sunglasses from "../../images/sunglasses.jpeg";
import eyeglasses from "../../images/eyeglasses.jpg";
import lens from "../../images/lens.jpg";

const ProductCart = ({ id, title, body, category, price, reviews, stars }) => {
  return (
    <div className="product-cart-container" id={id}>
      <div className="card mb-3">
        <div className="row g-0 ">
          <div className="col-md-2 d-flex align-items-center">
            <img
              src={
                category === "SUNGLASSES"
                  ? sunglasses
                  : category === "GLASSES"
                  ? eyeglasses
                  : lens
              }
              className="img-fluid rounded-start cart-img"
              alt="..."
            />
          </div>
          <div className="col-md-10">
            <div className="card-body cart-body">
              <h3 className="card-title">{title}</h3>
              <p className="mx-2">
                {stars?.map((star) => (
                  <span>⭐</span>
                ))}
              </p>

              <small> {reviews} reviews</small>
              <p className="card-text">{body}</p>
              <h4>{price}$</h4>
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
