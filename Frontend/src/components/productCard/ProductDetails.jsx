import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import image from "../../images/lens.jpg";
import { getProduct } from "../../Slices/productsSlice";
import DetailsBar from "./DetailsBar";
import { addToCart } from "../../Slices/cartSlice";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { id } = location.state;
  const editProduct = useSelector((state) => state.products.editProduct);

  useEffect(() => {
    dispatch(getProduct(id));
  }, []);

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addToCart(id));
  };
  return (
    <div className="product-details-container mt-5">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={image} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">{editProduct.brand.toUpperCase()}</h3>

              <div className="rating-element d-flex ">
                <p className="">
                  {editProduct.stars?.map((star, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </p>

                <small> {editProduct.reviews} reviews</small>
              </div>
              <p className="card-text  details-content">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer. This is a wider card with supporting text below as a
                natural lead-in to additional content. This content is a little
                bit longer.
              </p>
              <h4>32,45$</h4>
              <div className="details-buttons">
                <button
                  onClick={(e) => handleAddToCart(e)}
                  className="btn btn-primary details-btn"
                >
                  Add to Cart
                </button>
              </div>
              <p className="card-text text-success">
                {editProduct.order
                  ? "This Product is available only on Order"
                  : "This product is in Stock"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card mt-5">
        <div className="row g-0 p-5">
          <DetailsBar />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
