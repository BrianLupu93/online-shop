import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from "./components/hompage/Home";
import ProductDetails from "./components/productCard/ProductDetails";
import Navbar from "./components/navbar/Navbar";
import Cart from "./components/cart/Cart";
import OrderDetails from "./components/orderDetails/OrderDetails";
import HomeAdmin from "./components/hompage/HomeAdmin";

function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/order-details"
        element={
          <>
            <Navbar />
            <OrderDetails />
          </>
        }
      />
      <Route
        path="/cart"
        element={
          <>
            <Navbar />
            <Cart />
          </>
        }
      />
      <Route
        path="/product-details"
        element={
          <>
            <Navbar />
            <ProductDetails />
          </>
        }
      />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
