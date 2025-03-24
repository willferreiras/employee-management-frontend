import React from "react";
import styled from "styled-components";

interface IReactPageBaseComponentProps {
  children: React.ReactNode;
}

const ReactPageBaseComponentContainer = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;

const ReactPageBaseComponent: React.FC<IReactPageBaseComponentProps> = ({
  children,
}) => {
  return (
    <ReactPageBaseComponentContainer>
      {children}
    </ReactPageBaseComponentContainer>
  );
};

export default ReactPageBaseComponent;
