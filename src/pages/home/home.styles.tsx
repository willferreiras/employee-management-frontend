import styled from "styled-components";
import { MOBILE_BREAKPOINT } from "../../shared/utils/theme/mobile-dimen";
import { colors } from "../../shared/utils/theme/colors";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.palette.surfaceDarkest};
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;

  @media (min-width: ${MOBILE_BREAKPOINT}px) {
    height: calc(100vh - 64px);
  }

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    height: calc(100vh - 64px - 80px);
  }
`;

const UserNameContainerWithBackgroundContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  @media (min-width: ${MOBILE_BREAKPOINT}px) {
    margin-top: 42px;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    margin-top: 24px;
  }
`;

const UsernameBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  margin-top: 12px;
`;

const TitleContainer = styled.div`
  z-index: 10;
  @media (min-width: ${MOBILE_BREAKPOINT}px) {
    margin-left: 32px;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    margin-left: 24px;
  }
`;

const EmployeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 100%;
  margin-top: 48px;
  @media (min-width: ${MOBILE_BREAKPOINT}px) {
    margin-left: 32px;
    margin-right: 32px;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    margin-left: 24px;
    margin-right: 24px;
  }
`;

const EmployeesListContainer = styled.div`
  @media (min-width: ${MOBILE_BREAKPOINT}px) {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(486px, 1fr));
    grid-auto-rows: max-content max-content max-content;
    row-gap: 16px;
    column-gap: 24px;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    display: flex;
    flex-direction: column;
    max-width: 100%;
    row-gap: 16px;
  }
`;

const EmployeesEmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 238px;
  flex-direction: column;
  align-self: center;
  margin-bottom: 24px;
`;

export {
  ContentContainer,
  UserNameContainerWithBackgroundContainer,
  UsernameBackground,
  TitleContainer,
  EmployeesContainer,
  EmployeesListContainer,
  EmployeesEmptyContainer,
};
