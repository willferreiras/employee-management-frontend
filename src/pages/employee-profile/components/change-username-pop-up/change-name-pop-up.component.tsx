import { useTranslation } from "react-i18next";
import {
  CenterContainer,
  PopUpContainer,
} from "./change-name-pop-up.styles";
import { Typography } from "@mui/material";
import { BaseInput } from "../../../../components/base-components/base-input.component";
import { ReactComponent as IconAlertRed } from "../../../../assets/icons_alert_red.svg";
import { colors } from "../../../../shared/utils/theme/colors";
import React from "react";
import { IEmployeeModel } from "../../../../models/employee.model";
import PopUpBaseComponent from "../../../../components/pop-ups/pop-up-base.component";

interface IChangeEmployeeNamePopUpProps {
  employee: IEmployeeModel
  onOkOnClick: (newFirstName: string, newLastName: string) => void;
  onCancelOnClick: () => void;
}

const ChangeEmployeeNamePopUp: React.FC<IChangeEmployeeNamePopUpProps> = ({
  employee,
  onCancelOnClick,
  onOkOnClick,
}) => {
  const { t } = useTranslation(undefined, {
    keyPrefix: "pages.profile.change-username-pop-up",
  });
  const [firstNname, setFirstName] = React.useState<string>(employee.firstNname || "");
  const [lastName, setLastName] = React.useState<string>(employee.lastName || "");

  return (
    <PopUpBaseComponent
      title={t("title")}
      positiveButtonLabel={t("buttons.ok")}
      negativeButtonLabel={t("buttons.cancel")}
      onOkOnClick={() => onOkOnClick(firstNname, lastName)}
      onCancelOnClick={onCancelOnClick}
    >
      <PopUpContainer>
        <BaseInput
          key="firstName"
          value={firstNname}
          setState={(value) => {
            setFirstName(value);
          }}
          error={""}
          label={t("title")}
          containerStyle={{ marginTop: "24px" }}
        />

        <BaseInput
          key="lastName"
          value={lastName}
          setState={(value) => {
            setLastName(value);
          }}
          error={""}
          label={t("title")}
          containerStyle={{ marginTop: "24px" }}
        />
        <CenterContainer>
          <Typography
            variant="bodySmallRegular"
            sx={{ marginTop: "8px", color: colors.palette.neutral600 }}
          >
            {t("username-lenght-alert")}
          </Typography>
          <IconAlertRed style={{ marginTop: "16px" }} />
          <Typography
            variant="bodySmallRegular"
            sx={{
              marginTop: "8px",
              width: "212px",
              color: colors.error,
              textAlign: "center",
            }}
          >
            {t("username-not-real-alert")}
          </Typography>
        </CenterContainer>
      </PopUpContainer>
    </PopUpBaseComponent>
  );
};

export default ChangeEmployeeNamePopUp;
