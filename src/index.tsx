import React from "react";
import ReactDOM from "react-dom/client";
import "reflect-metadata";
import "./index.css";
import { ThemeProvider } from "@mui/material/styles";
import reportWebVitals from "./reportWebVitals";
import { Router } from "./routers/router";
import ReactQueryProvider from "./shared/react-query/react-query.provider";
import CustomTheme from "./shared/utils/theme/theme";
import {
  ToastComponent,
  ToastProvider,
} from "./components/base-components/snackbar/base-snackbar";

import "./internationalization/internationalization";
import { UserProvider } from "./contexts/user/user.context";
import ApiAuthService from "./services/auth/auth.service";
import ApiUserService from "./services/user/user.service";
import { employeesAPI } from "./services/employee-api";
import { IsMobileProvider } from "./shared/is-mobile-context/is-mobile.context";
import { ModalProvider } from "./components/modal/modal.provider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

const authService = new ApiAuthService(employeesAPI);
const userService = new ApiUserService(employeesAPI);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={CustomTheme}>
      <IsMobileProvider>
        <ModalProvider>
          <ToastProvider>
            <ReactQueryProvider>
              <UserProvider
                  authService={authService}
                  userService={userService}
                >
                  <Router />
                  <ToastComponent />
                </UserProvider>
            </ReactQueryProvider>
          </ToastProvider>
        </ModalProvider>
      </IsMobileProvider>
    </ThemeProvider>
  </React.StrictMode>,
);

reportWebVitals();
