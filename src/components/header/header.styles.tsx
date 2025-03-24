import styled from "styled-components";
import { colors } from "../../shared/utils/theme/colors";
import { Menu, MenuProps } from "@mui/material";
import { MOBILE_BREAKPOINT } from "../../shared/utils/theme/mobile-dimen";

const HeaderRootContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content;
  background: var(
    --Color-Gradient-SurfaceH,
    linear-gradient(
      90deg,
      ${colors.palette.neutral900} 15%,
      ${colors.palette.primaryDarker} 75%
    )
  );
  width: 100%;
  height: 64px;
`;

const LogoContainer = styled.div`
  margin-left: 32px;
  display: flex;
  align-items: center;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    margin-left: 16px;
  }
`;

const RgithSideActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
  padding-right: 32px;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    padding-right: 8px;
    gap: 12px;
  }
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
    border: "none",
    backgroundColor: colors.palette.neutral900,
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.60)",
    borderRadius: "8px",
    marginTop: "12px",
    width: "222px",
  },
}));

export {
  HeaderRootContainer,
  LogoContainer,
  RgithSideActionsContainer,
  StyledMenu,
};
