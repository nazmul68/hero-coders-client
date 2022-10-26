import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";

const CheckoutPage = () => {
  const courseDetails = useLoaderData();
  const { name, fees } = courseDetails;
  return (
    <div>
      <Card className="my-5 mx-auto" style={{ width: "30rem" }}>
        <Card.Header className="text-center border-0 fw-bold fs-2 fst-italic">
          CHECKOUT
        </Card.Header>
        <Card.Body className="text-center py-4 px-5">
          <Card.Title className="px-5 mt-3">{name}</Card.Title>
          <h6>Fees: {fees}</h6>
          <Link to="/home">
            <Button variant="primary" className="px-5 mt-3">
              Go Back Home
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CheckoutPage;
