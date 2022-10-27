import React, { useContext, useState } from "react";
import "./Register.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { FaGithub, FaGoogle } from "react-icons/fa";

//

const Register = () => {
  const [error, setError] = useState("");
  const { createUser, googleSignIn, gitgubSignIn, updateUserProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoURL, email, password);

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        // console.log(user);
        form.reset();
        setError("");
        navigate("/login");
        handleUpdateUserProfile(name, photoURL);
      })
      .catch((err) => {
        // console.error(err);
        setError(err.message);
      });
  };

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((err) => setError(err.message));
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        const user = res.user;
        console.log(user);
        setError("");
      })
      .catch((err) => setError(err.message));
  };

  const handleGithubSignIn = () => {
    gitgubSignIn()
      .then((res) => {
        const user = res.user;
        console.log(user);
        setError("");
      })
      .catch((err) => setError(err.message));
  };

  return (
    <Container>
      <div className="shadow px-3 py-4 my-5 rounded form-width mx-auto">
        <h4 className="text-dark text-center">Please Register Now</h4>
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>FullName</Form.Label>
            <Form.Control type="text" name="name" placeholder="Enter name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicURL">
            <Form.Label>PhotoURL</Form.Label>
            <Form.Control type="text" name="photoURL" placeholder="photoURL" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Text className="text-danger">{error ? error : ""}</Form.Text>
          </Form.Group>

          <Button
            className="px-5 mb-3 fw-semibold"
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
          <p>
            Already on HeroCoders? please{" "}
            <Link to="/login" className="text-decoration-none">
              Login
            </Link>
          </p>
        </Form>
        <Row className="mt-4">
          <Col md={5}>
            <Button
              onClick={handleGoogleSignIn}
              className="fw-semibold px-2"
              variant="outline-primary"
            >
              <FaGoogle className="me-5 fw-semibold fs-5" />
              <span>Continue with Google </span>
            </Button>
          </Col>
          <Col md={2} className=" ">
            <p className="fw-semibold px-2 mt-2 ms-3">or</p>
          </Col>
          <Col md={5} className=" ">
            <Button
              onClick={handleGithubSignIn}
              className="fw-semibold px-2"
              variant="outline-primary"
            >
              <FaGithub className="me-5 fw-semibold fs-5" />
              <span>Continue with Github </span>
            </Button>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Register;
