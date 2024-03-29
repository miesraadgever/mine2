import React, { ReactNode } from "react";
import I18NProvider from "@/components/i18nProvider";
import { getCurrentLocale } from "../../../translations/server";
import dynamic from "next/dynamic";

const PageTamplate = ({ children }: { children: ReactNode }) => {
  const locale = getCurrentLocale();
  const DynamicHeader = dynamic(() => import("@/components/Header"), {
    ssr: false,
  }); // Import your Header component dynamically

  return (
    <div>
      <I18NProvider locale={locale}>
        <DynamicHeader />
        {children}
      </I18NProvider>
    </div>
  );
};

export default PageTamplate;
