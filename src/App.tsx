// import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Suspense } from "react";

function App() {

  return (
    <>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet></Outlet>
        </Suspense>
      </div>
    </>
  );
}

export default App
