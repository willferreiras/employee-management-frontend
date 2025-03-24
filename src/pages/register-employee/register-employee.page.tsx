import React from "react";
import { useTranslation } from "react-i18next";
import { Button, IconButton, Typography } from "@mui/material";
import { Formik } from "formik";
import { BaseInput } from "../../components/base-components/base-input.component";
import {
  ButtonContainer,
  ContainerForm,
  FormContainer,
  InputGroup,
  RegisterContainer,
} from "./register-employee.styles";
import { colors } from "../../shared/utils/theme/colors";
import { useEmployeeRegister } from "./hooks/use-register.hook";
import EmployeeService from "../../services/employee/employee.service";
import { BaseState } from "../../shared/utils/state/base-state";
import LoadingComponent from "../../components/loading-component/loading.component";
import BaseHomePage from "../../components/base-home-page/base-home.page";
import { TabType } from "../../components/buttons/tab-button/tab-button.component";
import { SharedPageContainer, SharedTitleBackContainer, SharedTittleContainer } from "../../shared/styles/shared-styles";
import { ReactComponent as BackIcon } from "../../assets/back-icon.svg";

interface IRegisterEmployeePageProps {
  employeeService: EmployeeService;
}

const RegisterEmployeePage: React.FC<
  IRegisterEmployeePageProps
> = ({ employeeService }: IRegisterEmployeePageProps) => {
  const { t } = useTranslation();
  
  const { handleSubmit, isSubmitAlreadyDone, state, formSchema, goBack } =
  useEmployeeRegister({
    employeeService,
  });

  return (
    <BaseHomePage selectedTab={TabType.UNSELECTED}>
      <SharedPageContainer>
        {state !== BaseState.loading && (
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
                  {t("pages.register.title")}
                </Typography>
              </SharedTitleBackContainer>
              <Typography
                variant="bodySmallRegular"
                sx={{ color: colors.palette.neutral600, marginTop: "8px" }}
              >
                {t("pages.register.description")}
              </Typography>
            </SharedTittleContainer>
            <ContainerForm>
              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  document: "",
                  email: "",
                  password: "",
                  checkPassword: ""
                }}
                validateOnBlur={true}
                validateOnChange={true}
                isInitialValid={false}
                onSubmit={handleSubmit}
                enableReinitialize={false}
                validationSchema={formSchema}
              >
                {({
                  values,
                  errors,
                  setFieldValue,
                  isValid,
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
                        label={t("pages.register.password")}
                        type="password"
                        fullWidth
                        value={values.password || ""}
                        error={isSubmitAlreadyDone ? errors.password || "" : ""}
                        setState={value => {
                          setFieldValue("password", value);
                        }}
                      />
                      <BaseInput
                        label={t("pages.register.confirm-password")}
                        type="password"
                        fullWidth
                        value={values.checkPassword || ""}
                        error={
                          isSubmitAlreadyDone ? errors.checkPassword || "" : ""
                        }
                        setState={value => {
                          setFieldValue("checkPassword", value);
                        }}
                      />
                    </InputGroup>
                    <ButtonContainer>
                      <Button
                        variant="contained"
                        sx={{ color: "white", width: "100%" }}
                        disabled={!isValid}
                        onClick={() => handleSubmit(values)}
                      >
                        {t("pages.register.buttons.register")}
                      </Button>
                    </ButtonContainer>
                  </FormContainer>
                )}
              </Formik>
            </ContainerForm>
          </RegisterContainer>
        )}

        {state === BaseState.loading && <LoadingComponent />}
      </SharedPageContainer>
    </BaseHomePage>
  );
};

export default RegisterEmployeePage;
