import React from "react";
import { Navigate } from "react-router-dom";

interface IAuthGuardProps {
  children: React.ReactNode;
}

export const AUTH_TOKEN = "authToken";
export const REFRESH_TOKEN = "refreshToken";

const AuthGuard: React.FC<IAuthGuardProps> = ({ children }) => {
  const token = localStorage.getItem(AUTH_TOKEN);

  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

export default AuthGuard;
