import i18n, { LanguageDetectorModule } from "i18next";
import { initReactI18next } from "react-i18next";
import ptBr from "./pt-br.json";

const resources = {
  ptBr: { translation: ptBr },
};

const languageByCountry: Record<string, keyof typeof resources> = {
  pt: "ptBr",
};

const languageDetector: LanguageDetectorModule = {
  type: "languageDetector",
  detect: () => {
    return languageByCountry.ptBR;
  },
};

export type TAppLanguages = keyof typeof resources;

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: "v3",
    resources,
    fallbackLng: "ptBr",
    interpolation: {
      escapeValue: false,
    },
  });

export { i18n as internationalization };
export default { internationalization: i18n };
