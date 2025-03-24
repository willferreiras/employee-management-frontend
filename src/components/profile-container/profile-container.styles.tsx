import styled from "styled-components";
import { colors } from "../../shared/utils/theme/colors";
import { MOBILE_BREAKPOINT } from "../../shared/utils/theme/mobile-dimen";

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.palette.neutral900};
  border-radius: 8px;

  @media (min-width: ${MOBILE_BREAKPOINT}px) {
    width: 100%;
    padding-bottom: 24px;
    height: fit-content;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    max-width: 100%;
    height: 608px;

    margin-left: 24px;
    margin-right: 24px;
    margin-top: 96px;
  }
`;

const ProfileContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -72px;
  align-items: center;
`;

const UsernameContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  margin-top: 12px;
`;

const UsernameTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 24px;
`;

const Divider = styled.div`
  max-width: 100%;
  height: 1px;
  background-color: ${colors.palette.neutral400};
  margin-top: 16px;
  margin-left: 16px;
  margin-right: 16px;
`;

const ProfileDataContainer = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 8px;
`;

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;


export {
  ProfileContainer,
  ProfileContentContainer,
  UsernameContainer,
  UsernameTextContainer,
  Divider,
  ProfileDataContainer,
  DataContainer
};
