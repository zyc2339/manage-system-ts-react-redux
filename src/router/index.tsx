//use component set up this router, current has issue
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy } from "react";
import App from "../App.tsx";
import Home from "../views/Home";
// import About from "../views/About";
const About = lazy(() => import("../views/About"));
const Page1 = lazy(() => import("../views/Welcome.tsx"));
const Page2 = lazy(() => import("../views/Page2"));

const baseRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {/*  Index routes render into their parent's Outlet at their parent's URL (like a default child route).*/}
          <Route index element={<Home />} />
          <Route path="home" element={<Home />}>
            {/* <Route index element={<Page1 />}/> */}
            <Route path="page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
          </Route>

          {/* <Route path="/" element={<Navigate to="/home"}*/}
          <Route path="/about" element={<About />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default baseRouter;
