import { useRoutes, useLocation, useNavigate } from "react-router-dom";
import router from "./router/RouterObj.tsx";
import { Suspense, useEffect } from "react";
import { message } from "antd";

function ToLogin() {
  const naviTo = useNavigate();
  //jump page after mount this component
  useEffect(() => {
    //run code here after mount this component
    naviTo("/login");
    message.warning("Please login in first");
  }, []);
  return <></>;
}

function ToDashboard() {
  const naviTo = useNavigate();
  //jump page after mount this component
  useEffect(() => {
    //run code here after mount this component
    naviTo("/welcome");
    message.warning("You have already login!");
  }, []);
  return <></>;
}

//create logic enter the page
function BeforeRouterEnter() {
  const outlet = useRoutes(router);
  /*
  route rules:
  1.if access login page with token, jump to welcome page
  2.if access other page without token, jump to login page
  3.else, alloow access  
  */
  const location = useLocation();
  let token = localStorage.getItem("management-system-token");
  // 👇🏼1.if access login page with token, jump to welcome page
  if (location.pathname === "/login" && token) {
    //this component should be a normal JSX component, dont use useNavigate()
    return <ToDashboard />;
  }
  //👇🏼2.if access other page without token, jump to login page
  if (location.pathname !== "/login" && !token) {
    //this component should be a normal JSX component, dont use useNavigate()
    return <ToLogin />;
  }
  return outlet;
}

function App() {
  return (
    <>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <BeforeRouterEnter />
        </Suspense>
      </div>
    </>
  );
}

export default App;
