"use client";

import React from "react";
import { useI18n } from "../../../../../translations/client";
import Image from "next/image";
import {useWindowSize} from "@/lib/hooks/useWindowsize";

const Page = () => {
  const t = useI18n();
    const windowSize = useWindowSize();
    const smallScreen = windowSize.width! < 700;

  return (
    <div className={`flex ${smallScreen ? "flex-col " : "flex-row"} columns-2 gap-10`}>
      <div className={`flex-column grow-0 ${smallScreen ? "w-[100] " : "w-[35%]"}  ps-10 pt-10`}>
        <h3 className="font-medium text-xl">LOST BOOKS</h3>
        <p className="mt-3">
          {t("lostbooks.caption")}
          <br></br>
            {t("general.credits")} <i>{t("general.mies")}</i>
          <br></br>
          <br></br>
          {t("general.ongoing")}
        </p>
      </div>
      <div className={`flex flex-wrap w-[100%] gap-2 pt-10 ${smallScreen && "justify-center"}`}>
        <Image
          src={
            "https://res.cloudinary.com/dwgsproch/image/upload/v1710077611/MIES%20-%20lost%20books/7_vszbyq.jpg"
          }
          alt={"book1"}
          width={300}
          height={400}
        />
        <Image
          src={
            "https://res.cloudinary.com/dwgsproch/image/upload/v1710077616/MIES%20-%20lost%20books/5_clqr0i.jpg"
          }
          alt={"book1"}
          width={300}
          height={400}
        />
        <Image
          src={
            "https://res.cloudinary.com/dwgsproch/image/upload/v1710077617/MIES%20-%20lost%20books/1_qgclg2.jpg"
          }
          alt={"book1"}
          width={300}
          height={400}
        />
        <Image
          src={
            "https://res.cloudinary.com/dwgsproch/image/upload/v1710077619/MIES%20-%20lost%20books/4_wzh3pz.jpg"
          }
          alt={"book1"}
          width={300}
          height={400}
        />
      </div>
    </div>
  );
};

export default Page;
