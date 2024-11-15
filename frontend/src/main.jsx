import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components";
import {
  Login,
  ListEmployee,
  Dashboard,
  CreateEmployee,
  EditEmployee,
} from "./components";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "",
        element: <Login></Login>,
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "editEmployee",
        element: <EditEmployee></EditEmployee>
      },
      {
        path: "createEmployee",
        element: <CreateEmployee></CreateEmployee>
      }, {
        path: "listEmployee",
        element: <ListEmployee></ListEmployee>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Router}></RouterProvider>
  </React.StrictMode>
);
