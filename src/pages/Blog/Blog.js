import React from "react";
import { Container } from "react-bootstrap";
import corsImg from "../../assets/cors.png";
import firebaseImg from "../../assets/firebase.png";
import privateRouteImg from "../../assets/private-route.webp";
import nodeImg from "../../assets/node.webp";

const Blog = () => {
  return (
    <div>
      <h2 className="text-center fw-semibold my-4 ">
        Welcome to <span className="fw-bold">HeroCoders</span> Blog Page...
      </h2>
      <Container className="w-75 mx-auto">
        <div className="cors-div d-md-flex align-items-center mt-5">
          <div className="me-3">
            <img src={corsImg} className="rounded-1" alt="cors" />
          </div>
          <div className="cors-ans">
            <h4 className="text-primary">What is cors ?</h4>
            <p>
              <b>CORS</b> is shorthand for Cross-Origin Resource Sharing. It is
              a mechanism to allow or restrict requested resources on a web
              server depend on where the HTTP request was initiated. This policy
              is used to secure a certain web server from access by other
              website or domain.
            </p>
          </div>
        </div>
        <div className="firebase-div d-md-flex align-items-center mt-5">
          <div className="me-3">
            <img
              src={firebaseImg}
              className="rounded-1"
              alt="firebaseImg"
              style={{ width: "273px", height: "183px" }}
            />
          </div>
          <div className="firebase-ans">
            <h5 className="text-primary">
              Why are you using firebase? What other options do you have to
              implement authentication?
            </h5>
            <p>
              <b>Firebase</b> Authentication provides backend services,
              easy-to-use SDKs, and ready-made UI libraries to authenticate
              users to your app. It supports authentication using passwords,
              phone numbers, popular federated identity providers like Google,
              Facebook and Twitter, and more. <b>Without firebase</b> you also
              have some alternatives such as <b>STYTCH </b>, <b>Ory</b> ,
              <b>Supabase</b> , <b>Okta</b> ,<b>PingIdentity</b> ,{" "}
              <b>Keycloak</b> , <b>Frontegg</b> , <b>Authress</b> etc to
              implement authentication .
            </p>
          </div>
        </div>
        <div className="privateroute-div d-md-flex align-items-center mt-5">
          <div className="me-3">
            <img
              src={privateRouteImg}
              className="rounded-1"
              alt="privateroute"
              style={{ width: "273px", height: "183px" }}
            />
          </div>
          <div className="privateroute-ans">
            <h5 className="text-primary">How does the private route work?</h5>
            <p>
              The <b>private route</b> component is similar to the public route,
              the only change is that redirect URL and authenticate condition.
              If the user is not authenticated he will be redirected to the
              login page and the user can only access the authenticated routes
              If he is authenticated "Logged in".
            </p>
          </div>
        </div>
        <div className="node-div d-md-flex align-items-center mt-5">
          <div className="me-3">
            <img
              src={nodeImg}
              className="rounded-1"
              alt="node"
              style={{ width: "273px", height: "183px" }}
            />
          </div>
          <div className="node-ans">
            <h5 className="text-primary">What is Node? How does Node work?</h5>
            <p>
              <b>Node</b> is a used as backend service where javascript works on
              the server-side of the application. This way javascript is used on
              both frontend and backend. Node.js runs on chrome <b>v8 engine</b>{" "}
              which converts javascript code into machine code, it is highly
              scalable, lightweight, fast, and data-intensive.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Blog;
