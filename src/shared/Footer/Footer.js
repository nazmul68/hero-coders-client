import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="container-fluid " style={{ marginTop: "3rem" }}>
      <footer className="bg-light py-4">
        <div className="text-center py-3">
          <div>
            <p>Get connected with us </p>
          </div>
          <div>
            <a href="https://www.facebook.com/profile.php?id=100017560637039">
              <FaFacebook className="text-dark fw-bold mx-2 fs-4"></FaFacebook>
            </a>
            <a href="https://www.linkedin.com/in/nazmul-sujon-39647b244/">
              <FaLinkedinIn className="text-dark fw-bold mx-2 fs-4"></FaLinkedinIn>
            </a>
            <a href="https://github.com/nazmul68">
              <FaGithub className="text-dark fw-bold mx-2 fs-4"></FaGithub>
            </a>
            <a href="https://api.whatsapp.com/send/?phone=01776097768">
              <FaWhatsapp className="text-dark fw-bold mx-2 fs-4"></FaWhatsapp>
            </a>
            <a href="https://www.instagram.com/nazmul_sujon/">
              <FaInstagram className="text-dark fw-bold mx-2 fs-4"></FaInstagram>
            </a>
          </div>
        </div>
        <div className="about-us border-bottom border-2 ">
          <Row>
            <Col className="text-center my-auto h-100">
              <Link
                to="/"
                className="text-decoration-none fw-bold text-dark fs-3 "
              >
                <img
                  src="https://i.ibb.co/w4ZYc0V/HC-logo.png"
                  width="50"
                  height="50"
                  className="d-inline-block align-top"
                  alt=""
                />
                HeroCoders
              </Link>
            </Col>
            <Col className="mt-3 text-center">
              <Link
                to="/about"
                className=" text-decoration-none fw-bold text-dark text-center "
              >
                ABOUT US
              </Link>
              <p>about 1</p>
              <p>about 1</p>
              <p>about 1</p>
              <p>about 1</p>
              <p>about 1</p>
            </Col>
            <Col className="mt-3 text-center">
              <Link
                to="/courses"
                className=" text-decoration-none fw-bold text-dark  text-center "
              >
                COURSES
              </Link>
              <p>course 1</p>
              <p>course 1</p>
              <p>course 1</p>
              <p>course 1</p>
              <p>course 1</p>
              <p>course 1</p>
            </Col>
          </Row>
        </div>
        <div>
          <p className="text-center mt-4">
            © 2022 Copyright & all right reserved : HeroCoders
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
