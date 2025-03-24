import React from "react";
import Header from "../header/header.component";
import {
  BottomNavigationContainer,
  BottomNavigationItemContainer,
  MainContentContainer,
  RootContainer,
  TabContainer,
  TabContentContainer,
} from "./base-home.styles";
import Tab from "../tab/tab.component";
import { TabType } from "../buttons/tab-button/tab-button.component";
import { useIsMobile } from "../../shared/is-mobile-context/is-mobile.context";
import BottomNavigation from "@mui/material/BottomNavigation";
import { BottomNavigationAction } from "@mui/material";
import { ReactComponent as HomeIcon } from "../../assets/icons_controller.svg";
import { ReactComponent as ProfileIcon } from "../../assets/icon-profile-box.svg";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
  HOME_PATH,
  REGISTER_EMPLOYEE,
} from "../../routers/private.route";

interface IBaseHomePageProps {
  selectedTab: TabType;
  children?: React.ReactNode;
}

const BaseHomePage: React.FC<IBaseHomePageProps> = ({
  selectedTab,
  children,
}) => {
  const { isMobile } = useIsMobile();
  const { t } = useTranslation(undefined, { keyPrefix: "components.tab" });
  const navigate = useNavigate();

  const getText = () => {
    switch (selectedTab) {
      case TabType.MANAGER_EMPLOYEE:
        return t("magane-employees");
      case TabType.UNSELECTED:
        return t("mobile-label");
    }
  };

  const goToEmployees = () => {
    navigate(HOME_PATH);
  };

  const newEmployees = () => {
    navigate(REGISTER_EMPLOYEE);
  };

  return (
    <RootContainer>
      <Header />
      {isMobile && (
        <MainContentContainer ismobile={isMobile}>
          {children}
          <BottomNavigationContainer>
            <BottomNavigation
              showLabels
              value={getText()}
              sx={{
                background: "linear-gradient(90deg, #102133 15%, #060E17 75%)",
                height: "80px",
              }}
            >
              <BottomNavigationAction
                label={t("manage-users.label")}
                sx={{ gap: "4px" }}
                onClick={goToEmployees}
                icon={
                  <BottomNavigationItemContainer
                    selected={getText() === t("manage-users.label")}
                  >
                    <HomeIcon />
                  </BottomNavigationItemContainer>
                }
              />
              <BottomNavigationAction
                label={t("mobile-label")}
                sx={{ gap: "4px" }}
                onClick={newEmployees}
                icon={
                  <BottomNavigationItemContainer
                    selected={getText() === t("mobile-label")}
                  >
                    <ProfileIcon />
                  </BottomNavigationItemContainer>
                }
              />
            </BottomNavigation>
          </BottomNavigationContainer>
        </MainContentContainer>
      )}

      {!isMobile && (
        <TabContentContainer>
          <TabContainer>
            <Tab selectedTab={selectedTab} />
          </TabContainer>
          <MainContentContainer ismobile={isMobile}>
            {children}
          </MainContentContainer>
        </TabContentContainer>
      )}
    </RootContainer>
  );
};

export default BaseHomePage;
