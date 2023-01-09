import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";
import { BsBagFill } from "react-icons/bs";
import { fetchLogout } from "../../Slices/authSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartTotalNr = useSelector((state) => state.cart.cartItems.length);
  const userName = useSelector(
    (state) => `${state.account.firstName} ${state.account.lastName}`
  );
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleLogin = () => {
    if (isLoggedIn) {
      dispatch(fetchLogout());
    }

    if (!isLoggedIn) navigate("/login");
  };

  return (
    <div className="navbar-container ">
      <nav className=" navbar navbar-expand-lg bg-body-tertiary px-5  fixed-top opacity-75 ">
        <div className="container-fluid px-5">
          <Link className="navbar-brand " to="/">
            e-Shop
            <img src={logo} alt="logo" className="logo-image" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse px-5"
            id="navbarSupportedContent"
          >
            <form className="d-flex " role="search">
              <input
                className="form-control  me-2 search-bar"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-secondary" type="submit">
                Search
              </button>
            </form>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 px-5 mx-auto">
              <li className="nav-item dropdown mx-4">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {userName === "undefined undefined"
                    ? "Hello Guest"
                    : `Hello ${userName}`}
                </a>
                <ul className="dropdown-menu ">
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleLogin()}
                    >
                      {isLoggedIn ? "Logout" : "Login"}
                    </button>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      My Orders
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Favorite List
                    </a>
                  </li>
                  <li></li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Account Settings
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item ">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/cart"
                >
                  <div className="d-flex">
                    <BsBagFill style={{ fontSize: "1.5rem" }} />
                    <div className="bag-total">{cartTotalNr}</div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
