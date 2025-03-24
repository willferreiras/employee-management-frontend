import React from "react";
import { Button } from "@mui/material";
import { ReactNode } from "react";
import { colors } from "../../shared/utils/theme/colors";

export enum TButtonType {
  PRIMARY,
  SECONDARY,
  TERTIARY,
  DANGER,
  TRANSPARENT,
  OUTLINE,
}

export enum TButtonSize {
  SMALL,
  MEDIUM,
  LARGE,
}

export enum TButtonState {
  DEFAULT_ENABLED,
  PRESSED,
  DISABLED,
  LOADING,
}

interface IButtonComponentProps {
  onClick?: (text: string) => void;
  type?: TButtonType;
  size?: TButtonSize;
  state?: TButtonState;
  text: string;
  isPressed?: boolean;
  children?: any;
  leftIcon?: ReactNode;
  endIcon?: any;
  padding?: { left: number; right: number; top: number; bottom: number };
}

export default function ButtonComponent(props: IButtonComponentProps) {
  const buttonType = props.type ? props.type : TButtonType.PRIMARY;
  const buttonState = props.state ? props.state : TButtonState.DEFAULT_ENABLED;
  const isDisabled = props.state === TButtonState.DISABLED;

  const buttonStyle: React.CSSProperties = {
    color: colors.primaryColor,
    textAlign: "center",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "20px",
    letterSpacing: 0.1,
    textTransform: "none",
    fontFamily: "Noto Sans",
    height: "40px",
    paddingLeft: "16px",
    paddingRight: "16px",
  };

  const onClick = () => {
    if (isDisabled) {
      return;
    }

    props.onClick?.(props.text);
  };

  function pressedStyle(): React.CSSProperties {
    const baseStyle = buttonStyle;
    baseStyle.backgroundColor = colors.primaryColor;
    baseStyle.borderRadius = "48px";
    baseStyle.color = colors.text;

    return baseStyle;
  }

  function defaultEnabledStyle(): React.CSSProperties {
    const baseStyle = buttonStyle;
    baseStyle.backgroundColor = colors.primaryColor;
    baseStyle.borderRadius = "48px";
    baseStyle.color = colors.white;

    return baseStyle;
  }

  function transparentTypeStyle(): React.CSSProperties {
    const baseStyle = buttonStyle;
    baseStyle.color = colors.primaryColor;
    baseStyle.borderRadius = "48px";
    baseStyle.backgroundColor = "#00000000";

    return baseStyle;
  }

  function outlineTypeStyle(): React.CSSProperties {
    const baseStyle = buttonStyle;
    baseStyle.color = colors.primaryColor;
    baseStyle.borderRadius = "48px";
    baseStyle.backgroundColor = "#00000000";
    baseStyle.border = `1px solid ${colors.primaryColor}`;

    return baseStyle;
  }

  function disabledStyle(): React.CSSProperties {
    const baseStyle = buttonStyle;
    baseStyle.backgroundColor = colors.disabled;
    baseStyle.borderRadius = "48px";
    baseStyle.color = colors.white;

    return baseStyle;
  }

  function handleStyleByProps(): React.CSSProperties {
    if (buttonType === TButtonType.TRANSPARENT) {
      return transparentTypeStyle();
    }

    if (buttonState === TButtonState.PRESSED) {
      return pressedStyle();
    }

    if (buttonState === TButtonState.DISABLED) {
      return disabledStyle();
    }

    if (buttonType === TButtonType.OUTLINE) {
      return outlineTypeStyle();
    }

    if (buttonState === TButtonState.DEFAULT_ENABLED) {
      return defaultEnabledStyle();
    }

    return buttonStyle;
  }

  return (
    <Button
      onClick={() => onClick()}
      style={handleStyleByProps()}
      disabled={buttonState === TButtonState.DISABLED}
      startIcon={props.leftIcon}
    >
      {props.text}
      {props.children ? props.children : null}
    </Button>
  );
}
