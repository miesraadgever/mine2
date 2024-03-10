"use client";
import { Button } from "primereact/button";
import { useChangeLocale, useCurrentLocale } from "../../translations/client";

const LanguageSelector = () => {
  const currentLocale = useCurrentLocale();
  const changeLocale = useChangeLocale({ preserveSearchParams: true });

  const languages: { [key: string]: string } = {
    nl: "Nederlands",
    en: "English",
  };

  return (
    <div className={"flex mt-0 pt-0"}>
      {Object.keys(languages).map((langKey, index) => (
        <span key={`language-${index}`} className="flex">
          <Button
            data-testid={`language-${langKey}-button`}
            style={{
              opacity: currentLocale === langKey ? 1 : 0.5,
              fontWeight: currentLocale === langKey ? "medium" : "normal",
              padding: "0.3rem",
              lineHeight: "0"
            }}
            onClick={() => changeLocale(langKey === "nl" ? "nl" : "en")}
          >
            <i>{langKey}</i>
          </Button>
          {index < Object.keys(languages).length - 1 && (
            <div className={"flex"} key={`language-divider${index} align-middle`}>_</div>
          )}
        </span>
      ))}
    </div>
  );
};

export default LanguageSelector;
