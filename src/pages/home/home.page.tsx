import React from "react";
import BaseHomePage from "../../components/base-home-page/base-home.page";
import ReactPageBaseComponent from "../../components/base-components/react-page-base.component";
import ErrorComponent from "../../components/error/error.component";
import LoadingComponent from "../../components/loading-component/loading.component";
import {
  SharedPageContainer,
  SharedPageLoadingContainer,
  SharedSubTitleContainer,
} from "../../shared/styles/shared-styles";
import { BaseState } from "../../shared/utils/state/base-state";
import useHome from "./hooks/use-home";
import { ReactComponent as TitleBackground } from "../../assets/onboarding_title_background.svg";
import {
  ContentContainer,
  TitleContainer,
  UsernameBackground,
  UserNameContainerWithBackgroundContainer,
  EmployeesContainer,
  EmployeesEmptyContainer,
  EmployeesListContainer
} from "./home.styles";
import { Typography } from "@mui/material";
import { useUser } from "../../contexts/user/user.context";
import { useIsMobile } from "../../shared/is-mobile-context/is-mobile.context";
import { useTranslation } from "react-i18next";
import EmployeesService from "../../services/employee/employee.service";
import PaginationComponent from "../../components/pagination-component/pagination.component";
import EmployeeCard from "./components/employee-card/employee-card.component";
import { TabType } from "../../components/buttons/tab-button/tab-button.component";

interface IHomePageProps {
  employeeService: EmployeesService;
}

const HomePage: React.FC<IHomePageProps> = ({
  employeeService,
}) => {
  const {
    state,
    page,
    employeesData,
    employeesGoToNextPage,
    refresh,
    editEmployee
  } = useHome({
    employeeService: employeeService,
  });
  const { user } = useUser();
  const { isMobile, isDesktop } = useIsMobile();
  const { t } = useTranslation(undefined, { keyPrefix: "pages.home" });
  
  return (
    <ReactPageBaseComponent>
      <BaseHomePage selectedTab={TabType.MANAGER_EMPLOYEE}>
        <SharedPageContainer>
          <ContentContainer>
            <UserNameContainerWithBackgroundContainer>
              <TitleContainer>
                <Typography
                  sx={
                    isMobile
                      ? {
                          fontFamily: "Bebas Neue",
                          fontSize: "40px",
                          lineHeight: "48px",
                          marginTop: "8px",
                        }
                      : { fontFamily: "Bebas Neue" }
                  }
                  variant={isMobile ? "h4" : "h3"}
                >
                  {t("welcome")} {user?.firstName} {user?.lastName}
                </Typography>
              </TitleContainer>

              <UsernameBackground>
                {isMobile && <TitleBackground />}
                {isDesktop && <TitleBackground />}
              </UsernameBackground>
            </UserNameContainerWithBackgroundContainer>

            <EmployeesContainer>
                <SharedSubTitleContainer>
                  <Typography variant="h5_subtitle">{t("employees")}</Typography>
                </SharedSubTitleContainer>
                {employeesData && employeesData?.items.length > 0 && (
                  <EmployeesListContainer>
                    {employeesData?.items.map((employee) => (
                      <EmployeeCard
                        key={employee.id}
                        employee={employee}
                        editEmployee={editEmployee}
                      />
                    ))}
                  </EmployeesListContainer>
                )}
                {employeesData && employeesData?.items.length === 0 && (
                  <EmployeesEmptyContainer>
                    <Typography
                      sx={{ textAlign: "center", marginBottom: "24px" }}
                      variant="bodySmallRegular"
                    >
                      {t("empty-employees")}
                    </Typography>
                  </EmployeesEmptyContainer>
                )}
                {employeesData && employeesData?.items.length > 0 && (
                  <PaginationComponent
                    currentPage={page}
                    totalItems={employeesData?.total || 0}
                    pageClick={employeesGoToNextPage}
                  />
                )}
              </EmployeesContainer>
          </ContentContainer>

          {state === BaseState.loading && (
            <SharedPageLoadingContainer>
              <LoadingComponent />
            </SharedPageLoadingContainer>
          )}

          {state === BaseState.error && (
            <SharedPageLoadingContainer>
              <ErrorComponent onRefresh={refresh} />
            </SharedPageLoadingContainer>
          )}
        </SharedPageContainer>
      </BaseHomePage>
    </ReactPageBaseComponent>
  );
};

export default HomePage;
