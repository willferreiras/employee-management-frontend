import styled from "styled-components";
import { colors } from "../../shared/utils/theme/colors";
import { MOBILE_BREAKPOINT } from "../../shared/utils/theme/mobile-dimen";

const Root = styled.div`
  display: grid;

  width: 100vw;
  height: 100vh;

  @media (min-width: ${MOBILE_BREAKPOINT}px) {
    grid-template-columns: 48% 52%;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    grid-template-rows: 201px 1fr;
    background-color: ${colors.primaryColor};
  }
`;

const LogoContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  justify-items: center;
  align-items: center;
  background-color: ${colors.primaryColor};
`;

const Logo = styled.img`
  width: 240px;
`;

const ContainerLoginPassword = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
`;

const ContainerForm = styled.div`
  display: grid;
  grid-auto-rows: max-content;
  width: 240px;

  @media (min-width: ${MOBILE_BREAKPOINT}px) {
    align-self: center;
    justify-self: center;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    max-width: ${MOBILE_BREAKPOINT}px;
    width: max-content;
    justify-self: center;
    width: calc(100% - 48px);
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  margin-top: 20px;
  
  @media (min-width: ${MOBILE_BREAKPOINT}px) {
    width: 100%;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    width: 100%;
  }
`;

const InputGroup = styled.div`
  display: grid;
  grid-auto-rows: max-content;
  gap: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  height: 40px;
  gap: 24px;
  margin-top: 32px;
`;

export {
  ContainerLoginPassword,
  ContainerForm as Container,
  FormContainer,
  InputGroup,
  LogoContainer,
  Root,
  Logo,
  ButtonContainer
};
