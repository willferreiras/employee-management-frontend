import styled from "styled-components";
import { colors } from "../../shared/utils/theme/colors";

const TabContainer = styled.div`
  width: 220px;
  height: 100vh;
  display: flex;
  background: var(
    --Color-Gradient-SurfaceH,
    linear-gradient(
      180deg,
      ${colors.palette.neutral900} 15%,
      ${colors.palette.primaryDarker} 75%
    )
  );
`;

const ButtonsContainer = styled.div`
  flex-direction: column;
  display: flex;
  row-gap: 8px;
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 16px;
  width: 100%;
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  margin-top: 8px;
  margin-bottom: 8px;
  background-color: ${colors.palette.neutral600};
`;

export { TabContainer, ButtonsContainer, Divider };
