/* eslint-disable react/display-name */
import React from "react";
import { Navigate } from "react-router-dom";
import { authService } from "./auth-service";

type TWithAuthProps = {
  redirectPath: string;
  [key: string]: any;
};

export const withAuth = <P extends TWithAuthProps>(
  WrappedComponent: React.ComponentType<P>,
  redirectPath: string,
) => {
  return class extends React.Component<P> {
    render() {
      if (!authService.isAuthenticated()) {
        return <Navigate to={redirectPath} />;
      }
      return <WrappedComponent {...(this.props as P)} />;
    }
  };
};
