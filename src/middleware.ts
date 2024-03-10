import { createI18nMiddleware } from "next-international/middleware";
import { NextRequest } from "next/server";

const I18NMiddleware = createI18nMiddleware({
  locales: ["nl", "en"],
  defaultLocale: "nl",
});

export function middleware(request: NextRequest) {
  return I18NMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
