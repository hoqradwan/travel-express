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
    <div className="container d-flex justify-content-between align-items-center my-3">
      <NavbarBrand as={Link} to="/">
        <h2 className="logo">TraveLExpress</h2>
      </NavbarBrand>
      <div className="link-container">
        <Link to="/blogs">Blogs</Link>
        <Link to="/about">About</Link>

        {user ? (
          <a style={{cursor:"pointer"}} onClick={() => signOut(auth)}>Log out</a>
        ) : (
          <Link to="/login">Login</Link>
        )}
        <Link to="/signup">
          <button className="signup"> Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
