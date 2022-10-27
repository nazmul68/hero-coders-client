import React from "react";
import "./Header.css";
import { useState } from "react";
import Swal from "sweetalert2";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const userImg = user?.photoURL;
  console.log(user);
  const [theme, setTheme] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("log out successful");
      })
      .catch((err) => console.error(err));
  };

  const toggleTheme = () => {
    Swal.fire("We will add this feature soon...");
    setTheme(!theme);
  };
  return (
    <section className="text-center">
      <Navbar
        collapseOnSelect
        bg="light"
        variant="light"
        expand="lg"
        className="my-auto h-100 py-3"
      >
        <Container>
          <Navbar.Brand>
            <Link
              to="/"
              className="text-decoration-none fw-bold text-dark d-flex align-items-center"
            >
              <img
                src="https://i.ibb.co/w4ZYc0V/HC-logo.png"
                width="40"
                height="40"
                className="d-inline-block align-top"
                alt=""
              />
              HeroCoders
            </Link>
          </Navbar.Brand>
          {/* only for mobile view start */}
          <Button
            variant={theme ? "light" : "dark"}
            onClick={toggleTheme}
            className="rounded-5 border border-3 ms-2  d-md-none"
          >
            {theme ? "light" : "dark"}
          </Button>
          <nav className=" d-md-none">
            {user ? (
              <OverlayTrigger
                key="bottom"
                placement="bottom"
                overlay={
                  <Tooltip id="tooltip-bottom">{user.displayName}</Tooltip>
                }
              >
                <img
                  src={userImg}
                  width="30"
                  height="30"
                  className="d-inline-block align-top rounded-circle"
                  alt="userimage"
                />
              </OverlayTrigger>
            ) : (
              <div>
                <FaUserCircle className="fs-2" />
              </div>
            )}
          </nav>
          {/* only for mobile view end */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ps-md-5 ">
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive
                    ? "text-info  border-bottom border-info text-decoration-none fw-semibold mx-3 "
                    : "text-dark text-decoration-none fw-semibold mx-3"
                }
              >
                HOME
              </NavLink>
              <NavLink
                to="/courses"
                className={({ isActive }) =>
                  isActive
                    ? "text-info  border-bottom border-info text-decoration-none fw-semibold mx-3 "
                    : "text-dark text-decoration-none fw-semibold mx-3"
                }
              >
                COURSES
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-info  border-bottom border-info text-decoration-none fw-semibold mx-3 "
                    : "text-dark text-decoration-none fw-semibold mx-3"
                }
              >
                ABOUT US
              </NavLink>
              <NavLink
                to="/faq"
                className={({ isActive }) =>
                  isActive
                    ? "text-info border-bottom border-info text-decoration-none fw-semibold mx-3 "
                    : "text-dark text-decoration-none fw-semibold mx-3"
                }
              >
                FAQ
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive
                    ? "text-info  border-bottom border-info text-decoration-none fw-semibold mx-3"
                    : "text-dark  text-decoration-none fw-semibold mx-3"
                }
              >
                BLOG
              </NavLink>
            </Nav>
            <Nav>
              {user?.uid ? (
                <>
                  <Button
                    className="text-decoration-none fw-semibold mx-3"
                    onClick={handleLogOut}
                    variant="outline-secondary"
                  >
                    Log out
                  </Button>
                </>
              ) : (
                <>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-info  border-bottom border-info text-decoration-none fw-semibold mx-3"
                        : "text-dark  text-decoration-none fw-semibold mx-3"
                    }
                    to="/login"
                  >
                    Login
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-info  border-bottom border-info text-decoration-none fw-semibold mx-3"
                        : "text-dark  text-decoration-none fw-semibold mx-3"
                    }
                    to="register"
                  >
                    Register
                  </NavLink>
                </>
              )}
            </Nav>
            <Button
              variant={theme ? "light" : "dark"}
              onClick={toggleTheme}
              className="rounded-5 fw-semibold border border-3 mx-5 d-none d-md-block"
            >
              {theme ? "light" : "dark"}
            </Button>
            <nav className="d-none d-md-block">
              {user ? (
                <OverlayTrigger
                  key="bottom"
                  placement="bottom"
                  overlay={
                    <Tooltip id="tooltip-bottom">{user.displayName}</Tooltip>
                  }
                >
                  <img
                    src={userImg}
                    width="40"
                    height="40"
                    className="d-inline-block align-top rounded-circle"
                    alt="userImage"
                  />
                </OverlayTrigger>
              ) : (
                <div>
                  <FaUserCircle className="fs-2" />
                </div>
              )}
            </nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
};

export default Header;
