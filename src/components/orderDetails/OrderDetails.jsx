import React from "react";

const OrderDetails = () => {
  return (
    <div className="order-details-container">
      <h1 className="mb-5">Order Details</h1>
      <form>
        <div className="invoice-details row g-3">
          <h5>Invoice details</h5>
          <div className="col-md-6">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-6">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="1234 Main St"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">
              City
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputCity" className="form-label">
              State
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-2">
            <label htmlFor="inputZip" className="form-label">
              Zip
            </label>
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="shipping-details row g-3">
          <h5>Shipping details</h5>
          <div className="col-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label" htmlFor="gridCheck">
                Standard POST <strong>Free </strong> (7-9 days)
              </label>
            </div>
          </div>
          <div className="col-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label" htmlFor="gridCheck">
                UPS Ground <strong>7,99$ </strong> (5-7 days)
              </label>
            </div>
          </div>
          <div className="col-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label" htmlFor="gridCheck">
                FedEx Day<strong>9,99$ </strong> (3-5 days)
              </label>
            </div>
          </div>
          <div className="col-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label" htmlFor="gridCheck">
                UPS Air <strong>12,99$ </strong> (1-2 days)
              </label>
            </div>
          </div>
        </div>

        <div className="payment-details row g-3">
          <h5>Payment details</h5>
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrderDetails;
