import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { PublicRoutes } from "./public.route";
import { PrivateRoutes } from "./private.route";

const RouterComponent: React.FC = () => {
  return (
    <Router>
      <Routes>
        {PublicRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
        {PrivateRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
};

export { RouterComponent as Router };
