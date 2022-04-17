import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
import { NavbarBrand } from "react-bootstrap";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="container d-flex justify-content-between align-items-center">
      <NavbarBrand as={Link} to="/">
        <h2 className="logo">TraveLExpress</h2>
      </NavbarBrand>
      <div className="link-container">
        <Link className="text-dark" to="/blogs">
          Blogs
        </Link>
        <Link className="text-dark" to="/about">
          About
        </Link>

        {user ? (
          <button onClick={() => signOut(auth)}>Logout</button>
        ) : (
          <Link className="text-dark" to="/login">
            Login
          </Link>
        )}
        <Link className="signup" to="/signup">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Header;
