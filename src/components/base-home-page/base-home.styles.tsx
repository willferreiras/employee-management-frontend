import styled from "styled-components";
import { colors } from "../../shared/utils/theme/colors";

const RootContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-rows: max-content 1fr;
`;

const TabContentContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 220px 1fr;
  overflow: hidden;
  background-color: ${colors.palette.neutral900};
`;

const TabContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const MainContentContainer = styled.div<{ ismobile: boolean }>`
  width: 100%;
  height: 100%;
  background-color: ${colors.palette.primaryDarker};
  overflow: hidden;
  border-radius: ${(props) => (props.ismobile ? '0px' : '8px')};
`;

const BottomNavigationContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
  right: 0;
`;

const BottomNavigationItemContainer = styled.div<{ selected: boolean }>`
    width: 64px;
    height: 32px;
    border-radius: 999px;
    background-color: ${(props) => (props.selected ? colors.primaryColor : 'transparent')};
    align-items: center;
    display: flex;
    justify-content: center;
`;

export {
  RootContainer,
  TabContentContainer,
  TabContainer,
  MainContentContainer,
  BottomNavigationContainer,
  BottomNavigationItemContainer,
};
