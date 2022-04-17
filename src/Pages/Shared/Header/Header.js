import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
// import logo from "../../../images/logo2.png";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth)
  return (
    <div className="container d-flex justify-space-between align-items-center">
      <div>
        <img className="w-25 m-3" src="" alt="" />
      </div>
      <div className="link-container">
        {user? <button onClick={()=>signOut(auth)}>Logout</button>:          <Link className="text-dark" to="/login">Login</Link>
}
          <Link className="signup" to="/signup">Sign Up</Link>
          <Link to="/test">test</Link>
      </div>
    </div>
  );
};

export default Header;
