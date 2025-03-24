import { ErrorOutlineOutlined } from "@mui/icons-material";
import {
  Checkbox,
  FormControlLabel,
  InputAdornment,
  SxProps,
  TextField,
  Theme,
  useTheme,
} from "@mui/material";
import React, { useMemo, forwardRef, FormEventHandler } from "react";
import ReactInputMask from "react-input-mask";
import { colors } from "../../shared/utils/theme/colors";

export type TBaseInputProps = {
  setState: (value: string) => void;
  error: string | null;
  label: string;
  value: string;
  disabled?: boolean;
  type?: string;
  fullWidth?: boolean;
  mask?: string;
  iconEnd?: React.ReactNode;
  iconStart?: React.ReactNode;
  multiline?: boolean;
  lines?: number;
  labelBackground?: string;
  containerStyle?: SxProps<Theme>;
  onKeyDown?: React.KeyboardEventHandler<HTMLDivElement> | undefined;
  inputPropsStyle?: SxProps<Theme>;
  onBeforeInput?: FormEventHandler<any> | undefined;
  placeholder?: string;
  checked?: boolean;
  setChecked?: (value: boolean) => void;
};

export const BaseInput = forwardRef<HTMLInputElement, TBaseInputProps>(
  (
    {
      setState,
      error,
      label,
      value,
      type,
      fullWidth,
      mask,
      iconEnd,
      iconStart,
      lines,
      multiline,
      labelBackground,
      disabled = false,
      containerStyle = {},
      onKeyDown,
      inputPropsStyle,
      onBeforeInput,
      placeholder,
      checked,
      setChecked,
    },
    ref,
  ) => {
    const theme = useTheme();

    const customStyles: any = useMemo(() => {
      return iconStart
        ? {
            "& .MuiOutlinedInput-input": {
              padding: "18.5px 16px 18.5px 0px",
            },
            "& .MuiInputLabel-root": {
              backgroundColor: disabled ? "#0000" : labelBackground || colors.palette.neutral900,
              paddingRight: "4px",
              width: "auto",
              whiteSpace: "nowrap",
              overflow: "visible",
              textOverflow: "clip",
            },
          }
        : {
            "& .MuiInputLabel-root": {
              backgroundColor: disabled ? "#0000" : labelBackground || colors.palette.neutral900,
              paddingRight: "4px",
              width: "auto",
              whiteSpace: "nowrap",
              overflow: "visible",
              textOverflow: "clip",
            },
          };
    }, [iconStart, labelBackground]);

    if (type === "checkbox") {
      return (
        <FormControlLabel
          control={
            <Checkbox
              sx={{
                ...customStyles,
                ...(containerStyle as SxProps<Theme>),
                "& .MuiSvgIcon-root": {
                  color: theme.palette.text.primary,
                },
                "&.Mui-checked": {
                  color: theme.palette.primary.main,
                },
              }}
              checked={checked || false}
              onChange={event => setChecked && setChecked(event.target.checked)}
              disabled={disabled}
            />
          }
          label={label}
        />
      );
    }

    return (
      <TextField
        sx={{
          ...customStyles,
          ...(containerStyle as SxProps<Theme>),
        }}
        disabled={disabled}
        variant="outlined"
        type={type || "text"}
        label={label}
        placeholder={placeholder ? placeholder : undefined}
        fullWidth={fullWidth}
        multiline={multiline ?? undefined}
        rows={lines ?? undefined}
        value={value}
        onChange={event => setState(event.target.value)}
        onBeforeInput={onBeforeInput}
        InputProps={{
          sx: { ...inputPropsStyle, backgroundColor: disabled ? "#0000" : colors.palette.neutral900 },
          inputComponent: mask ? (ReactInputMask as any) : undefined,
          inputProps: mask
            ? {
                mask,
              }
            : undefined,
          startAdornment: iconStart ? (
            <InputAdornment position="start">{iconStart}</InputAdornment>
          ) : undefined,
           
          endAdornment: error ? (
            <InputAdornment position="end">
              <ErrorOutlineOutlined
                style={{ color: theme.palette.error.main }}
              />
            </InputAdornment>
          ) : iconEnd ? (
            <InputAdornment position="end">{iconEnd}</InputAdornment>
          ) : undefined,
        }}
        helperText={error}
        error={!!error}
        inputRef={ref}
        onKeyDown={onKeyDown}
      />
    );
  },
);

BaseInput.displayName = "BaseInput";
