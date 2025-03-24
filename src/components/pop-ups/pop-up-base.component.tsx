import { Button, Typography } from "@mui/material";
import {
  ButtonsContainer,
  ContentContainer,
  Divider,
  PopUpContainer,
} from "./pop-up-base-component-style";
import { colors } from "../../shared/utils/theme/colors";
import LoadingComponent from "../loading-component/loading.component";

interface IPopUpProps {
  title: string;
  description?: string;
  positiveButtonLabel: string;
  negativeButtonLabel?: string;
  onOkOnClick: () => void;
  onCancelOnClick?: () => void;
  children?: React.ReactNode;
  disabledOkButton?: boolean;
  width?: string;
  isLoading?: boolean;
  removeActionsButtons?: boolean;
}

const PopUp: React.FC<IPopUpProps> = ({
  title,
  description,
  children,
  positiveButtonLabel,
  negativeButtonLabel,
  onOkOnClick,
  onCancelOnClick,
  disabledOkButton,
  width,
  isLoading,
  removeActionsButtons,
}: IPopUpProps) => {
  return (
    <PopUpContainer style={width ? { width: width } : {}}>
      <Typography variant="h4" sx={{ color: colors.secondaryColor }}>
        {title}
      </Typography>
      {description && (
        <Typography variant="bodySmallRegular">{description}</Typography>
      )}
      <Divider />
      {!isLoading && <ContentContainer>{children}</ContentContainer>}
      {isLoading && <LoadingComponent />}
      {!removeActionsButtons && (
        <ButtonsContainer>
          <Button variant="text" color="primary" onClick={onCancelOnClick}>
            {negativeButtonLabel}
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={onOkOnClick}
            disabled={disabledOkButton}
          >
            {positiveButtonLabel}
          </Button>
        </ButtonsContainer>
      )}
    </PopUpContainer>
  );
};

export default PopUp;
