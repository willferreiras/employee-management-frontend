import { Button } from "@mui/material";
import BaseComponent from "../../../shared/base/base.component";
import { colors } from "../../../shared/utils/theme/colors";
import { ReactComponent as ManagerEmployeeIcon } from "../../../assets/icons_controller.svg"
import { useTranslation } from "react-i18next";

interface ITabButtonProps {
  type: TabType;
  onClick: () => void;
  selected: boolean;
}

export enum TabType {
  HOME,
  MANAGER_EMPLOYEE,
  UNSELECTED,
}

const TabButton: React.FC<ITabButtonProps> = ({ type, onClick, selected }) => {
  const { t } = useTranslation(undefined, { keyPrefix: "components" });

  const getIcon = () => {
    switch (type) {
      case TabType.MANAGER_EMPLOYEE:
        return <ManagerEmployeeIcon />;
    }
  };

  const getText = () => {
    switch (type) {
      case TabType.MANAGER_EMPLOYEE:
        return t("tab.manage-users.label");
    }
  };

  return (
    <BaseComponent>
      <Button
        variant="contained"
        style={{justifyContent: "flex-start"}}
        sx={{
          background: selected
          ? colors.palette.neutral900
          : colors.palette.surfadeDark,
          backgroundColor: selected
            ? colors.palette.neutral900
            : colors.palette.surfadeDark,
          height: "56px",
          width: "100%",
          borderRadius: "8px",
          boxShadow: "none",
          border: selected ? `1px solid ${colors.palette.neutral400}` : "none",
          textAlign: "left",
          "&:hover": {
            backgroundColor: colors.palette.surfadeDark,
            background: colors.palette.surfadeDark,
            boxShadow: "none",
          },
        }}
        startIcon={getIcon()}
        onClick={onClick}
      >
        {getText()}
      </Button>{" "}
    </BaseComponent>
  );
};

export default TabButton;
