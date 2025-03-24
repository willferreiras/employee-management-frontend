import LoadingComponent from "../../loading-component/loading.component";
import { BaseIconButtonContainer } from "./base-icon-button.styles";

interface IBaseIconButtonProps {
  isLoading?: boolean;
  children?: React.ReactNode;
}

const BaseIconButton: React.FC<IBaseIconButtonProps> = ({
  children,
  isLoading = false,
}) => {
  return (
    <BaseIconButtonContainer>
      {isLoading && <LoadingComponent disableText width="24px" height="24px" />}
      {!isLoading && children}
    </BaseIconButtonContainer>
  );
};

export default BaseIconButton;