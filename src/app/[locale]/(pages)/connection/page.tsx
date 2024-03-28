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
        <h3 className="font-medium text-xl">EXCERPTS OF CONNECTION</h3>
        <p className="mt-3">
          {t("connection.caption")}<br /><br />
          {t("connection.performers")} <i>{t("connection.maya")}</i><br />
          {t("connection.muziek")} <i>{t("connection.buddy")}</i><br /><br />
          {t("general.credits")} <i>{t("general.neeltje")}</i><br /><br />
            <i>1.2021</i>
        </p>
      </div>
      <div className={`flex flex-wrap w-[100%] gap-2 pt-10 ${smallScreen && "justify-center"}`}>
        <Image
          src={
            "https://res.cloudinary.com/dwgsproch/image/upload/v1709931648/15%20NEELTJE%202021%201%20-%20excerpts%20of%20connection/2021-01-29_15.27.00_gkurc9.jpg"
          }
          alt={"book1"}
          width={300}
          height={400}
        />
        <Image
          src={
            "https://res.cloudinary.com/dwgsproch/image/upload/v1709931633/15%20NEELTJE%202021%201%20-%20excerpts%20of%20connection/foto_1_ulmzwx.png"
          }
          alt={"book1"}
          width={300}
          height={400}
        />
        <Image
          src={
            "https://res.cloudinary.com/dwgsproch/image/upload/v1709931639/15%20NEELTJE%202021%201%20-%20excerpts%20of%20connection/foto_2_ah3lok.jpg"
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