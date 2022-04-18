import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import google from "../../../images/google.png";
import './SocialLogin.css'

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  
  if (user) {
    navigate('/home');
}
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center">
        <div style={{ height: "1px" }} className="line "></div>
        <p className=" px-2">or</p>
        <div style={{ height: "1px" }} className="line "></div>
      </div>
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="google w-25 d-block mx-auto my-2"
        >
          <img style={{ width: "25px" }} src={google} alt="" />
          <span className="px-2">Sign In with google</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
