import React from 'react'
import ReactDOM from 'react-dom/client'
//The order for import styling
//1️⃣UI frame CSS
//2️⃣Global CSS
//3️⃣Component CSS
import "reset-css"; //clean up initial browser css style <= 1️⃣UI frame CSS
import "@/assets/styles/global.scss"; //2️⃣Global CSS
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // Side effect of StrictMode => print console twice.
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
