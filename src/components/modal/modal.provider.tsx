import React, {
  ReactElement,
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

export enum ModalPositionEnum {
  center = "center",
  right = "right",
}

type TModalStateType = {
  content: ReactElement | null;
  title?: string;
  subtitle?: string;
  closeButton: boolean;
  closeOnBackgroundClick: boolean;
  position?: ModalPositionEnum;
  style?: React.CSSProperties;
  withoutBorderRadius?: boolean;
};

export type TModalContextType = {
  ShowModal: (data: {
    content: ReactElement;
    title?: string;
    subtitle?: string;
    closeButton?: boolean;
    closeOnBackgroundClick?: boolean;
    position?: ModalPositionEnum;
    style?: React.CSSProperties;
    withoutBorderRadius?: boolean;
  }) => void;

  HideModal: () => void;

  GetModalInformations: () => {
    content: ReactElement | null;
    title?: string;
    subtitle?: string;
    closeButton?: boolean;
    closeOnBackgroundClick?: boolean;
    position?: ModalPositionEnum;
    style?: React.CSSProperties;
    withoutBorderRadius?: boolean;
  };
};

const ModalContext = createContext({} as TModalContextType);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalState, setModalState] = useState<TModalStateType>({
    content: null,
    title: "Placeholder",
    subtitle: "Placeholder",
    closeButton: true,
    closeOnBackgroundClick: false,
    style: undefined,
  });

  const ShowModal = (data: {
    content: ReactElement;
    title?: string;
    subtitle?: string;
    closeButton?: boolean;
    closeOnBackgroundClick?: boolean;
    position?: ModalPositionEnum;
    style?: React.CSSProperties;
    hideTitleBorderBottom?: boolean;
    withoutBorderRadius? : boolean;
  }) => {
    setModalState({
      content: data.content,
      title: data.title,
      subtitle: data.subtitle,
      closeButton: data.closeButton ?? true,
      position: data.position ?? ModalPositionEnum.center,
      closeOnBackgroundClick: data.closeOnBackgroundClick ?? true,
      style: data.style,
      withoutBorderRadius: data.withoutBorderRadius,
    });
  };

  const GetModalInformations = () => modalState;

  const HideModal = () => {
    setModalState({
      content: null,
      title: "Placeholder",
      subtitle: "Placeholder",
      closeButton: true,
      closeOnBackgroundClick: true,
      position: ModalPositionEnum.center,
      style: undefined,
    });
  };

  const modalProviderValue = useMemo(
    () => ({ ShowModal, GetModalInformations, HideModal }),
    [ShowModal, GetModalInformations, HideModal],
  );

  return (
    <ModalContext.Provider value={modalProviderValue}>
      {children}
    </ModalContext.Provider>
  );
};

export function ModalFullContext() {
  const context = useContext(ModalContext);
  return context;
}
