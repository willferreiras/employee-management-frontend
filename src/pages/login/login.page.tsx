import { Button, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import { Formik } from "formik";
import { BaseInput } from "../../components/base-components/base-input.component";
import {
  FormContainer,
  InputGroup,
  Container,
  ContainerLoginPassword,
  ButtonContainer
} from "./login.styles";
import ReactPageBaseComponent from "../../components/base-components/react-page-base.component";
import { AuthPageBaseScreen } from "../../components/auth-page-base-screen/auth-page-base-screen.component";
import { colors } from "../../shared/utils/theme/colors";
import { useLogin } from "./hooks/use-login.hook";
import ApiAuthService from "../../services/auth/auth.service";
import { employeesAPI } from "../../services/employee-api";
import { BaseState } from "../../shared/utils/state/base-state";
import LoadingComponent from "../../components/loading-component/loading.component";
import { useIsMobile } from "../../shared/is-mobile-context/is-mobile.context";

interface ILoginPageProps {}

const authService = new ApiAuthService(employeesAPI);

export function LoginPage({}: ILoginPageProps): any {
  const { t } = useTranslation();
  const formSchema = Yup.object().shape({
    username: Yup.string()
      .required(t("pages.login.error.username")),
    password: Yup.string().required(t("pages.login.error.password")),
  });

  const {
    handleSubmit,
    isSubmitAlreadyDone,
    state,
  } = useLogin({
    authService,
  });

  const { isMobile } = useIsMobile();

  return (
    <ReactPageBaseComponent>
      <AuthPageBaseScreen>
        {state !== BaseState.loading && (
          <React.Fragment>
            {state === BaseState.initial && (
              <ContainerLoginPassword>
                <Container>
                  <Typography
                    variant="h5_subtitle"
                    sx={{
                      color: colors.textTitleRed,
                    }}
                  >
                    {t("pages.login.title")}
                  </Typography>

                  <Formik
                    initialValues={{ username: "", password: "" }}
                    validateOnBlur={true}
                    validateOnChange={true}
                    isInitialValid={false}
                    onSubmit={(values, { setSubmitting }) => {
                      handleSubmit(values);
                      setSubmitting(false);
                    }}
                    validationSchema={formSchema}
                    enableReinitialize={false}
                  >
                    {({
                      isSubmitting,
                      values,
                      errors,
                      setFieldValue,
                      isValid,
                      submitForm,
                    }) => (
                      <FormContainer onSubmit={(e) => {
                        e.preventDefault();
                        submitForm();
                      }}>
                        <InputGroup>
                          <BaseInput
                            label={t("pages.login.username")}
                            fullWidth
                            value={values.username}
                            error={
                              isSubmitAlreadyDone ? errors.username || "" : ""
                            }
                            setState={value => {
                              setFieldValue("username", value);
                            }}
                          />
                          <BaseInput
                            label={t("pages.login.password")}
                            type="password"
                            error={
                              isSubmitAlreadyDone ? errors.password || "" : ""
                            }
                            value={values.password}
                            setState={value => {
                              setFieldValue("password", value);
                            }}
                          />
                        </InputGroup>
                        <ButtonContainer>
                          <Button
                            variant="contained"
                            sx={{
                              color: "white",
                              width: isMobile ? "105px" : "100%",
                            }}
                            disabled={!isValid || isSubmitting}
                            onClick={() => {
                              submitForm();
                            }}
                            type="submit"
                          >
                            {t("pages.login.buttons.login")}
                          </Button>
                        </ButtonContainer>
                      </FormContainer>
                    )}
                  </Formik>
                </Container>
              </ContainerLoginPassword>
            )}
          </React.Fragment>
        )}

        {state === BaseState.loading && <LoadingComponent />}
      </AuthPageBaseScreen>
    </ReactPageBaseComponent>
  );
}
