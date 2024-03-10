import React, { ReactNode } from "react";
import I18NProvider from "@/components/i18nProvider";
import Header from "@/components/Header";
import { getCurrentLocale } from "../../../translations/server";

const PageTamplate = ({ children }: { children: ReactNode }) => {
  const locale = getCurrentLocale();

  return (
    <div>
      <I18NProvider locale={locale}>
        <Header />
        {children}
      </I18NProvider>
    </div>
  );
};

export default PageTamplate;
