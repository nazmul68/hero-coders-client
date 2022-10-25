import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
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
              <NavLink eventKey={2}>Dank memes</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
};

export default Header;
