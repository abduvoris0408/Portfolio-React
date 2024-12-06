import React from "react";
import { useRoutes } from "react-router-dom";
import { Home } from "../pages";
import About from "../pages/about/about";
import Blog from "../pages/blog";
import Projects from "../pages/projects";

const Router = () => {
    return useRoutes([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/about",
            element: <About />,
        },
        {
            path: "/blog",
            element: <Blog />,
        },
        {
            path: "/projects",
            element: <Projects />,
        },
    ]);
};

export default Router;
