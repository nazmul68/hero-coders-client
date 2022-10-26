import React from "react";
import { Button, Card, Col } from "react-bootstrap";

const Course = ({ course }) => {
  const { img, name, duration, total_class, fees } = course;
  console.log(name, duration, total_class, fees);
  return (
    <div>
      <Col>
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>
              <h3 className="card-title">{name}</h3>
            </Card.Title>
            <Card.Text>
              <div className="d-flex justify-content-between align-items-center p-2">
                <h6 className="card-text ">
                  Total_Class <span className="text-danger">{total_class}</span>
                </h6>
                <h6 className="card-text ">
                  Fees <span className="text-danger">{fees} </span>
                </h6>
              </div>
            </Card.Text>
            <div className="text-center">
              <Button className="btn btn-primary w-100 fw-semibold py-2">
                Course Details
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Course;
