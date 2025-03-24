import styled from "styled-components";
import { colors } from "../../shared/utils/theme/colors";
import { MOBILE_BREAKPOINT } from "../../shared/utils/theme/mobile-dimen";

const PopUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: max-content;
  border-radius: 8px;
  background-color: ${colors.palette.surfadeDark};
  padding-top: 24px;
  padding-left: 16px;
  padding-right: 16px;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    width: 100%;
  }

  @media (min-width: ${MOBILE_BREAKPOINT}px) {
    min-width: 312px;
  }
`;

const Divider = styled.div`
  max-width: 100%;
  height: 1px;
  background-color: ${colors.palette.neutral500};
  margin-top: 12px;
`;

const ContentContainer = styled.div`
    height: max-content;
    width: 100%;
    margin-top: 16px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 40px;
  width: 100%;
  gap: 16px;
  padding-bottom: 16px;
`;

export {
    PopUpContainer,
    Divider,
    ContentContainer,
    ButtonsContainer
};