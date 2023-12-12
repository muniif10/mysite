import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About.tsx";
import ErrorPage from "./pages/errors/error_page.tsx";
import Portfolio from "./pages/Portfolio.tsx";
import Layout from "./Layout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Home /></Layout>,
    errorElement: <ErrorPage/>
  },
  {
    path: "about",
    element: <Layout><About /></Layout>
  },
  {
    path:"portfolio",
    element:<Layout><Portfolio /></Layout>
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
