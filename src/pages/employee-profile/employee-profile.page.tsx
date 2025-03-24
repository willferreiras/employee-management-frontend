import React from "react";
import BaseHomePage from "../../components/base-home-page/base-home.page";
import {
  SharedPageContainer,
  SharedTitleBackContainer,
  SharedTittleContainer
} from "../../shared/styles/shared-styles";
import {
  ButtonContainer,
  ContainerForm,
  FormContainer,
  InputGroup,
  RegisterContainer,
} from "./employee-profile.styles";
import { Button, IconButton, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useEmployeeProfile } from "./hook/use-profile.hooks";
import { TabType } from "../../components/buttons/tab-button/tab-button.component";
import EmployeeService from "../../services/employee/employee.service";
import { ReactComponent as BackIcon } from "../../assets/back-icon.svg";
import { colors } from "../../shared/utils/theme/colors";
import { BaseState } from "../../shared/utils/state/base-state";
import { Formik } from "formik";
import { BaseInput } from "../../components/base-components/base-input.component";
import LoadingComponent from "../../components/loading-component/loading.component";

interface IEmployeeProfilePageProps {
  employeeService: EmployeeService;
}

const PEmployeeProfilePage: React.FC<IEmployeeProfilePageProps> = ({ employeeService }: IEmployeeProfilePageProps) => {
  const { profile, goBack, state, handleSubmit, isSubmitAlreadyDone, formSchema, isActive, updateEmployeeActive } = useEmployeeProfile({
    employeeService,
  });
  const { t } = useTranslation();

  return (
    <BaseHomePage selectedTab={TabType.UNSELECTED}>
      <SharedPageContainer>
        {state !== BaseState.loading && profile && (
          <RegisterContainer>
            <SharedTittleContainer
              style={{ height: "80px", marginTop: "24px", marginLeft: "24px" }}
            >
              <SharedTitleBackContainer>
                <IconButton onClick={goBack}>
                  <BackIcon />
                </IconButton>
                <Typography
                  variant="h3"
                  sx={{
                    color: colors.secondaryColor,
                    fontFamily: "Bebas Neue",
                  }}
                >
                  {t("pages.register.update-title")}
                </Typography>
              </SharedTitleBackContainer>
              <Typography
                variant="bodySmallRegular"
                sx={{ color: colors.palette.neutral600, marginTop: "8px" }}
              >
                {t("pages.register.update-description")}
              </Typography>
            </SharedTittleContainer>
            <ContainerForm>
              <Formik
                initialValues={{
                  firstName: profile?.firstNname,
                  lastName: profile?.lastName,
                  document: profile?.document,
                  email: profile?.email,
                  isActive: profile?.isActive,
                }}
                validateOnBlur={true}
                validateOnChange={true}
                isInitialValid={true}
                onSubmit={handleSubmit}
                enableReinitialize={true}
                validationSchema={formSchema}
              >
                {({
                  values,
                  errors,
                  setFieldValue,
                }) => (
                  <FormContainer>
                    <InputGroup>
                      <BaseInput
                        label={t("pages.register.name")}
                        fullWidth
                        value={values.firstName}
                        error={isSubmitAlreadyDone ? errors.firstName || "" : ""}
                        setState={value => {
                          setFieldValue("firstName", value);
                        }}
                      />
                      <BaseInput
                        label={t("pages.register.lastName")}
                        fullWidth
                        value={values.lastName}
                        error={isSubmitAlreadyDone ? errors.lastName || "" : ""}
                        setState={value => {
                          setFieldValue("lastName", value);
                        }}
                      />
                      <BaseInput
                        label={t("pages.register.document")}
                        fullWidth
                        value={values.document}
                        error={isSubmitAlreadyDone ? errors.document || "" : ""}
                        setState={value => {
                          if (value.length <= 11) {
                            setFieldValue("document", value);
                          }
                        }}
                      />
                      <BaseInput
                        label={t("pages.register.email")}
                        fullWidth
                        value={values.email}
                        error={isSubmitAlreadyDone ? errors.email || "" : ""}
                        setState={value => {
                          setFieldValue("email", value);
                        }}
                      />
                      <BaseInput
                        type="checkbox"
                        label={t("pages.register.active")}
                        fullWidth
                        value={isActive ? "S" : "N"}
                        checked={isActive}
                        error={isSubmitAlreadyDone ? errors.isActive || "" : ""}
                        setState={value => {
                          null  
                        }}
                        setChecked={value => {
                          setFieldValue("isActve", value);
                          updateEmployeeActive();
                        }}
                      />
                    </InputGroup>
                    <ButtonContainer>
                      <Button
                        variant="contained"
                        sx={{ color: "white", width: "100%" }}
                        onClick={() => handleSubmit(values)}
                      >
                        {t("pages.register.buttons.update")}
                      </Button>
                    </ButtonContainer>
                  </FormContainer>
                )}
              </Formik>
            </ContainerForm>
          </RegisterContainer>
        )}

        {state === BaseState.loading || !profile && <LoadingComponent />}
      </SharedPageContainer>
    </BaseHomePage>
  );
};

export default PEmployeeProfilePage;
