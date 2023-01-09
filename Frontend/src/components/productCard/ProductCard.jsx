import React from "react";
import sunglasses from "../../images/sunglasses.jpeg";
import eyeglasses from "../../images/eyeglasses.jpg";
import lens from "../../images/lens.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Slices/cartSlice";
import { getProduct } from "../../Slices/productsSlice";

const ProductCard = ({
  title,
  body,
  price,
  category,
  disponibility,
  id,
  reviews,
  stars,
  isAdmin,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addToCart(id));
  };

  const handleProductDetils = (id) => {
    dispatch(getProduct(id));
    navigate("/product-details");
  };

  return (
    <div className="product-card-container m-3">
      <div className="card " id={id} style={{ width: "18rem" }}>
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
          {isAdmin ? (
            <h5 className="card-title text-center">{title.toUpperCase()}</h5>
          ) : (
            <Link
              to="/product-details"
              state={{ id: id }}
              className="text-body text-decoration-none"
            >
              <h5 className="card-title text-center">{title.toUpperCase()}</h5>
            </Link>
          )}

          <div className="rating-element d-flex justify-content-center ">
            <p className="mx-2">
              {stars?.map((i) => (
                <span key={i}>⭐</span>
              ))}
            </p>

            <small> {reviews} reviews</small>
          </div>
          <p className="card-text">{body.toUpperCase()}</p>
          <p className="card-text">{price}$</p>

          {isAdmin ? (
            <button className="btn btn-primary" onClick={(e) => navigate("/")}>
              Edit product
            </button>
          ) : (
            <Link
              href="/"
              className="btn btn-primary"
              onClick={(e) => handleAddToCart(e)}
            >
              Add to Cart
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
{
  /* ⭐ */
}

export default ProductCard;
