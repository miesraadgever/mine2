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
          <h3 className="font-medium text-xl">BLAADJES ROMANCE</h3>
          <p className="mt-3">
            {t("blaadjes.caption")}<br /><br />
            {t("general.credits")} <i>{t("general.neeltje")}</i><br /><br />
            <i>11.2018</i>
        </p> 
        </div>
        <div className={`flex flex-wrap w-[100%] gap-2 pt-10 ${smallScreen && "justify-center"}`}>
        <Image
          src={
            "https://res.cloudinary.com/dwgsproch/image/upload/v1709928106/3%20NEELTJE%202018%209%20-%20blaadjes%20romance/IMG_20220217_0009_vgtepg.jpg"
          }
          alt={"book1"}
          width={400}
          height={400}
        /> </div>
        <div className={`flex flex-wrap w-[100%] gap-2 pt-10 ${smallScreen && "justify-center"}`}>
        <Image
          src={
            "https://res.cloudinary.com/dwgsproch/image/upload/v1709928168/3%20NEELTJE%202018%209%20-%20blaadjes%20romance/5_jgsyng.png"
          }
          alt={"book1"}
          width={300}
          height={150}
        /> </div>
        <div className={`flex flex-wrap w-[100%] gap-2 pt-10 ${smallScreen && "justify-center"}`}>
        <Image
          src={
            "https://res.cloudinary.com/dwgsproch/image/upload/v1709928130/3%20NEELTJE%202018%209%20-%20blaadjes%20romance/6_vpr2ow.png"
          }
          alt={"book1"}
          width={300}
          height={150}
        /> </div>
        <div className={`flex flex-wrap w-[100%] gap-2 pt-10 ${smallScreen && "justify-center"}`}>
        <Image
          src={
            "https://res.cloudinary.com/dwgsproch/image/upload/v1709928125/3%20NEELTJE%202018%209%20-%20blaadjes%20romance/7_dkxxmm.png"
          }
          alt={"book1"}
          width={300}
          height={150}
        />
      </div>
    </div>
        
    );
};

export default Page;