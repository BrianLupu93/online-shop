import React from "react";

const Modal = ({
  display,
  icon,
  title,
  body,
  btn1,
  btn2,
  closeFunction,
  fun1,
  fun2,
}) => {
  return (
    <div>
      <div
        style={{ display: display }}
        className="modal show"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        role="dialog"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                <span>{icon}</span> {title}
              </h1>
              <button
                onClick={closeFunction}
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{body}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={fun1}
              >
                {btn1}
              </button>
              <button type="button" className="btn btn-primary" onClick={fun2}>
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
