import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import Course from "../Course/Course";

const Courses = () => {
  const courses = useLoaderData();
  console.log(courses);
  return (
    <div>
      <h2 className="text-center fw-bold my-4">Our All Courses</h2>
      <Container fluid>
        <Row className="g-4">
          <Col md={9}>
            <Row xs={1} md={3} className="g-4">
              {courses.map((course) => (
                <Course key={course.id} course={course}></Course>
              ))}
            </Row>
          </Col>

          <Col md={3}>
            <div
              className="bg-light py-4 rounded-2 sticky-lg-top"
              // style={{ marginTop: "5rem" }}
            >
              <h5 className="text-center">SEE DETAILS</h5>
              <div className="d-flex justify-content-center ">
                <ul className="py-3">
                  {courses.map((course) => (
                    <li className="py-3 fw-bold" key={course.id}>
                      <Link
                        to={`/course/${course.id}`}
                        className="text-decoration-none"
                      >
                        {course.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
