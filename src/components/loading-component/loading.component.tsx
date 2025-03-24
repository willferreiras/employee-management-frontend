import { FC } from "react";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import BaseComponent from "../../shared/base/base.component";
import { AnimationAndTextContainer, LoadingContainer } from "./loading.styles";
import { colors } from "../../shared/utils/theme/colors";
import { ReactComponent as LoadingLogo } from "../../assets/loading-logo.svg";

interface ILoadingComponentProps {
  containerHeight?: string;
  containerWidth?: string;
  height?: string;
  width?: string;
  title?: string;
  disableText?: boolean;
}

const LoadingComponent: FC<ILoadingComponentProps> = ({
  containerHeight = "100%",
  containerWidth = "100%",
  height = 80,
  width = 80,
  title,
  disableText = false,
}) => {
  const { t } = useTranslation();
  return (
    <BaseComponent>
      <LoadingContainer
        style={{ height: containerHeight, width: containerWidth }}
      >
        <AnimationAndTextContainer>
          <LoadingLogo style={{ width, height }} />
          {!disableText && (<Typography variant="labelLarge" color={colors.palette.neutral600}>
            {title || t("components.loading.title")}
          </Typography>)}
        </AnimationAndTextContainer>
      </LoadingContainer>
    </BaseComponent>
  );
};

export default LoadingComponent;
