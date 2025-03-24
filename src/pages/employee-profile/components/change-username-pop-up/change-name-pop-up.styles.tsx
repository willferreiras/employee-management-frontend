import styled from "styled-components";
import { colors } from "../../../../shared/utils/theme/colors";
import { MOBILE_BREAKPOINT } from "../../../../shared/utils/theme/mobile-dimen";

const PopUpContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    width: 100%;
    align-items: center;
  };
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 40px;
  width: 100%;
  gap: 16px;
`;

export { PopUpContainer, CenterContainer, ButtonsContainer };
