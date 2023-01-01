import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import url from "../../URL_Routes";
import Modal from "../../utils/Modal/Modal";

const Register = () => {
  const [hideModal, setHideModal] = useState(true);
  const [fetchMessage, setFetchMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setHideModal(false);
  }, [fetchMessage]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const postData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      adress: {
        adress: data.adress,
        city: data.city,
        zip: data.zip,
      },
      pwd: data.password,
    };

    try {
      const response = await axios.post(url.register, postData);
      setFetchMessage("sdfggfg");
    } catch (err) {
      setFetchMessage(err.message);
    }
    reset();
  };

  return (
    <div className="register-container">
      <h1>Register</h1>
      <form className="row g-3 " onSubmit={handleSubmit(onSubmit)}>
        <div className="col-md-4">
          <label htmlFor="firstName" className="form-label">
            First name
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
        <div className="col-md-4">
          <label htmlFor="lastName" className="form-label">
            Last name
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
        <div className="col-md-4">
          <label htmlFor="email" className="form-label">
            E-mail
          </label>

          <input
            type="email"
            className="form-control"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
            })}
          />
          {errors.email && (
            <p className="error-message">{errors.email.message}</p>
          )}
        </div>
        <div className="col-md-6">
          <label htmlFor="adress" className="form-label">
            Adress
          </label>
          <input
            type="text"
            className="form-control"
            {...register("adress", {
              required: {
                value: true,
                message: "Adress is required",
              },
            })}
          />
          {errors.adress && (
            <p className="error-message">{errors.adress.message}</p>
          )}
        </div>
        <div className="col-md-3">
          <label htmlFor="city" className="form-label">
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
          <div className="invalid-feedback">Please select a valid state.</div>
        </div>
        <div className="col-md-3">
          <label htmlFor="zip" className="form-label">
            Zip
          </label>
          <input
            type="text"
            className="form-control"
            {...register("zip", {
              required: {
                value: true,
                message: "ZIP is required",
              },
            })}
          />
          {errors.zip && <p className="error-message">{errors.zip.message}</p>}
        </div>
        <div className="col-md-6">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="text"
            className="form-control"
            {...register("password", {
              required: {
                value: true,
                message: "Password is required",
              },
            })}
          />
          {errors.password && (
            <p className="error-message">{errors.password.message}</p>
          )}
        </div>
        <div className="col-md-6">
          <label htmlFor="repeat-password" className="form-label">
            Confirm Password
          </label>
          <input
            type="text"
            className="form-control"
            {...register("confirmPassword", {
              required: {
                value: true,
                message: "Confirm Password is required",
              },
            })}
          />
          {errors.confirmPassword && (
            <p className="error-message">{errors.confirmPassword.message}</p>
          )}
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              {...register("agreement", {
                required: true,
                message: "Need to AGREE the Terms",
              })}
            />
            {errors.agreement && (
              <p className="error-message">{errors.agreement.message}</p>
            )}
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
      <Modal
        display={!hideModal ? "none" : "block"}
        title={"Success"}
        body={fetchMessage}
        btn1={"Proceed to e-Shop"}
        btn2={"Proceed to Login"}
      />
    </div>
  );
};

export default Register;
