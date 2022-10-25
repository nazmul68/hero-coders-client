import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FaGraduationCap, FaUserGraduate } from "react-icons/fa";

const About = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1 className="fs-1 fw-bold">
            HeroCoders | Best IT Training Institute in Bangladesh
          </h1>
          <p className="border-start border-2 px-2 mt-3">
            HeroCoders is recognized as one of Bangladesh's best global skill
            development and IT training centres. The journey of HeroCoders
            started in 2014 with a big dream to bring applied education to the
            mass population at an affordable cost. The main purpose of
            HeroCoders is to facilitate the underprivileged, disadvantaged
            people, especially youth and women, with the best IT-related skills.
          </p>
        </Col>
        <Col>
          <div className="d-flex mt-4">
            <Card
              style={{ width: "12rem", height: "12rem" }}
              className="m-2 mx-auto "
            >
              <Card.Body>
                <FaGraduationCap className="fs-1 fw-bold text-info mx-auto w-100 my-2" />
                <Card.Title className="text-primary text-center mt-3 mb-2">
                  Graduate Students
                </Card.Title>
                <h3 className="fw-bold text-danger text-center">60k+</h3>
              </Card.Body>
            </Card>
            <Card
              style={{ width: "12rem", height: "12rem" }}
              className="m-2 mx-auto"
            >
              <Card.Body>
                <FaUserGraduate className="fs-1 fw-bold text-info mx-auto w-100 my-3" />
                <Card.Title className="text-primary text-center mt-3">
                  Expert Mentors
                  <h3 className="fw-bold text-danger text-center mt-3">40+</h3>
                </Card.Title>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
