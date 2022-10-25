import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
    setTheme(!theme);
  };
  return (
    <section className="text-center">
      <Navbar
        collapseOnSelect
        bg="light"
        variant="light"
        expand="lg"
        className="my-auto h-100 py-4"
      >
        <Container>
          <Navbar.Brand>
            <Link to="/" className="text-decoration-none fw-bold text-dark">
              <img
                src="https://i.ibb.co/w4ZYc0V/HC-logo.png"
                width="30"
                height="30"
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
          {/* only for mobile view end */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ps-md-5 ">
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
                    : "text-dark text-decoration-none fw-semibold mx-3"
                }
              >
                BLOG
              </NavLink>
            </Nav>
            <Nav>
              <NavLink>More deets</NavLink>
              <NavLink>Dank memes</NavLink>
            </Nav>
            <Button
              variant={theme ? "light" : "dark"}
              onClick={toggleTheme}
              className="rounded-5 fw-bold border border-3 ms-2 d-none d-md-block"
            >
              {theme ? "light" : "dark"}
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
};

export default Header;
