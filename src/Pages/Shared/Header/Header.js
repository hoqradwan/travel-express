import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      <Navbar className="navbar" collapseOnSelect expand="lg" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <h2 className="logo">TraveLExpress</h2>
          </Navbar.Brand>

          <div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Nav.Link as={Link} to="blogs">
                  Blogs
                </Nav.Link>
                <Nav.Link as={Link} to="about">
                  About
                </Nav.Link>
                {user ? (
                  <Nav.Link onClick={() => signOut(auth)}>Log out</Nav.Link>
                ) : (
                  <Nav.Link as={Link} to="login">
                    Login
                  </Nav.Link>
                )}
                <Nav.Link as={Link} to="signup">
                  <button className="signup"> Sign Up</button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

