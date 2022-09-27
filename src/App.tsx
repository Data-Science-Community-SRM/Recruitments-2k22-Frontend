import React from "react";
// import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// REACT Router latest doc : https://reactrouter.com/en/main/start/tutorial

import ErrorPage from "./Pages/ErrorPage";
import HomePage from "./Pages/HomePage/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
