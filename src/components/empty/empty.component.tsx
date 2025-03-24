import React from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";
import BaseComponent from "../../shared/base/base.component";
import { ReactComponent as ErrorIcon } from "./assets/erro.svg";

const Container = styled.div`
  display: grid;
  grid-template-rows: max-content max-content;
  height: fit-content;
  justify-items: center;
`;

interface IEmptyComponentProps {
  text: string;
}

const EmptyComponent: React.FC<IEmptyComponentProps> = ({ text }) => {
  return (
    <BaseComponent>
      <Container>
        <ErrorIcon />
        <Typography
          variant="h3"
          style={{
            marginBottom: "32px",
            marginTop: "14px",
            width: "536px",
            textAlign: "center",
          }}
        >
          No momento não há {text} cadastrados
        </Typography>
      </Container>
    </BaseComponent>
  );
};

export default EmptyComponent;
