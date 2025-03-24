import { createTheme } from "@mui/material";
import { colors } from "./colors";
import { MOBILE_BREAKPOINT } from "./mobile-dimen";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    customVariant: React.CSSProperties;
    h5_subtitle: React.CSSProperties;
    h3_mobile_subtitle: React.CSSProperties;
    bodyLargeRegular: React.CSSProperties;
    bodyLargeBold: React.CSSProperties;
    bodyMediumRegular: React.CSSProperties;
    bodyMediumBold: React.CSSProperties;
    bodySmallRegular: React.CSSProperties;
    bodySmallBold: React.CSSProperties;
    labelLarge: React.CSSProperties;
    labelMedium: React.CSSProperties;
    labelSmall: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    customVariant?: React.CSSProperties;
    h5_subtitle?: React.CSSProperties;
    h3_mobile_subtitle?: React.CSSProperties;
    bodyLargeRegular?: React.CSSProperties;
    bodyLargeBold?: React.CSSProperties;
    bodyMediumRegular?: React.CSSProperties;
    bodyMediumBold?: React.CSSProperties;
    bodySmallRegular?: React.CSSProperties;
    bodySmallBold?: React.CSSProperties;
    labelLarge?: React.CSSProperties;
    labelMedium?: React.CSSProperties;
    labelSmall?: React.CSSProperties;
  }
}

// Add the custom variant to the theme
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    customVariant: true;
    h5_subtitle: true;
    h3_mobile_subtitle: true;
    bodyLargeRegular: true;
    bodyLargeBold: true;
    bodyMediumRegular: true;
    bodyMediumBold: true;
    bodySmallRegular: true;
    bodySmallBold: true;
    labelLarge: true;
    labelMedium: true;
    labelSmall: true;
  }
}

const isMobile = window.innerWidth < MOBILE_BREAKPOINT;

const CustomTheme = createTheme({
  palette: {
    primary: {
      main: colors.palette.primaryBranding,
      light: colors.palette.primaryLighter,
      dark: colors.palette.primaryDarker,
    },
    secondary: {
      main: colors.palette.secondaryBranding,
      light: colors.palette.secondaryLighter,
      dark: colors.palette.secondaryDarker,
    },
    error: {
      main: colors.palette.feedbackError,
    },
    warning: {
      main: colors.palette.feedbackWarning,
    },
    success: {
      main: colors.palette.feedbackSuccess,
    },
    text: {
      primary: colors.text,
      secondary: colors.text,
      disabled: colors.disabled,
    },
    background: {
      default: colors.background,
    },
    action: {
      disabled: colors.palette.neutral600,
      disabledBackground: colors.palette.neutral800,
    },
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            color: colors.primaryColor,
            backgroundColor: colors.palette.neutral900,
          },
          backgroundColor: colors.palette.surfadeDark,
          color: colors.text,
          textTransform: "initial"
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          fontSize: "14px",
          lineHeight: "20px",
          letterSpacing: 0.1,
          textTransform: "none",
          height: "40px",
          paddingLeft: "16px",
          paddingRight: "16px",
          borderRadius: "100px",
          color: colors.text,
          "&.Mui-disabled": {
            color: colors.palette.neutral600,
            backgroundColor: colors.palette.neutral800,
          },
        },
        text: {
          color: colors.text,
          "&.Mui-disabled": {
            backgroundColor: "#0000",
          },
        },
        outlined: {
          color: colors.primaryColor,
          borderRadius: "8px",
          "&.Mui-disabled": {
            backgroundColor: "transparent",
            borderColor: colors.palette.neutral800,
          },
        },
        contained: {
          color: colors.white,
          background: 'linear-gradient(180deg, #1078EF 0%, #094EB5 100%)',
          "&:hover": {
            backgroundColor: colors.primaryColor,
          },
          "&.Mui-disabled": {
            backgroundColor: colors.disabled,
          },
          borderRadius: "8px",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: colors.palette.neutral800,
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          background: colors.palette.neutral900,
          height: "56px",
          "&.Mui-focused": {
            color: colors.palette.neutral500,
            borderColor: colors.palette.neutral500,
          },
          ":disabled": {
            backgroundColor: "#0000",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: colors.palette.neutral700,
          },
          borderRadius: "8px",
          height: "56px",
          color: colors.text,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            color: colors.palette.neutral400,
            backgroundColor: "#0000",
          },
          "&.Mui-disabled": {
            backgroundColor: "#0000",
          },
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: colors.white,
        },
      },
    },

    // MuiModal: {
    //   styleOverrides: {
    //     root: {
    //       border: "0px",
    //       borderColor: colors.palette.surfadeDark,
    //     },
    //   },
    // },
  },
  typography: {
    fontFamily: "Inter",
    h1: {
      fontWeight: 700,
      fontSize: "40px",
      lineHeight: "48px",
      color: colors.text,
    },
    h2: {
      fontWeight: 700,
      fontSize: "32px",
      lineHeight: "38px",
      color: colors.text,
    },
    h3: {
      fontWeight: 700,
      fontSize: "48px",
      lineHeight: "57.6px",
      color: colors.text,
    },
    h3_mobile_subtitle: {
      fontWeight: 700,
      fontSize: "48px",
      lineHeight: "57.6px",
      color: colors.text,
      fontFamily: "Bebas Neue",
    },
    h4: {
      fontWeight: 700,
      fontSize: "28px",
      lineHeight: "33.89px",
      color: colors.text,
    },
    h5: {
      fontWeight: 400,
      fontSize: "24px",
      lineHeight: "28.8px",
      color: colors.text,
    },
    h5_subtitle: {
      fontWeight: 400,
      fontSize: "36px",
      lineHeight: "43.2px",
      color: colors.text,
      fontFamily: "Bebas Neue",
    },
    h6: {
      fontWeight: 400,
      fontSize: "20px",
      lineHeight: "24px",
      color: colors.text,
    },
    customVariant: {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "19.3px",
      color: "red",
    },
    bodyLargeRegular: {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "19.3px",
      color: colors.text,
    },
    bodyLargeBold: {
      fontWeight: 700,
      fontSize: "16px",
      lineHeight: "19.3px",
      color: colors.text,
    },
    bodyMediumRegular: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "16.8px",
      color: colors.text,
    },
    bodyMediumBold: {
      fontWeight: 700,
      fontSize: "14px",
      lineHeight: "16.8px",
      color: colors.text,
    },
    bodySmallRegular: {
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "14.4px",
      color: colors.text,
    },
    bodySmallBold: {
      fontWeight: 700,
      fontSize: "12px",
      lineHeight: "14.4px",
      color: colors.text,
    },
    labelLarge: {
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "16.8px",
      color: colors.text,
    },
    labelMedium: {
      fontWeight: 500,
      fontSize: "12px",
      lineHeight: "14.4px",
      color: colors.text,
    },
    labelSmall: {
      fontWeight: 500,
      fontSize: "10px",
      lineHeight: "12px",
      color: colors.text,
    },
  },
});

export default CustomTheme;
