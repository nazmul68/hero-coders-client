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
    <section style={{ marginTop: "3rem" }}>
      <footer className="bg-light py-3">
        <div className="text-center py-3">
          <div>
            <p>Get connected with us </p>
          </div>
          <div>
            <a
              className="mx-3"
              href="https://www.facebook.com/profile.php?id=100017560637039"
            >
              <FaFacebook className="text-info fw-bold  fs-3"></FaFacebook>
            </a>
            <a
              className="mx-3"
              href="https://www.linkedin.com/in/nazmul-sujon-39647b244/"
            >
              <FaLinkedinIn className="text-info fw-bold  fs-3"></FaLinkedinIn>
            </a>
            <a className="mx-3" href="https://github.com/nazmul68">
              <FaGithub className="text-info fw-bold  fs-3"></FaGithub>
            </a>
            <a
              className="mx-3"
              href="https://api.whatsapp.com/send/?phone=01776097768"
            >
              <FaWhatsapp className="text-info fw-bold  fs-3"></FaWhatsapp>
            </a>
            <a className="mx-3" href="https://www.instagram.com/nazmul_sujon/">
              <FaInstagram className="text-info fw-bold  fs-3"></FaInstagram>
            </a>
          </div>
        </div>
        <div className="about-us border-bottom border-2 ">
          <Row>
            <Col className="text-center my-auto h-100">
              <Link
                to="/"
                className="text-decoration-none fw-bold text-dark fs-3"
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
          <p className=" mb-0 text-center mt-3">
            © 2022 Copyright & all right reserved : HeroCoders
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
