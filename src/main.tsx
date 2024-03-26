import React from 'react'
import ReactDOM from 'react-dom/client'
//The order for import styling
//1️⃣UI frame CSS
//2️⃣Global CSS
//3️⃣Component CSS
import "reset-css"; //clean up initial browser css style <= 1️⃣UI frame CSS
import "@/assets/styles/global.scss"  
//2️⃣Global CSS
import Router from './router/index'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <Router/>
  </React.StrictMode>,
)
