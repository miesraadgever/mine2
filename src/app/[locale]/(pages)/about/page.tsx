"use client";

import React from "react";
import Image from "next/image";
import definitie from "../../../../../public/mi_nedefinitie.jpg";
import { useI18n } from "../../../../../translations/client";
import Link from "next/link";
import { useWindowSize } from "@/lib/hooks/useWindowsize";

const Page = () => {
  const t = useI18n();
  const windowSize = useWindowSize();
  const smallScreen = windowSize.width! < 800;

  return (
      <>
        <div
            className={`flex ${smallScreen ? "flex-col " : "flex-row"} gap-10 col-12`}
        >
          <div className={`flex ${smallScreen ? "col-12" : "col-5"}  pl-5`}>
            <div>
              {t("about.paragraph1")}
              <br />
              <br />
              {t("about.paragraph2")}
              <br />
              <br />
              {t("about.paragraph3")}
              <br />
              <Link href={"/mies"}>Mies Raadgever</Link>,{" "}
              <Link href={"/neeltje"}>Neeltje de Jong</Link>
            </div>
          </div>
          <div
              className={`${smallScreen ? "col-12 flex justify-center" : "col-6"}`}
          >
            <Image
                width={500}
                height={350}
                src={definitie}
                alt="mi_nedefinitie"
                className={"justify-center"}
            ></Image>
          </div>
        </div>
        <div
            className={`flex ${smallScreen ? "flex-col " : "flex-row"} gap-10 col-12`}
        >
          <div
              className={`flex flex-col ${smallScreen ? "col-12 pl-5" : "col-5 pl-5"} `}
          >
            <p
                className={` ${smallScreen ? "" : "pl-7"} font-medium text-4xl mb-3 mt-10  `}
            >
              /MI / - Mies Raadgever{" "}
            </p>
            <p className={` ${smallScreen ? "flex justify-center" : "pl-7"}`}>
              {t("about.miesParagraph1")} <br />
              <br />
              {t("about.miesParagraph2")}
              <br />
              <br />
              {t("about.miesParagraph3")} <br />
              <br />
              {t("about.miesParagraph4")}
            </p>
          </div>
          {smallScreen && (
              <div className="flex col-12 flex-row  gap-10 justify-start pl-5">
                <div className="text-sm ">
                  <i>
                    <a
                        href={"http://no-souls.blogspot.com/"}
                        target="_blank"
                        className={"hover:opacity-50"}
                    >
                      no-souls.blogspot.com
                    </a>{" "}
                  </i>{" "}
                  <br />
                  <i>@miesraadgever</i> <br />
                  <i>mjraadgever@gmail.com</i>
                </div>
                <p className="leading-6 text-sm">
                  {t("about.mineVertoning1")}
                    <br />
                  Nomination Kazerne Design Award, Eindhoven 2020 <br />
                  Blauwdruk, Amersfoort 2020 <br />
                  Culturele Zaterdag, Utrecht 2020 <br />
                  A0 Expo, Utrecht 2020 <br />
                  Graduation Show Design Academy Eindhoven, 2019 <br />
                  Amersfoortste Prachtnacht, 2018
                </p>
              </div>
          )}
          <div
              className={`flex flex-col ${smallScreen ? "col-12 pl-5" : "col-5 pl-5"} `}
          >
            <p
                className={` ${smallScreen ? "" : "pl-7"} font-medium text-4xl mb-3 mt-10  `}
            >
              / NE/ - Neeltje de Jong
            </p>
            <p className={` ${smallScreen ? "flex justify-center" : "pl-7"}`}>
              {t("about.neeltjeParagraph1")}
              <br />
              <br />
              {t("about.neeltjeParagraph2")}
              <br />
              <br />
              {t("about.neeltjeParagraph3")}
              <br />
              <br />
              {t("about.neeltjeParagraph4")}
            </p>
          </div>
          {smallScreen && (
              <div className="flex col-12 flex-row gap-10 justify-start pl-5">
                <div className="text-sm">
                  <i>
                    <a
                        href={"http://www.nelaneeltje.blogspot.com"}
                        target="_blank"
                        className={"hover:opacity-50"}
                    >
                      nelaneeltje.blogspot.com
                    </a>
                  </i>
                  <br />
                  <i>@nelaneeltje</i> <br />
                  <i>nelaneeltje@gmail.com</i>
                  <br /> <br />
                </div>
                <div>
                  <p className="text-sm leading-6">
                    {t("about.mineVertoning1")}
                    <br />
                    {t("about.neeltjeVertoning7")}
                    <br />
                    {t("about.neeltjeVertoning1")}
                    <br />
                    {t("about.neeltjeVertoning2")}
                    <br />
                    {t("about.neeltjeVertoning3")}
                    <br />
                    {t("about.neeltjeVertoning4")}
                    <br />
                    {t("about.neeltjeVertoning5")}
                    <br />
                    {t("about.neeltjeVertoning6")}
                  </p>
                </div>
              </div>
          )}
        </div>
        {!smallScreen && (
            <div className="flex flex-row gap-10 col-12 mb-5">
              <div className="flex col-5 flex-column pl-5">
                <div className="text-sm pl-7">
                  <i>
                    <a
                        href={"http://no-souls.blogspot.com/"}
                        target="_blank"
                        className={"hover:opacity-50"}
                    >
                      no-souls.blogspot.com
                    </a>
                  </i>
                  <br />
                  <i>@miesraadgever</i> <br />
                  <i>mjraadgever@gmail.com</i>
                  <br /> <br />
                  <p className="leading-6">
                    {t("about.mineVertoning1")}
                    <br />
                    Nomination Kazerne Design Award, Eindhoven 2020 <br />
                    Blauwdruk, Amersfoort 2020 <br />
                    Culturele Zaterdag, Utrecht 2020 <br />
                    A0 Expo, Utrecht 2020 <br />
                    Graduation Show Design Academy Eindhoven, 2019 <br />
                    Amersfoortste Prachtnacht, 2018
                  </p>
                </div>
              </div>
              <div className="flex col-6 flex-column pl-5">
                <div className="text-sm pl-7">
                  <i>
                    <a
                        href={"http://www.nelaneeltje.blogspot.com"}
                        target="_blank"
                        className={"hover:opacity-50"}
                    >
                      nelaneeltje.blogspot.com
                    </a>
                  </i>
                  <br />
                  <i>@nelaneeltje</i> <br />
                  <i>nelaneeltje@gmail.com</i>
                  <br /> <br />
                  <p className="leading-6 text-sm">
                    {t("about.mineVertoning1")}
                    <br />
                    {t("about.neeltjeVertoning1")}
                    <br />
                    {t("about.neeltjeVertoning2")}
                    <br />
                    {t("about.neeltjeVertoning3")}
                    <br />
                    {t("about.neeltjeVertoning4")}
                    <br />
                    {t("about.neeltjeVertoning5")}
                    <br />
                    {t("about.neeltjeVertoning6")}
                  </p>
                </div>
              </div>
            </div>
        )}
      </>
  );
};

export default Page;