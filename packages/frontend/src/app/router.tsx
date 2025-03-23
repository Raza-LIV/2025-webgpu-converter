import React from "react";
import {
    createBrowserRouter,
  } from "react-router-dom";
import { AuthPage } from "../pages/auth";
import { Error404Page } from "../pages/error-404";
import { Error500Page } from "../pages/error-500";
  
export const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
    {
      path: "/auth",
      element: <AuthPage/>
    },
    {
      path: "/server-error",
      element: <Error500Page/>
    },
    {
      path: "*",
      element: <Error404Page/>
    }
]);