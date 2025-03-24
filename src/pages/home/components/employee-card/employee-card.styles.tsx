import styled from "styled-components";
import { colors } from "../../../../shared/utils/theme/colors";
import { MOBILE_BREAKPOINT } from "../../../../shared/utils/theme/mobile-dimen";
import { Menu, MenuItem, MenuProps } from "@mui/material";

const ContentContainer = styled.div`
  position: relative;
  width: 100%;
  background-color: ${colors.palette.neutral900};
  border-radius: 8px;
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  align-items: center;

  @media (min-width: ${MOBILE_BREAKPOINT}px) {
    height: 48px;
    padding-top: 24px;
    padding-bottom: 24px;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    height: 74px;
    padding-top: 16px;
    padding-bottom: 16px;
  }
`;

const EmployeeContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  margin-left: 16px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 16px;
  gap: 16px;
`;

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(() => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    minWidth: 180,
    color: "rgb(55, 65, 81)",
    border: "none",
    backgroundColor: colors.palette.neutral900,
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.60)",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    '& .MuiMenuItem-root': {
      color: colors.text,
      height: '48px',
      fontSize: '14px',
    },
  },
}));

const SyledMenuItem = styled(MenuItem)`
  color: ${colors.text};
`;

export {
  ContentContainer,
  EmployeeContainer,
  ActionsContainer,
  StyledMenu,
  SyledMenuItem,
};
