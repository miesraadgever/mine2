"use client";

import React from "react";
import { useI18n } from "../../../../../translations/client";
import Image from "next/image";
import { useWindowSize } from "@/lib/hooks/useWindowsize";

const Page = () => {
  const t = useI18n();
  const windowSize = useWindowSize();
  const smallScreen = windowSize.width! < 800;

  return (
    <div
      className={`flex ${smallScreen ? "flex-col " : "flex-row"} columns-2 gap-10`}
    >
      <div
        className={`flex-column grow-0 ${smallScreen ? "w-[100] " : "w-[35%]"}  ps-10 pt-10`}
      >
        <h3 className="font-medium text-xl">TATTOOS</h3>
        <p className="mt-3">
          {t("tattoos.caption")}
          <br></br>
          {t("general.credits")} <i>{t("general.mies")}</i>
          <br></br>
          <br></br>
          {t("general.ongoing")}
        </p>
      </div>
      <div
        className={`flex flex-wrap w-[100%] gap-2 pt-10 ${smallScreen && "justify-center"}`}
      >
        <Image
          alt={"tattoo1"}
          src="https://res.cloudinary.com/dwgsproch/image/upload/v1710077002/MIES%20-%20tattoos/IMG_8519_n8rleb.png"
          width={712}
          height={828}
          className={"object-cover w-80 h-96"}
        />
        <Image
          alt={"tattoo2"}
          src="https://res.cloudinary.com/dwgsproch/image/upload/v1711551030/MIES%20-%20tattoos/E21DD21B-F1E7-4F37-AC5A-3708E852386D_zwuyx3_ubs4ov.jpg"
          width={375}
          height={650}
          className={"object-cover w-80 h-96"}
        />
      </div>
    </div>
  );
};

export default Page;
