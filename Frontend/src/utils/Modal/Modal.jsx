import React from "react";

const Modal = ({ display, title, body, btn1, btn2 }) => {
  return (
    <div>
      <div className="modal" tabIndex="-1" style={{ display: display }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>{body}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                {btn1}
              </button>
              <button type="button" className="btn btn-primary">
                {btn2}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
