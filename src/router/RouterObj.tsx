//set up router use object, switch using this file
import { lazy } from "react";
import Home from "../views/Home";
import Login from "../views/Login";
// import About from "../views/About";
const About = lazy(() => import("../views/About"));
const Welcome = lazy(() => import("../views/Welcome"));
const User = lazy(() => import("../views/User"));
const Team = lazy(() => import("../views/Team"));
import { Navigate } from "react-router-dom";

const objRoutes = [
  {
    //set up default path is /page1
    path: "/",
    element: <Navigate to="/welcome" />,
  },
  {
    //set up /home path with Home component
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/welcome",
        element: <Welcome />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/user/userId",
        element: <User />,
      },
      {
        path: "/team/teamId",
        element: <Team />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    //error path handler, back to default page
    path: "*",
    element: <Navigate to="/welcome" />,
  },
];

export default objRoutes;
