import { useRoutes } from "react-router-dom";
import router from "./router/RouterObj.tsx";
import { Suspense } from "react";

function App() {
  const outlet = useRoutes(router);

  return (
    <>
      <div>
        <Suspense fallback={<div>Loading...</div>}>{outlet}</Suspense>
      </div>
    </>
  );
}

export default App;
