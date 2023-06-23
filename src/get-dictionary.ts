import type { Locale } from "../i18n-config";

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  en: () =>
    import("./locales/en/translation.json").then((module) => module.default),
  br: () =>
    import("./locales/br/translation.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
