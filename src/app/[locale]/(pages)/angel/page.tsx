"use client"

import React from 'react';
import {useI18n} from "../../../../../translations/client";
import Image from "next/image";
import {useWindowSize} from "@/lib/hooks/useWindowsize";

const Page = () => {
    const t = useI18n();
      const windowSize = useWindowSize();
      const smallScreen = windowSize.width! < 700;

    return (
    <div className={`flex ${smallScreen ? "flex-col " : "flex-row"} columns-2 gap-10`}>
        <div className={`flex-column grow-0 ${smallScreen ? "w-[100] " : "w-[35%]"}  ps-10 pt-10`}>
          <h3 className="font-medium text-xl">MELANCHOLY ANGEL</h3>
          <p className="mt-3">
            <i>{t("angel.caption")}</i> {t("angel.subcaption")}<br /><br />
            {t("general.credits")} <i>{t("general.neeltje")}</i><br /><br />
            <i>3.2021</i> 
        </p> 
        </div>
        <div className={`flex flex-wrap w-[100%] gap-2 pt-10 ${smallScreen && "justify-center"}`}>
        <Image
          src={
            "https://res.cloudinary.com/dwgsproch/image/upload/v1710076047/20%20NEELTJE%202021%203%20-%20alter%20ego%20-%20melancholy%20angel/2021-04-30_15.39.24_fq76t9.png"
          }
          alt={"book1"}
          width={300}
          height={400}
        />
        <Image
          src={
            "https://res.cloudinary.com/dwgsproch/image/upload/v1710076041/20%20NEELTJE%202021%203%20-%20alter%20ego%20-%20melancholy%20angel/IMG_9876_ausg2b.jpg"
          }
          alt={"book1"}
          width={300}
          height={400}
        />
        <Image
          src={
            "https://res.cloudinary.com/dwgsproch/image/upload/v1710076042/20%20NEELTJE%202021%203%20-%20alter%20ego%20-%20melancholy%20angel/IMG_9856_gsqddv.jpg"
          }
          alt={"book1"}
          width={300}
          height={400}
        />
        <Image
          src={
            "https://res.cloudinary.com/dwgsproch/image/upload/v1710076035/20%20NEELTJE%202021%203%20-%20alter%20ego%20-%20melancholy%20angel/IMG_9893_g5puss.jpg"
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