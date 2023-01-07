import React from "react";
import { useSelector } from "react-redux";
import ProductCart from "../productCard/ProductCart";
import CartDetails from "./CartDetails";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const firstName = useSelector((state) => state.account.firstName);

  return (
    <div className="cart-container ">
      <div className="col-md-9 cart-list">
        <h1 className="text-center  pt-5 mt-5">Shopping-Cart</h1>

        {cartItems.length === 0 && (
          <h4 className="text-center mt-5 text-primary">{`Hey ${
            firstName ? firstName : "Guest"
          } you don't have any products in the Cart`}</h4>
        )}

        {cartItems?.map((item, i) => {
          return (
            <ProductCart
              key={i}
              title={`-- ${item.category} -- ${item.brand.toUpperCase()}`}
              body={`${item.brand.toUpperCase()}: ${
                item.lensType ? item.lensType : item.frameType
              } ${item.model ? `MODEL:  ${item.model}` : ""}`}
              description={`
              ${item.color ? `Color: ${item.color.toUpperCase()}` : ""} 
                ${item.gender ? `Gender: ${item.gender}` : ""}
                ${item.frameForm ? `Form: ${item.frameForm}` : ""}
                ${item.size ? `Size: ${item.size}` : ""}
              `}
              price={item.price}
              category={item.category}
              disponibility={item.order ? "order Now" : "in Stock"}
              id={item.id}
              reviews={item.reviews}
              stars={item.stars}
            />
          );
        })}
      </div>
      <div className="col-md-3 cart-order-total">
        <CartDetails />
      </div>
    </div>
  );
};

export default Cart;
