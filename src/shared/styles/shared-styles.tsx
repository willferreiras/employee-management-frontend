import styled from "styled-components";
import { MOBILE_BREAKPOINT } from "../utils/theme/mobile-dimen";

const headerHeight = "64px";

export const SharedPageContainer = styled.div`
  height: calc(100vh - ${headerHeight});
  width: 100%;
  overflow: hidden;
`;

export const SharedPageContentContainer = styled.div`
  display: grid;
  max-width: 100%;
  height: calc(100vh - 64px);
  grid-template-rows: max-content 1fr;
  padding-left: 32px;
  padding-right: 32px;
  overflow: hidden;
`;

export const SharedPageLoadingContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const SharedTittleContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 68px;
  margin-top: 32px;
  overflow: hidden;
`;

export const SharedTitleBackContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const SharedBackgroundTitleContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

export const SharedSubTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  @media (min-width: ${MOBILE_BREAKPOINT}px) {
  }

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
  }
`;
