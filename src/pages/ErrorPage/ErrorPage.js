import React from "react";
import { FaRegTired } from "react-icons/fa";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="text-center">
      <div className=" ">
        <FaRegTired
          className="text-secondary bg-light mt-5 rounded-circle"
          style={{ height: "250px", width: "250px" }}
        />
      </div>
      <div className="error-info">
        <h1 className="text-secondary">Oops!</h1>

        <p className="text-secondary">
          <i>{error.statusText || error.message}</i>
        </p>
        <p className="text-secondary w-50 mx-auto d-none d-md-block">
          The page you are looking for no longer exists. Perhaps you can return
          back to the site's homepage and see if you can find what you are
          looking for.
        </p>
      </div>

      <Link className="text-primary" to={"/"}>
        Please Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
