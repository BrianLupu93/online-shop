import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { fetchLogin } from "../../Slices/authSlice";
import { useDispatch, useSelector } from "react-redux";

import Spinner from "../../utils/spinner/Spinner";

const Login = () => {
  const fetching = useSelector((state) => state.auth.fetching);
  const userId = useSelector((state) => state.auth.userId);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (userId) navigate("/");
  }, [userId]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    dispatch(fetchLogin(data));
  };

  return (
    <div className="login-container">
      <a className=" text-center text-body text-decoration-none" href="/">
        <h3>e-SHOP</h3>
      </a>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="email1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            {...register("user", {
              required: { value: true, message: "Email adress is required!" },
            })}
          />
          {errors.user && (
            <p className="error-message">{errors.user.message}</p>
          )}
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            {...register("pwd", {
              required: {
                value: true,
                message: "The password is required!",
              },
            })}
          />
          {errors.pwd && <p className="error-message">{errors.pwd.message}</p>}
        </div>
        <div className="mb-3 form-check">
          <label className="form-check-label" htmlFor="exampleCheck1">
            Don't have an account?
          </label>
          <Link to="/register">Register Now</Link>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <Spinner
        display={fetching === "undefined" || !fetching ? "none" : "block"}
        message={"Login..."}
      />
    </div>
  );
};

export default Login;
