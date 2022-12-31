import React from "react";
import { useNavigate } from "react-router-dom";

const OrderDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="order-details-container">
      <h1 className="mb-5">Order Details</h1>
      <form onSubmit={() => navigate("/")}>
        <div className="invoice-details row g-3">
          <h5>Invoice</h5>
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
          <div className="col-md-3">
            <label htmlFor="inputPhone" className="form-label">
              Phone
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label" htmlFor="gridCheck">
                The invoice data are the same with the user data
              </label>
            </div>
          </div>
        </div>
        <div className="shipping-details row g-3">
          <h5>Shipping</h5>
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
          <h5>Payment</h5>
          <div className="col-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label" htmlFor="gridCheck">
                <strong>Cash </strong> on delivery
              </label>
            </div>
          </div>
          <div className="col-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label" htmlFor="gridCheck">
                <strong>Bank Transfer </strong>
              </label>
            </div>
          </div>
          <div className="col-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label" htmlFor="gridCheck">
                <strong>Online</strong> Credit card
              </label>
            </div>
          </div>

          {/*  Depends on the payment method */}

          <div className="row g-3">
            <div className="col-12">
              <div className="form-check ">
                <strong>Bank Details: </strong>

                <ul className="list-group list-group-flush text-center ">
                  <li className="list-group-item">
                    Beneficiary: e-Shop Online Products LLC
                  </li>
                  <li className="list-group-item">
                    Account: EX00 0000 4000 0000 6000 25
                  </li>
                  <li className="list-group-item">
                    Bank: The Beneficiary Bank
                  </li>
                  <li className="list-group-item">Sort Code: SORT220000</li>
                  <li className="list-group-item">
                    Reference: Your Order Confirmation Number
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row g-3">
            <div className="col-12">
              <div className="form-check">
                <strong>Credit Card </strong>
                <div className="row gy-3">
                  <div className="col-md-6">
                    <label for="cc-name" className="form-label">
                      Name on card
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-name"
                      placeholder=""
                      required=""
                    />
                    <small className="text-muted">
                      Full name as displayed on card
                    </small>
                    <div className="invalid-feedback">
                      Name on card is required
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label for="cc-number" className="form-label">
                      Credit card number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-number"
                      placeholder=""
                      required=""
                    />
                    <div className="invalid-feedback">
                      Credit card number is required
                    </div>
                  </div>

                  <div className="col-md-3">
                    <label for="cc-expiration" className="form-label">
                      Expiration
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-expiration"
                      placeholder=""
                      required=""
                    />
                    <div className="invalid-feedback">
                      Expiration date required
                    </div>
                  </div>

                  <div className="col-md-3">
                    <label for="cc-cvv" className="form-label">
                      CVV
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-cvv"
                      placeholder=""
                      required=""
                    />
                    <div className="invalid-feedback">
                      Security code required
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Place Order / Confirm and Pay (Total)
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrderDetails;
