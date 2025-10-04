import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Project from "../Pages/Project/Project";
import About from "../Pages/About/About";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/contact',
          element:<Contact></Contact>
        },
        {
          path:'/project',
          element:<Project></Project>
        },
        {
          path:'/about',
          element:<About></About>
        },
      ]
    },
  ]);