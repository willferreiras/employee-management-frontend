import { RouteObject } from "react-router-dom";
import { LoginPage } from "../pages/login/login.page";

export const LOGIN_PATH = "/login";

export const PublicRoutes: RouteObject[] = [
  {
    path: LOGIN_PATH,
    element: <LoginPage />,
  },
];
