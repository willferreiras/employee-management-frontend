import styled from "styled-components";
import { colors } from "../../shared/utils/theme/colors";

const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 76px;
  align-items: center;
  justify-content: flex-end;
  margin-right: 24px;
  gap: 8px;
`;

const PaginationItem = styled.div<{ isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${({ isActive }) =>
    isActive ? colors.primaryColor : "transparent"};
`;

export {
    PaginationContainer,
    PaginationItem,
};