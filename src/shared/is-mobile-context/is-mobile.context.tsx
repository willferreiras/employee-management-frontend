import { useEffect, useState } from "react";
import { MOBILE_BREAKPOINT } from "../utils/theme/mobile-dimen";
import React from "react";

export type TIsMobileContextType = {
  isMobile: boolean;
  isDesktop: boolean;
};

export const IsMobileContext = React.createContext({} as TIsMobileContextType);

export const IsMobileProvider = ({
    children,
} : { children: React.ReactNode }) => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < MOBILE_BREAKPOINT);

  // create an event listener
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < MOBILE_BREAKPOINT) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    if (isMobile === undefined) {
      handleResize();
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <IsMobileContext.Provider value={{ isMobile, isDesktop: !isMobile }}>
      {children}
    </IsMobileContext.Provider>
  );
};

export const useIsMobile = () => {
    const context = React.useContext(IsMobileContext);
    if (!context) {
        throw new Error("useIsMobile must be used within a IsMobileProvider");
    }
    return context;
};
