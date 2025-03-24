// TODO: write documentation for colors and palette in own markdown file and add links from here

export const palette = {
  primaryBranding: "#1078EF",
  primaryLighter: "#4C9EFD",
  primaryDarker: "#060E17",
  primaryLightest: "#7EBAFF",
  secondaryBranding: "#EB1A52",
  secondaryLighter: "#FF386E",
  secondaryLightest: "#FF7096",
  secondaryDarker: "#B90E44",
  neutral900: "#102133",
  neutral800: "#2D3748",
  neutral700: "#4A5568",
  neutral600: "#718096",
  neutral500: "#A0AEC0",
  neutral400: "#CBD5E0",
  neutral300: "#E2E8F0",
  neutral200: "#EDF2F7",
  neutral100: "#F7FAFC",
  neutral50: "#FAFAFA",
  neutralWhite: "#FFFFFF",
  feedbackError: "#E90C24",
  feedbackSuccess: "#1EC615",
  feedbackWarning: "#ECD20E",
  feedbackInfo: "#2966FF",
  surfaceBlack: "#010305",
  surfadeDark: "#091522",
  surfaceDarkest: "#060E17",
  surfaceGrey: "#CBD5E0",
  surfaceLightGrey: "#EDF2F7",
  surfaceWhite: "#FFFFFF",
  textBody: "#fff",
} as const;

export const colors = {
  /**
   * The palette is available to use, but prefer using the name.
   * This is only included for rare, one-off cases. Try to use
   * semantic names as much as possible.
   */
  palette,
  transparent: "rgba(0, 0, 0, 0)",
  text: palette.textBody,
  textTitleRed: palette.secondaryBranding,
  background: palette.neutral50,
  error: palette.feedbackError,
  primaryColor: palette.primaryBranding,
  secondaryColor: palette.secondaryBranding,
  primaryDark: palette.primaryDarker,
  white: palette.neutralWhite,
  disabled: palette.neutral200,
  feedbackSuccess: palette.feedbackSuccess,
};
