import React from "react";
import {
  HeaderRootContainer,
  RgithSideActionsContainer,
} from "./header.styles";
import { ReactComponent as NotificationIcon } from "../../assets/icon-logout.svg";
import { IconButton } from "@mui/material";
import { useUser } from "../../contexts/user/user.context";

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = ({}) => {
  const { logout } = useUser();
  const logoutOnClick = () => {
    logout();
  };

  return (
    <HeaderRootContainer>
      <RgithSideActionsContainer>
        <IconButton size="medium" onClick={logoutOnClick}>
          <NotificationIcon width={24} height={24} />{" "}
        </IconButton>
      </RgithSideActionsContainer>
    </HeaderRootContainer>
  );
};

export default Header;
