import React, { useContext, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn, googleSignIn, gitgubSignIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((res) => {
        const user = res.user;
        // console.log(user);
        form.reset();
        setError("");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });
    setError("");
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        const user = res.user;
        console.log(user);
        setError("");
        navigate(from, { replace: true });
      })
      .catch((err) => setError(err.message));
  };

  const handleGithubSignIn = () => {
    gitgubSignIn()
      .then((res) => {
        const user = res.user;
        console.log(user);
        setError("");
        navigate(from, { replace: true });
      })
      .catch((err) => setError(err.message));
  };

  return (
    <Container>
      <div className="shadow px-3 py-4 my-5 rounded form-width mx-auto">
        <h4 className="text-dark text-center">Please Login Now</h4>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3 " controlId="formBasicEmail">
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
            New to HeroCoders? please{" "}
            <Link to="/register" className="text-decoration-none">
              Register
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

export default Login;
