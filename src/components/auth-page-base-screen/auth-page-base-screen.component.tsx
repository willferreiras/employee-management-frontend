import React from "react";
import {
  Root,
  LogoContainer,
  ContainerLoginPassword,
  FormContainer,
} from "./auth-page-base-screen.styles";
import ReactBaseComponent from "../base-components/react-base.component";
import { useIsMobile } from "../../shared/is-mobile-context/is-mobile.context";

export interface IAuthPageBaseScreenProps {
  children?: React.ReactNode;
}

export const AuthPageBaseScreen: React.FC<IAuthPageBaseScreenProps> = ({
  children
}: IAuthPageBaseScreenProps) => {

  const { isMobile } = useIsMobile();
  
  return (
    <ReactBaseComponent>
      <Root>
        {!isMobile && <LogoContainer></LogoContainer>}
        <ContainerLoginPassword>
          <FormContainer>
            {children}
          </FormContainer>
        </ContainerLoginPassword>
      </Root>
    </ReactBaseComponent>
  );
};
