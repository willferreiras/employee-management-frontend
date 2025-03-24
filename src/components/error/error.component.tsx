import React from "react";
import styled from "styled-components";
import { Button, Typography } from "@mui/material";
import { ReactComponent as ErrorIcon } from "./assets/erro.svg";
import BaseComponent from "../../shared/base/base.component";
import { useTranslation } from "react-i18next";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  align-items: center;
`;

const ButtonContainer = styled.div`
`;

interface IErrorComponentProps {
  onRefresh?: () => void;
}

const ErrorComponent: React.FC<IErrorComponentProps> = ({ onRefresh }) => {
  const {t} = useTranslation(undefined, { keyPrefix: "components" });
  return (
    <BaseComponent>
      <Container>
        <ErrorIcon width={120} height={120} />
        <Typography
          variant="bodyMediumRegular"
          style={{
            marginBottom: "24px",
            marginTop: "12px",
            width: "331px",
            textAlign: "center",
          }}
        >
          {t("error.description")}
        </Typography>
        <ButtonContainer>
          <Button sx={{width: '138px'}} variant="contained" onClick={onRefresh}> {t("buttons.refresh.label")} </Button>
        </ButtonContainer>
      </Container>
    </BaseComponent>
  );
};

export default ErrorComponent;
