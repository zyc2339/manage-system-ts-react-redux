//set up router use object, not using this file, keep it as reference

import Home from "../views/Home.tsx";
import About from "../views/About.tsx";
import { Navigate } from "react-router-dom";

const objRouter = [
  {
    path: "/",
    element: <Navigate to="/home"/>,
  },
  {
    path: "/home",
    element: <Home></Home>,
  },
  {
    path: "/about",
    element: <About></About>,
  }
];

export default objRouter;
