"use client";

import { ReactNode } from "react";
import { I18nProviderClient } from "../../translations/client";

type ProviderProps = {
  locale: string;
  children: ReactNode;
};

const I18NProvider = ({ locale, children }: ProviderProps) => {
  return <I18nProviderClient locale={locale}>{children}</I18nProviderClient>;
};

export default I18NProvider;
