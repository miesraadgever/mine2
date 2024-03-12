"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useCurrentLocale, useI18n } from "../../translations/client";
import LanguageSelector from "@/components/LanguageSelector";
import { useWindowSize } from "@/lib/hooks/useWindowsize";
import Hamburger from "hamburger-react";

const Header = () => {
  const locale = useCurrentLocale();
  const t = useI18n();
  const windowSize = useWindowSize();
  const smallScreen = windowSize.width! < 445;
  const [isOpen, setOpen] = useState(false);


  return (
        <>
          {!smallScreen ? (
            <div className={"flex flex-row justify-between m-3"}>
              <div>
                <Link href={"/"} className={"hover:opacity-50"}>
                  <span className={"font-medium text-xl"}>mi_ne movement</span>
                </Link>
              </div>
              <div className={"flex flex-row gap-5 mr-5 text-md"}>
                <div>
                  <Link href={"/"} className={"hover:opacity-50 align-middle"}>
                    {t("general.home")}
                  </Link>
                </div>
                <div>
                  <Link
                    href={"/about"}
                    className={"pt-5 hover:opacity-50 align-middle"}
                  >
                    about
                  </Link>
                </div>
                <LanguageSelector />
              </div>
            </div>
          ) : (
            <div>
              <div className={"flex flex-row justify-between m-3"}>
                <div className={"mt-2"}>
                  <Link href={"/"} className={"hover:opacity-50"}>
                    <span className={"font-medium text-xl"}>
                      mi_ne movement
                    </span>
                  </Link>
                </div>
                <div className={""}>
                  <Hamburger
                    toggled={isOpen}
                    toggle={setOpen}
                    size={20}
                    distance={"sm"}
                  />
                </div>
              </div>
              {isOpen && (
                <div className={"flex justify-center gap-4 absolute w-full top-16"}>
                  <div>
                    <Link
                      href={"/"}
                      className={"hover:opacity-50 align-middle"}
                    >
                      {t("general.home")}
                    </Link>
                  </div>
                  <div>
                    <Link
                      href={"/about"}
                      className={"pt-5 hover:opacity-50 align-middle"}
                    >
                      about
                    </Link>
                  </div>
                  <LanguageSelector />
                </div>
              )}
            </div>
          )}
        </>
  );
};

export default Header;
