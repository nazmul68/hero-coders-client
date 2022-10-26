import React from "react";
import "./CourseDetails.css";
import { Button, Card } from "react-bootstrap";
import { FaDownload } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const courseDetails = useLoaderData();
  const { img, name, description, topics, duration, total_class, fees } =
    courseDetails;
  const [topic1, topic2, topic3, topic4, topic5, topic6] = topics;
  return (
    <div className="d-flex justify-content-center">
      <div className="course-details">
        <section className="my-5 container ">
          <Card>
            <Card.Header>
              <div className="d-flex justify-content-evenly">
                <h6>
                  Download details about <span>{courseDetails.name}</span> as
                  PDF
                </h6>
                <Link>
                  <FaDownload></FaDownload>
                </Link>
              </div>
            </Card.Header>
            <Card.Img variant="top" src={img} className="img-fluid" />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <p>{description}</p>
              <div className="d-flex">
                <h5 className="me-3">
                  Duration: <span className="text-danger">{duration}</span>
                </h5>
                <h5 className="me-3">
                  Classes: <span className="text-danger">{total_class}</span>
                </h5>
                <h5 className="me-3">
                  Fees: <span className="text-danger">{fees}</span>
                </h5>
              </div>
              <div className="mt-3">
                <h5>What will you learn?</h5>
                <ul>
                  <li>{topic1}</li>
                  <li>{topic2}</li>
                  <li>{topic3}</li>
                  <li>{topic4}</li>
                  <li>{topic5}</li>
                  <li>{topic6}</li>
                </ul>
              </div>
              <div className="text-center mt-4">
                <Button variant="primary" className="w-100">
                  Go to checkout
                </Button>
              </div>
            </Card.Body>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default CourseDetails;
