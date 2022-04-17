import React, { useEffect, useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";

const SignUp = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    confirmPass: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  });
  const [createUserWithEmailAndPassword, user, loading, hookError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
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
  const handlePasswordChange = (e) => {
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
  const handleConfirmPasswordChange = (e) => {
    if (e.target.value === userInfo.password) {
      setUserInfo({ ...userInfo, confirmPass: e.target.value });
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({ ...errors, password: "Passwords don't match" });
      setUserInfo({ ...userInfo, confirmPass: "" });
    }
  };

  const handleSubmit = (e) => {
    createUserWithEmailAndPassword(userInfo.email, userInfo.password);

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
        />
        {errors?.email && <p>{errors.email}</p>}
        <input
          className="form-control mt-2"
          onChange={handlePasswordChange}
          placeholder="Password"
          type="password"
          name="password"
          id=""
        />
        {errors?.password && <p>{errors.password}</p>}
        <input
          className="form-control my-2"
          onChange={handleConfirmPasswordChange}
          placeholder="Confirm password"
          type="password"
          name="confirm-password"
          id=""
        />
        <button className="login-btn">Sign up</button>
        {/* {error && <p>{error}</p>} */}
        {hookError && <p>{hookError?.message}</p>}
        <ToastContainer />
        <p>
          Already have an account? <Link style={{color: "#f9676b"}} className="text-decoration-none" to="/login">Please login</Link>
        </p>
      </form>
      <SocialLogin></SocialLogin>
    </>
  );
};

export default SignUp;
