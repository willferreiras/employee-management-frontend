import { Button, IconButton, SxProps } from "@mui/material";
import { colors } from "../../../shared/utils/theme/colors";

interface IHighlightButtonProps {
  onClick: () => void;
  text: string;
  leftIcon?: React.ReactNode;
  isMobile?: boolean;
  fullWidth?: boolean;
  style?: SxProps;
}

const HighlightButton: React.FC<IHighlightButtonProps> = ({
  onClick,
  leftIcon,
  text,
  isMobile,
  fullWidth,
  style
}) => {
  return (
    <>
      {!isMobile && (
        <Button
          variant="outlined"
          sx={{
            width: fullWidth ? "100%" : "147px",
            borderWidth: "1px",
            borderColor: "transparent",
            borderRadius: "8px",
            marginRight: "8px",
            color: colors.text,
            background: `linear-gradient(119deg, ${colors.primaryColor} 0.04%, ${colors.palette.secondaryLighter} 100.04%)`,
            border: "none",
            "&:hover": {
              background: `linear-gradient(119deg, ${colors.primaryColor} 0.04%, ${colors.palette.secondaryLighter} 100.04%)`,
              border: "none",
            },
            ...style
          }}
          onClick={onClick}
          startIcon={leftIcon}
        >
          {text}
        </Button>
      )}
      {isMobile && (
        <IconButton
          sx={{
            height: "40px",
            width: "40px",
            borderWidth: "1px",
            borderColor: "transparent",
            borderRadius: "40px",
            marginRight: "8px",
            color: colors.text,
            background: `linear-gradient(119deg, ${colors.primaryColor} 0.04%, ${colors.palette.secondaryLighter} 100.04%)`,
            border: "none",
            "&:hover": {
              background: `linear-gradient(119deg, ${colors.primaryColor} 0.04%, ${colors.palette.secondaryLighter} 100.04%)`,
              border: "none",
            },
          }}
        >
          {leftIcon}
        </IconButton>
      )}
    </>
  );
};

export default HighlightButton;
