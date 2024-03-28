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
          <h3 className="font-medium text-xl">AGAIN AND AGAIN AND AGAIN</h3>
          <p className="mt-3">
             {t("again.caption")} 
             <br /><br />
             {t("again.model")} <i>{t("again.helen")}</i><br />
             {t("general.credits")} <i>{t("general.neeltje")}</i><br /><br />
            <i>4.2021</i> 
        </p> 
        </div>
        <div className={`flex flex-wrap w-[100%] gap-2 pt-10 ${smallScreen && "justify-center"}`}>
        <Image
          src={
            "https://res.cloudinary.com/dwgsproch/image/upload/v1710076118/23%20NEELTJE%202021%204%20-%20again%20and%20again%20and%20again/2021-04-15_19.42.29_wntuc9.jpg"
          }
          alt={"book1"}
          width={300}
          height={400}
        />
        <Image
          src={
            "https://res.cloudinary.com/dwgsproch/image/upload/v1710076103/23%20NEELTJE%202021%204%20-%20again%20and%20again%20and%20again/2021-04-15_19.39.51_eqss6n.jpg"
          }
          alt={"book1"}
          width={500}
          height={300}
        />
        <Image
          src={
            "https://res.cloudinary.com/dwgsproch/image/upload/v1710076106/23%20NEELTJE%202021%204%20-%20again%20and%20again%20and%20again/2021-04-15_19.38.35_nixpem.jpg"
          }
          alt={"book1"}
          width={300}
          height={400}
        />
        <Image
          src={
            "https://res.cloudinary.com/dwgsproch/image/upload/v1710076116/23%20NEELTJE%202021%204%20-%20again%20and%20again%20and%20again/2021-04-15_19.44.21_bapt0x.jpg"
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