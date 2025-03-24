import React from "react";
import styled from "styled-components";

const ReactBaseComponentContainer = styled.div``;

interface IReactBaseComponentProps {
  children: React.ReactNode;
}

const ReactBaseComponent: React.FC<IReactBaseComponentProps> = ({
  children,
}) => {
  return <ReactBaseComponentContainer>{children}</ReactBaseComponentContainer>;
};

export default ReactBaseComponent;
