import React from "react";

const Toast = ({ icon, title, body }) => {
  return (
    <div>
      <div
        aria-live="polite"
        aria-atomic="true"
        style={{ position: "relative", miNeight: "200px" }}
      >
        <div
          className="toast fade show"
          style={{ position: "absolute", top: "0", right: "0" }}
          data-bs-delay={500}
          data-bs-autoHide="true"
        >
          <div className="toast-header">
            {icon}
            <strong className="mr-auto">{title}</strong>

            <button
              type="button"
              className="ml-2 mb-1 close"
              data-bs-dismiss="toast"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="toast-body">{body}</div>
        </div>
      </div>
    </div>
  );
};

export default Toast;
