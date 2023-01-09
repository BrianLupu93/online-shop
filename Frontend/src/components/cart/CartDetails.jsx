import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getSubtotal } from "../../Slices/cartSlice";
import Modal from "../../utils/modal/Modal";
import { BiUserX } from "react-icons/bi";
import { BsBagFill } from "react-icons/bs";

const CartDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const subTotal = useSelector((state) => state.cart.subTotal);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const [errMessage, setErrMessage] = useState();

  useEffect(() => {
    dispatch(getSubtotal());
  }, [cartItems]);

  const [hideModal, setHideModal] = useState(true);

  const handleProceedToOrder = () => {
    if (cartItems.length === 0) {
      setHideModal(false);
      setErrMessage({
        icon: <BsBagFill />,
        title: "SORRY, CAN NOT PROCEED!",
        body: "You have no item to the bag.",
        btn1: "Close",
        btn2: "Shop Now",
        closeFunction: () => setHideModal(true),
        fun1: () => setHideModal(true),
        fun2: () => navigate("/"),
      });
    }

    if (!isLoggedIn) {
      setHideModal(false);
      setErrMessage({
        icon: <BiUserX />,
        title: "SORRY, CAN NOT PROCEED!",
        body: "You must to be logged in.",
        btn1: "No Account? Register Now",
        btn2: "Login Now",
        closeFunction: () => setHideModal(true),
        fun1: () => navigate("/register"),
        fun2: () => navigate("/login"),
      });
    }
    if (cartItems.length > 0 && isLoggedIn) navigate("/order-details");
  };

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
            <strong>Subtotal </strong>price {subTotal}$
          </p>
          <button
            className="btn btn-primary"
            onClick={() => handleProceedToOrder()}
          >
            Proceed to Order Details
          </button>
        </div>
        <div className="card-footer text-muted">
          Do you have a discout code?
        </div>
      </div>
      <Modal
        display={hideModal ? "none" : "block"}
        icon={errMessage?.icon}
        title={errMessage?.title}
        body={errMessage?.body}
        btn1={errMessage?.btn1}
        btn2={errMessage?.btn2}
        closeFunction={errMessage?.closeFunction}
        fun1={errMessage?.fun1}
        fun2={errMessage?.fun2}
      />
    </div>
  );
};

export default CartDetails;
