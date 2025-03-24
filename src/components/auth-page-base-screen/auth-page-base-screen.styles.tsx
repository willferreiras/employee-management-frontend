import styled from "styled-components";
import { colors } from "../../shared/utils/theme/colors";
import { MOBILE_BREAKPOINT } from "../../shared/utils/theme/mobile-dimen";
import backgroundImage from "../../logo.svg";

const Root = styled.div`
  display: grid;

  width: 100vw;
  height: 100vh;
  background-color: ${colors.palette.surfaceDarkest};

  @media (min-width: ${MOBILE_BREAKPOINT}px) {
    grid-template-columns: 48% 52%;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    grid-template-rows: 1fr;
    overflow-y: auto;
  }
`;

const LogoContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  justify-items: center;
  align-items: center;
  background-image: url(${backgroundImage});
  background-size: contain;
  overflow: hidden;
  background-position: center;
  background-repeat: no-repeat;
`;

const Logo = styled.img`
  width: 240px;
`;

const ContainerLoginPassword = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${colors.palette.surfadeDark};

  @media (min-width: ${MOBILE_BREAKPOINT}px) {
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    flex-direction: column;
    align-items: center;
    padding-top: 112px;
  }
`;

const ContainerForm = styled.div`
  display: grid;
  grid-auto-rows: max-content;

  @media (min-width: ${MOBILE_BREAKPOINT}px) {
    width: 440px;
    margin-top: 130px;
    justify-self: center;
    justify-items: center;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    max-width: ${MOBILE_BREAKPOINT}px;
    background-color: red;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  

  @media (min-width: ${MOBILE_BREAKPOINT}px) {
    row-gap: 40px;
  };

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    row-gap: 64px;
    height: 100%;
    width: 100%;
    align-items: center;
  }
`;

const InputGroup = styled.div`
  display: grid;
  grid-auto-rows: max-content;
  gap: 32px;
  width: 100%;
`;

export {
  ContainerLoginPassword,
  ContainerForm as Container,
  FormContainer,
  InputGroup,
  LogoContainer,
  Root,
  Logo,
};
