import React from "react";
import { Button, Typography } from "@mui/material";
import { ReactComponent as AlerIcon } from "../../../assets/alert-icon.svg";
import { RootContainer } from "./alert-error-pop-up.styles";
import { colors } from "../../../shared/utils/theme/colors";

interface IAlertErrorPopUpProps {
  title: string;
  message: string;
  positiveButtonText?: string;
  width?: number;
  positiveButtonOnClick?: () => void;
}

const AlertErrorPopUp: React.FC<IAlertErrorPopUpProps> = ({
  title,
  message,
  positiveButtonText,
  positiveButtonOnClick,
  width = 280,
}) => {
  return (
    <RootContainer style={{ width: `${width}px` }}>
      <AlerIcon />
      <Typography variant="bodyLargeBold" sx={{ color: colors.white }}>
        {title}
      </Typography>
      <Typography variant="bodyMediumRegular" sx={{ color: colors.white }}>
        {message}
      </Typography>
      <Button
        variant="text"
        sx={{
          width: "99px",
          alignSelf: "flex-end",
        }}
        onClick={positiveButtonOnClick}
      >
        {positiveButtonText || ""}
      </Button>
    </RootContainer>
  );
};

export default AlertErrorPopUp;
