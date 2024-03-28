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
        <h3 className="font-medium text-xl"> DROOM ARCHIEF</h3>
        <p className="mt-3">
            {t("droom.caption")}<br />
            {t("droom.materiaal")}<br /><br />
            {t("general.credits")} <i>{t("general.neeltje")}</i><br /><br />
            <i>2.2018</i> 
        </p>
      </div>
      <div className={`flex flex-wrap w-[100%] gap-2 pt-10 ${smallScreen && "justify-center"}`}>
                <video className={"w-[55%] col-3"} loop muted autoPlay>
                    <source src={"https://res.cloudinary.com/dwgsproch/video/upload/v1709925368/2%20NEELTJE%202018%202%20-%20droom%20archief/1.mp4"}></source>
                </video>

                <video className={"w-[55%] col-3"} loop muted autoPlay>
                    <source src={"https://res.cloudinary.com/dwgsproch/video/upload/v1709925368/2%20NEELTJE%202018%202%20-%20droom%20archief/2.mp4"}></source>
                </video>

                <video className={"w-[55%] col-3"} loop muted autoPlay>
                    <source src={"https://res.cloudinary.com/dwgsproch/video/upload/v1709925368/2%20NEELTJE%202018%202%20-%20droom%20archief/3.mp4"}></source>
                </video>
       </div>
    </div>
  );
};

export default Page;