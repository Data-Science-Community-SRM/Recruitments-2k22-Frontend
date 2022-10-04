import React from "react";
// import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// REACT Router latest doc : https://reactrouter.com/en/main/start/tutorial

import ErrorPage from "./Pages/ErrorPage";
import HomePage from "./Pages/HomePage/HomePage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import WelcomePage from "./Pages/WelcomePage/WelcomePage";
import TaskPage from "./Pages/TaskPage/TaskPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
    errorElement:  <ErrorPage />
  },
  {
    path: "/welcome",
    element: <WelcomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/task",
    element: <TaskPage />,
    errorElement: <ErrorPage />,
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
