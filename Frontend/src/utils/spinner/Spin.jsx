import React from "react";

const Spinner = ({ display, message }) => {
  return (
    <div style={{ display: display }}>
      <div className="d-flex align-items-center justify-content-center mt-5">
        <div className="spinner-border text-primary mx-3" role="status"></div>
        <span className="sr-only">
          <strong>{message}</strong>
        </span>
      </div>
    </div>
  );
};

export default Spinner;
