import styled from "styled-components";
import { MOBILE_BREAKPOINT } from "../../shared/utils/theme/mobile-dimen";

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    max-width: 100%;
  }

  @media (min-width: ${MOBILE_BREAKPOINT}px) {
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }
`;

const RegisterActionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 424px;
`;

const RegisterButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  height: 40px;
  gap: 24px;
  margin-top: 32px;
`;

const RegisterGamesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 424px;
`;

const RegisterGameItem = styled.div`
  display: grid;
  grid-template-columns: 44.58px 1fr 84.21px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 12px;
  padding-right: 12px;
  gap: 12px;
`;

const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    height: calc(100vh - 64px - 80px - 105px);
    overflow-x: hidden;
    margin-left: 24px;
    overflow-y: auto;
  }

  @media (min-width: ${MOBILE_BREAKPOINT}px) {
    height: calc(100vh - 64px - 105px);
    margin-left: 24px;
    width: 656px;
  }
`;

const ConnectedPlatformGameImage = styled.div``;

const RegisterGameTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ConnectedPlatformButtonContainer = styled.div``;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
 

  @media (min-width: ${MOBILE_BREAKPOINT}px) {
    width: 100%;
    margin-top: 20px;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    width: calc(100% - 48px);
    margin-top: 24px;
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
  align-items: flex-end;
  height: 40px;
  gap: 24px;
  margin-top: 32px;
`;

const TermsOfUseContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

const TermsOfUseTextContainer = styled.div`
  width: 262px;
`;

export {
  RegisterContainer,
  RegisterActionsContainer,
  RegisterButtonContainer,
  RegisterGamesContainer,
  RegisterGameItem,
  ConnectedPlatformGameImage,
  RegisterGameTitleContainer,
  ConnectedPlatformButtonContainer,
  FormContainer,
  ButtonContainer,
  InputGroup,
  ContainerForm,
  TermsOfUseContainer,
  TermsOfUseTextContainer,
};
