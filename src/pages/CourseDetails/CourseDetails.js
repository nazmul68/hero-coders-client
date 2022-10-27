import React from "react";
import "./CourseDetails.css";
import { Button, Card } from "react-bootstrap";
import { FaDownload } from "react-icons/fa";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

import Pdf from "react-to-pdf";

const ref = React.createRef();

const CourseDetails = () => {
  const courseDetails = useLoaderData();
  const navigate = useNavigate();

  const {
    id,
    img,
    name,
    description,
    topics,
    duration,
    total_class,
    projects,
  } = courseDetails;
  const [topic1, topic2, topic3, topic4, topic5, topic6] = topics;

  const handleNavigate = () => {
    navigate(`/courseDetails/${id}`);
  };
  return (
    <div className="d-flex justify-content-center">
      <div className="course-details">
        <section className="my-5 container ">
          <Card>
            <Card.Header>
              <div className="d-flex justify-content-evenly align-items-center">
                <h6>
                  Download details about <span>{courseDetails.name}</span> as
                  PDF
                </h6>
                <Link>
                  <Pdf targetRef={ref} filename="courseDetails.pdf">
                    {({ toPdf }) => (
                      <button
                        onClick={toPdf}
                        className="border px-5 rounded-3 btn-dark btn"
                      >
                        <FaDownload></FaDownload>
                      </button>
                    )}
                  </Pdf>
                </Link>
              </div>
            </Card.Header>
            {/* pdf area start  */}
            <div ref={ref}>
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
                    Projects: <span className="text-danger">{projects}</span>
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
                  <Button
                    onClick={handleNavigate}
                    variant="primary"
                    className="w-100"
                  >
                    Get premium access
                  </Button>
                </div>
              </Card.Body>
            </div>
            {/* pdf area end */}
          </Card>
        </section>
      </div>
    </div>
  );
};

export default CourseDetails;
