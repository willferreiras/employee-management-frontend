import React from "react";
interface IBaseScreenProps {
  children: React.ReactNode;
}

const BaseScreen: React.FC<IBaseScreenProps> = props => {
  return (
    <div style={{ overflowY: "hidden", overflowX: "hidden" }}>
      {props.children}
    </div>
  );
};

export default BaseScreen;
