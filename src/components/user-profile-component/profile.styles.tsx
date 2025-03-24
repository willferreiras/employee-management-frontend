import styled from "styled-components";
import { colors } from "../../shared/utils/theme/colors";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 192px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
  padding-bottom: 24px;
  border-radius: 8px;
  background-color: ${colors.palette.neutral900};
`;

const UserNameContainer = styled.div`
    height: 43px;
`;

const UserNameContainerWithBackgroundContainer = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 8px;
`;

const UserIdContainer = styled.div`
    align-self: center;
`;

const Divider = styled.div`
    width: 190px;
    height: 1px;
    background-color: ${colors.palette.neutral400};
    margin-top: 16px;
`

const ButtonActionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 8px;
    gap: 8px;
`;

const UsernameBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 289px;
  height: 33px;
  z-index: 0;
`;

export {
    UserNameContainer,
    UserIdContainer,
    Divider,
    ButtonActionsContainer,
    UsernameBackground,
    UserNameContainerWithBackgroundContainer
};
