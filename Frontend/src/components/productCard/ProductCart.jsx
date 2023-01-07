import React from "react";
import sunglasses from "../../images/sunglasses.jpeg";
import eyeglasses from "../../images/eyeglasses.jpg";
import lens from "../../images/lens.jpg";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../Slices/cartSlice";

const ProductCart = ({
  id,
  title,
  body,
  description,
  category,
  price,
  reviews,
  stars,
}) => {
  const dispatch = useDispatch();
  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="product-cart-container " id={id}>
      <div className="card mb-3 ">
        <div className="row g-0 d-flex">
          <div className="col-md-2  image-container">
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
          <div className="col-md-10 cart-body">
            <h3 className="card-title">{title}</h3>
            <p className="mx-2">
              {stars?.map((star, i) => (
                <span key={i}>⭐</span>
              ))}
            </p>

            <small> {reviews} reviews</small>
            <p className="card-text">{body}</p>
            <p className="card-text">{description}</p>
            <h4>{price}$</h4>
            <div className="details-buttons-cart">
              <button
                className="btn btn-primary details-btn"
                onClick={handleRemoveFromCart}
              >
                Remove from cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
