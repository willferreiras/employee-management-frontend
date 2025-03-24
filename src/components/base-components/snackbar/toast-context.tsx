import {
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

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
