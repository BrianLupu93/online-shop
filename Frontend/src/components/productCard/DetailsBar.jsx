import React from "react";

const DetailsBar = () => {
  return (
    <div className="details-bar-container mt-3">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            className="nav-link active text-decoration-none text-body"
            aria-current="page"
            href="/"
          >
            Tehnical Details
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-decoration-none text-body" href="/">
            Additional Information
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-decoration-none text-body" href="/">
            Product Description
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-decoration-none text-body" href="/">
            Customer reviews
          </a>
        </li>
      </ul>
    </div>
  );
};

export default DetailsBar;
