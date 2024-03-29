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
        {t("braiding.caption")}<br />
          <i>{t("braiding.subcaption")}</i><br /><br />
          {t("braiding.credits")} <i>{t("general.neeltje")}</i><br /><br />
            <i>6.2022</i>
        </p>
      </div>
      <div className={`flex flex-wrap w-[100%] gap-2 pt-10 ${smallScreen && "justify-center"}`}>
        <video
            src={
                "https://res.cloudinary.com/dwgsproch/video/upload/v1710684054/31%20NEELTJE%202021%2012%20-%20braiding%20in%20silence/vlechten_stills_v0yxsq.mp4"
            }
            width={400}
            height={300}
            />
        <Image
          src={
            "https://res.cloudinary.com/dwgsproch/image/upload/v1710076557/31%20NEELTJE%202021%2012%20-%20braiding%20in%20silence/IMG_6920_odtwti.png"
          }
          alt={"book1"}
          width={300}
          height={700}
        />
        <Image
          src={
            "https://res.cloudinary.com/dwgsproch/image/upload/v1710076530/31%20NEELTJE%202021%2012%20-%20braiding%20in%20silence/WhatsApp_Image_2022-10-28_at_3.39.05_PM_1_brn5h7.jpg"
          }
          alt={"book1"}
          width={600}
          height={300}
        />
      </div>
    </div>
  );
};

export default Page;