import { createI18nClient } from "next-international/client";

export const {
  useI18n,
  I18nProviderClient,
  useCurrentLocale,
  useChangeLocale,
} = createI18nClient({
  nl: () => import("./nl"),
  en: () => import("./en"),
});
