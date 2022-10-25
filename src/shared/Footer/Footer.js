import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegHandPointRight,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section style={{ marginTop: "3rem" }} className="container-fluid">
      <footer className="bg-light py-3">
        <div className="text-center py-3">
          <h6 className="p-1">Get connected with us </h6>
          <div>
            <a
              className="mx-3"
              href="https://www.facebook.com/profile.php?id=100017560637039"
            >
              <FaFacebook className="text-primary fw-bold  fs-3"></FaFacebook>
            </a>
            <a
              className="mx-3"
              href="https://www.linkedin.com/in/nazmul-sujon-39647b244/"
            >
              <FaLinkedinIn className="text-primary fw-bold  fs-3"></FaLinkedinIn>
            </a>
            <a className="mx-3" href="https://github.com/nazmul68">
              <FaGithub className="text-primary fw-bold  fs-3"></FaGithub>
            </a>
            <a
              className="mx-3"
              href="https://api.whatsapp.com/send/?phone=01776097768"
            >
              <FaWhatsapp className="text-primary fw-bold  fs-3"></FaWhatsapp>
            </a>
            <a className="mx-3" href="https://www.instagram.com/nazmul_sujon/">
              <FaInstagram className="text-primary fw-bold  fs-3"></FaInstagram>
            </a>
          </div>
        </div>
        <div className="about-us border-bottom border-2 ">
          {/* only visible on mobile part start */}
          <section className="text-center my-3 h-100 d-md-none">
            <Link
              to="/"
              className="text-decoration-none fw-bold text-dark fs-3"
            >
              <img
                src="https://i.ibb.co/w4ZYc0V/HC-logo.png"
                width="50"
                height="50"
                className="d-inline-block"
                alt=""
              />
              HeroCoders
            </Link>
          </section>
          {/* only visible on mobile part end */}
          <Row>
            <Col className="text-center my-auto h-100 d-none d-md-block">
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
            {/* courses section start */}
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

            {/* more about section start */}
            <Col className="mt-3">
              <div className="text-center">
                <Link
                  to="/about"
                  className=" text-decoration-none fw-bold text-dark"
                >
                  MORE ABOUT
                </Link>
              </div>
              <section className="d-flex justify-content-center">
                <div>
                  <div className="d-flex align-items-center mt-2">
                    <p className="me-2 fs-4 text-seondary">
                      <FaMapMarkerAlt />
                    </p>
                    <p className="fw-semibold">Level-4, 28, Mirpur, Dhaka</p>
                  </div>
                  <div className="d-flex  align-items-center">
                    <p className="me-2 fs-4 text-seondary">
                      <FaEnvelope />
                    </p>
                    <p className="fw-semibold">info@hero.coders.com</p>
                  </div>
                  <div className="d-flex  align-items-center">
                    <p className="me-2 fs-4 text-seondary">
                      <FaPhoneAlt />
                    </p>
                    <div>
                      <div>
                        <span>+8801776097768</span>
                        <br />
                        <span>+8801825293342</span>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="d-flex  align-items-center">
                    <p className="me-2 fs-4 text-seondary">
                      <FaRegHandPointRight />
                    </p>
                    <p>Terms || Condition</p>
                  </div>
                </div>
              </section>
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
