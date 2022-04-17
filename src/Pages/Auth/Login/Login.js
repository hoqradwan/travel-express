import React, { useEffect, useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

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
  //   const [registered, setRegistered] = useState(false);
  const [signInWithEmailAndPassword, user, loading, hookError] =
    useSignInWithEmailAndPassword(auth);
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
  /*    const handlePasswordReset = () => {
    sendPasswordResetEmail(auth, email).then(() => {
      console.log("reset");
    });
  }; */
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
  return (
    <>
      <form onSubmit={handleSubmit} className="mx-auto w-25 mt-5">
        <input
          onChange={handleEmailBlur}
          placeholder="Email Address"
          type="email"
          name="email"
          id=""
        />
        {errors?.email && <p>{errors.email}</p>}
        <input
          onChange={handlePasswordBlur}
          placeholder="Password"
          type="password"
          name="password"
          id=""
        />
        {errors?.password && <p>{errors.password}</p>}
      
        <button className="login-btn">Login</button>
        {/* {error && <p>{error}</p>} */}
        {hookError && <p>{hookError?.message}</p>}
        <ToastContainer />
        <p>Don't have an account? <Link to="/signup">Sign up first</Link></p>

      </form>
    </>
  );
};

export default Login;
