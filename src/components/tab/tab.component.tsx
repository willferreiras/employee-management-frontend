import BaseComponent from "../../shared/base/base.component";
import TabButton, {
  TabType,
} from "../buttons/tab-button/tab-button.component";
import {
  ButtonsContainer,
  Divider,
  TabContainer,
} from "./tab.styles";
import { useNavigate } from "react-router-dom";
import { HOME_PATH, REGISTER_EMPLOYEE } from "../../routers/private.route";
import HighlightButton from "../buttons/highlight-button/highlight-button.component";
import { useTranslation } from "react-i18next";

interface ITabProps {
  selectedTab: TabType;
}

const Tab: React.FC<ITabProps> = ({ selectedTab }) => {
  const navigate = useNavigate();
  const { t } = useTranslation(undefined, { keyPrefix: "components.tab" });

  const goToGames = () => {
    navigate(HOME_PATH);
  };

  const goToRegisterEmployee = () => {
    navigate(REGISTER_EMPLOYEE)
  }

  return (
    <BaseComponent>
      <TabContainer>
        <ButtonsContainer>
          <TabButton
            type={TabType.MANAGER_EMPLOYEE}
            onClick={goToGames}
            selected={selectedTab === TabType.MANAGER_EMPLOYEE}
          />
          <Divider />
          <HighlightButton
            onClick={goToRegisterEmployee}
            text={t("employee.label")}
            fullWidth
          />
        </ButtonsContainer>
      </TabContainer>
    </BaseComponent>
  );
};

export default Tab;
