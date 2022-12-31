import React from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  return (
    <div className="register-container">
      <h1>Register</h1>
      <form
        className="row g-3 needs-validation"
        onSubmit={() => navigate("/login")}
      >
        <div className="col-md-4">
          <label htmlFor="validationCustom01" className="form-label">
            First name
          </label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustom02" className="form-label">
            Last name
          </label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustomUsername" className="form-label">
            E-mail
          </label>
          <div className="input-group has-validation">
            <input type="email" className="form-control" />
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="validationCustom03" className="form-label">
            Street and Number
          </label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-md-3">
          <label htmlFor="validationCustom04" className="form-label">
            City
          </label>
          <input type="text" className="form-control" />
          <div className="invalid-feedback">Please select a valid state.</div>
        </div>
        <div className="col-md-3">
          <label htmlFor="validationCustom05" className="form-label">
            Zip
          </label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-12">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" />
            <label className="form-check-label" htmlFor="invalidCheck">
              Agree to terms and conditions
            </label>
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
