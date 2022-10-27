import React, { useContext, useState } from "react";
import "./Register.css";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");
  const { createUser } = useContext(AuthContext);

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
        console.log(user);
        form.reset();
        setError("");
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });
  };

  return (
    <Container>
      <div className="shadow px-3 py-4 my-5 rounded form-width mx-auto">
        <h4 className="text-dark text-center">Please Register Now</h4>
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>FullName</Form.Label>
            <Form.Control type="text" name="name" placeholder="Enter name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>PhotoURL</Form.Label>
            <Form.Control
              type="text"
              name="photoURL"
              placeholder="photoURL"
              required
            />
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
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Button
            className="px-5 mb-3 fw-semibold"
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
          <p>
            Already have an account ? please{" "}
            <Link to="/login" className="text-decoration-none">
              Login
            </Link>
          </p>
        </Form>
      </div>
    </Container>
  );
};

export default Register;
