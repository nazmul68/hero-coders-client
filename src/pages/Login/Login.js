import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        form.reset();
        setError("");
      })
      .catch((err) => {
        console.error(err);
        // const errMessage = err.message;
        // setError(errMessage);
        setError(err.message);
      });
    setError("");
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
            <Form.Text className="text-muted">{error ? error : ""}</Form.Text>
          </Form.Group>

          <Button
            className="px-5 mb-3 fw-semibold"
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
          <p>
            New to website ? please{" "}
            <Link to="/register" className="text-decoration-none">
              Register
            </Link>
          </p>
        </Form>
      </div>
    </Container>
  );
};

export default Login;
