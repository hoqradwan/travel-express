import React, { useEffect, useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  });
  const [signInWithEmailAndPassword, user, loading, hookError] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const handleEmailBlur = (e) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(e.target.value);
    if (validEmail) {
      setUserInfo({ ...userInfo, email: e.target.value });
      setErrors({ ...errors, email: "" });
    } else {
      setErrors({ ...errors, email: "invalid mail" });
      setUserInfo({ ...userInfo, email: "" });
    }
  };
  const handlePasswordBlur = (e) => {
    const passwordRegex = /.{6,}/;
    const validPassword = passwordRegex.test(e.target.value);
    if (validPassword) {
      setUserInfo({ ...userInfo, password: e.target.value });
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({ ...errors, password: "minimum 6 characters" });
      setUserInfo({ ...userInfo, password: "" });
    }
  };
  const handleSubmit = (e) => {
    signInWithEmailAndPassword(userInfo.email, userInfo.password);

    e.preventDefault();
  };
  useEffect(() => {
    if (hookError) {
      toast(hookError?.message);
    }
  }, [hookError]);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  useEffect(() => {
    if (user) {
      navigate(from);
    }
  }, [user]);
  const resetPassword = async () => {
    if (userInfo.email) {
      await sendPasswordResetEmail(userInfo.email);
      toast("Sent email");
    } else {
      toast("please enter your email address");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="mx-auto w-25 mt-5">
        <input
          className="form-control"
          onChange={handleEmailBlur}
          placeholder="Email Address"
          type="email"
          name="email"
          id=""
          required
        />
        {errors?.email && <p className="text-danger">{errors.email}</p>}
        <input
          className="form-control my-2"
          onChange={handlePasswordBlur}
          placeholder="Password"
          type="password"
          name="password"
          id=""
          required
        />
        {errors?.password && <p className="text-danger">{errors.password}</p>}

        <button className="login-btn">Login</button>
        {hookError && <p className="text-danger">{hookError?.message}</p>}
        <ToastContainer />
        <p className="mt-2">
          Don't have an account?{" "}
          <Link
            style={{ color: "#f9676b" }}
            className="text-decoration-none"
            to="/signup"
          >
            Sign up first
          </Link>
        </p>
        <p>
          Forget Password?{" "}
          <button
            className="btn btn-link text-danger  text-decoration-none"
            onClick={resetPassword}
          >
            Reset Password
          </button>{" "}
        </p>
      </form>

      <SocialLogin></SocialLogin>
    </>
  );
};

export default Login;
