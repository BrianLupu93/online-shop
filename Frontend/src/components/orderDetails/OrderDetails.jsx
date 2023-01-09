import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const OrderDetails = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="order-details-container">
      <h1 className="mb-5">Order Details</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="invoice-details row g-3">
          <h5>Invoice</h5>
          <div className="col-md-6">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              {...register("lastName", {
                required: {
                  value: true,
                  message: "Last Name is required",
                },
              })}
            />
            {errors.lastName && (
              <p className="error-message">{errors.lastName.message}</p>
            )}
          </div>
          <div className="col-md-6">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              {...register("firstName", {
                required: {
                  value: true,
                  message: "First Name is required",
                },
              })}
            />
            {errors.firstName && (
              <p className="error-message">{errors.firstName.message}</p>
            )}
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="1234 Main St"
              {...register("streetAndNum", {
                required: {
                  value: true,
                  message: "Adress is required",
                },
              })}
            />
            {errors.streetAndNum && (
              <p className="error-message">{errors.streetAndNum.message}</p>
            )}
          </div>
          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">
              City
            </label>
            <input
              type="text"
              className="form-control"
              {...register("city", {
                required: {
                  value: true,
                  message: "City is required",
                },
              })}
            />
            {errors.city && (
              <p className="error-message">{errors.city.message}</p>
            )}
          </div>
          <div className="col-md-4">
            <label htmlFor="inputCity" className="form-label">
              State
            </label>
            <input
              type="text"
              className="form-control"
              {...register("state", {
                required: {
                  value: true,
                  message: "State is required",
                },
              })}
            />
            {errors.state && (
              <p className="error-message">{errors.state.message}</p>
            )}
          </div>
          <div className="col-md-2">
            <label htmlFor="inputZip" className="form-label">
              Zip
            </label>
            <input
              type="text"
              className="form-control"
              {...register("zip", {
                required: {
                  value: true,
                  message: "Zip is required",
                },
              })}
            />
            {errors.zip && (
              <p className="error-message">{errors.zip.message}</p>
            )}
          </div>
          <div className="col-md-3">
            <label htmlFor="inputPhone" className="form-label">
              Phone
            </label>
            <input
              type="text"
              className="form-control"
              {...register("phone", {
                required: {
                  value: true,
                  message: "Phone is required",
                },
              })}
            />
            {errors.phone && (
              <p className="error-message">{errors.phone.message}</p>
            )}
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
          <div className="col-12">
            <select
              className="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
              {...register("shipping")}
            >
              <option value={{ shipping: "standard", price: 0 }}>
                Standard POST Free (7-9 days)
              </option>
              <option value={{ shipping: "upsGround", price: 7.99 }}>
                UPS Ground 7,99$ (5-7 days)
              </option>
              <option value={{ shipping: "feedEx", price: 9.99 }}>
                FedEx Day9,99$ (3-5 days)
              </option>
              <option value={{ shipping: "upsAir", price: 12.99 }}>
                UPS Air 12,99$ (1-2 days)
              </option>
            </select>
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
