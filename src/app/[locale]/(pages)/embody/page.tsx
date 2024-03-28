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
        <h3 className="font-medium text-xl">EMBODY; FEEL - COME BACK - DO NOT PERCEIVE ME</h3>
        <p className="mt-3">
        {t("embody.caption")}<br /><br />
          {t("general.credits")} <i>{t("embody.credits")}</i><br /><br />
            <i>10.2021</i>
        </p>
      </div>
      <div className={`flex flex-wrap w-[100%] gap-2 pt-10 ${smallScreen && "justify-center"}`}>
        <video className={"w-[55%] col-3"} loop muted autoPlay>
              <source src={"https://res.cloudinary.com/dwgsproch/video/upload/v1710684423/29%20NEELTJE%202021%2010%20-%20embody%3B%20feel%20-%20come%20back%20-%20do%20not%20perceive%20me/fe64bbf2-a82a-4115-91b9-e5ff2f581167_rh5dxl.mov"}></source>
         </video>
        <Image
          src={
            "https://res.cloudinary.com/dwgsproch/image/upload/v1710076530/29%20NEELTJE%202021%2010%20-%20embody%3B%20feel%20-%20come%20back%20-%20do%20not%20perceive%20me/2A21D200-4DD2-4361-AD9C-4D5CC6C25EFC_cftrkt.jpg"
          }
          alt={"book1"}
          width={300}
          height={400}
        />
        <Image
          src={
            "https://res.cloudinary.com/dwgsproch/image/upload/v1710076529/29%20NEELTJE%202021%2010%20-%20embody%3B%20feel%20-%20come%20back%20-%20do%20not%20perceive%20me/fc969910-2f00-45ec-980c-baafa1554223_c3kmy3.jpg"
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