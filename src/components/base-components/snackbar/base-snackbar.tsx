/* eslint-disable react/display-name */
import { AlertProps, Snackbar, useTheme } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import React, {
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";
import { colors } from "../../../shared/utils/theme/colors";
import { useIsMobile } from "../../../shared/is-mobile-context/is-mobile.context";

export interface ISimpleSnackbarProps {
  open: boolean;
  marginTop?: number;
  message: string;
  type: "success" | "error" | "warning";
  controlShowModal?: (value: React.SetStateAction<boolean>) => void;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant="standard" {...props} />
));

export type TToastContextType = {
  ShowToast: (
    toastName: "success" | "error" | "warning",
    message: string,
  ) => void;
  HideToast: () => void;
  GetToastInformations: () => {
    toastName: "" | "success" | "error" | "warning";
    message: string;
  };
};

const ToastContext = createContext({} as TToastContextType);

export function SimpleSnackbar(props: ISimpleSnackbarProps) {
  const { HideToast } = ToastFullContext();
  const [open, setOpen] = React.useState(props.open);
  const { isMobile } = useIsMobile();

  const theme = useTheme();

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === "clickaway") {
      return;
    }
    HideToast();
    setOpen(false);
    if (props.controlShowModal) {
      props.controlShowModal(false);
    }
  };

  return (
    <Snackbar
      style={{
        maxWidth: isMobile ? "calc(100wh - 32px)" : "400px",
        marginTop: props.marginTop,
      }}
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: isMobile ? "center" : "right",
      }}
    >
      <Alert
        sx={{
          width: "100%",
          backgroundColor: colors.palette.surfaceBlack,
          color: theme.palette.common.white,
          fontSize: "16px",
          borderRadius: "8px",
          border:
            props.type === "success"
              ? `1px solid ${colors.palette.feedbackSuccess}`
              : props.type === "error"
              ? "1px solid #E90C24"
              : "1px solid #f90",
        }}
        icon={false}
      >
        {props.message}
      </Alert>
    </Snackbar>
  );
}

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toastState, setToastState] = useState({
    toastName: "",
    message: "",
  } as any);

  const ShowToast = (
    toastName: "success" | "error" | "warning",
    message: string,
  ) => {
    setToastState({
      toastName,
      message,
    });
  };

  const GetToastInformations = () => toastState;

  const HideToast = () => {
    setToastState({
      toastName: "",
      message: "",
    });
  };

  const toastProviderValue = useMemo(
    () => ({ ShowToast, GetToastInformations, HideToast }),
    [ShowToast, GetToastInformations, HideToast],
  );

  return (
    <ToastContext.Provider value={toastProviderValue}>
      {children}
    </ToastContext.Provider>
  );
};

export function ToastFullContext() {
  const context = useContext(ToastContext);
  return context;
}

export const ToastComponent = () => {
  const { GetToastInformations } = ToastFullContext();
  if (!GetToastInformations().toastName) return <div />;

  return (
    <>
      <SimpleSnackbar
        type={GetToastInformations().toastName as any}
        marginTop={80}
        message={GetToastInformations().message}
        open
      />
    </>
  );
};
