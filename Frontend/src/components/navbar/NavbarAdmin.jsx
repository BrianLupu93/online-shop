import React from "react";
import { Link } from "react-router-dom";

const NavbarAdmin = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary px-5 fixed-top opacity-75 ">
        <div className="container-fluid px-3">
          <a className="navbar-brand px-5" href="/">
            e-SHOP
          </a>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 px-5">
              <li className="nav-item ">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/cart"
                >
                  Products
                </Link>
              </li>

              <li className="nav-item ">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/cart"
                >
                  Orders
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/cart"
                >
                  Clients
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarAdmin;