import React from "react";
import { Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Course from "../Course/Course";

const Courses = () => {
  const courses = useLoaderData();
  console.log(courses);
  return (
    <div>
      <h2 className="text-center fw-bold my-4">Our All Courses</h2>
      <Container>
        <Row xs={1} md={3} className="g-4">
          {courses.map((course) => (
            <Course key={course.id} course={course}></Course>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
