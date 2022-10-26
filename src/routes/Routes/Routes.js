import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import About from "../../pages/About/About";
import Blog from "../../pages/Blog/Blog";
import CheckoutPage from "../../pages/CheckoutPage/CheckoutPage";
import CourseDetails from "../../pages/CourseDetails/CourseDetails";
import Courses from "../../pages/Courses/Courses";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import FAQ from "../../pages/FAQ/FAQ";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          return fetch(`http://localhost:5000/courses`);
        },
      },
      {
        path: "/home",
        element: <Home></Home>,
        loader: async () => {
          return fetch(`http://localhost:5000/courses`);
        },
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader: async () => {
          return fetch(`http://localhost:5000/courses`);
        },
      },
      {
        path: "/course/:id",
        element: <CourseDetails></CourseDetails>,
        loader: async ({ params }) => {
          return fetch(`http://localhost:5000/courses/${params.id}`);
        },
      },
      {
        path: "/courseDetails/:id",
        element: <CheckoutPage></CheckoutPage>,
        loader: async ({ params }) => {
          return fetch(`http://localhost:5000/courses/${params.id}`);
        },
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
