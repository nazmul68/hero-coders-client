import React from "react";
import { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const CheckoutPage = () => {
  const courseDetails = useLoaderData();
  const { name, fees } = courseDetails;
  const { user } = useContext(AuthContext);
  const userImg = user.photoURL;

  const handleProceed = () => {
    Swal.fire("Paymet integration coming soon!");
  };

  return (
    <div>
      <Card className="my-5 mx-auto form-width">
        <Card.Header className="text-center border-0 fw-bold fs-2 fst-italic">
          CHECKOUT
        </Card.Header>
        <Card.Body className="text-center py-4 px-5">
          <div>
            {user?.uid ? (
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src={userImg}
                  width="30"
                  height="30"
                  className="d-inline-block rounded-circle mb-2"
                  alt="userImage"
                />
                <h5 className="text-uppercase ms-3">{user.displayName}</h5>
              </div>
            ) : (
              <></>
            )}
          </div>
          <Card.Title className="px-5 mt-3">{name}</Card.Title>
          <h6>Fees: {fees}</h6>
          <Button
            onClick={handleProceed}
            variant="primary"
            className="px-5 mt-3"
          >
            Proceed
          </Button>
          <div className="mt-3">
            <Link to="/home">Go Back Home</Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CheckoutPage;
