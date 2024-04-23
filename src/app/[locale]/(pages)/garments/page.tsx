"use client";

import React from "react";
import { useI18n } from "../../../../../translations/client";
import Image from "next/image";
import { useWindowSize } from "@/lib/hooks/useWindowsize";
import { CldImage } from "next-cloudinary";

const Page = () => {
  const t = useI18n();
  const windowSize = useWindowSize();
  const smallScreen = windowSize.width! < 800;

  return (
    <div className={`flex ${smallScreen ? "flex-col" : "flex-row"} col-12 `}>
      <div className={`flex flex-col ${smallScreen ? "col-12" : "col-6"}`}>
        {/* Text */}
        <div className={`${smallScreen ? "ml-2 mb-4" : "p-6 mb-4"} `}>
          <h3 className="font-medium text-xl">SADGIRLWEARABLES; GARMENTS</h3>
          <p className="mt-3">
            <i>{t("garments.caption")} </i>
            <br />
            <br />
            {t("general.credits")} <i>{t("general.neeltje")}</i>
            <br />
            <br />
            {t("general.ongoing")}
          </p>
        </div>
      </div>

      {/* Images */}
      <div
        className={`flex-wrap flex gap-2 mt-10 ${smallScreen ? " justify-center col-12" : " justify-start col-6"}`}
      >
        <a href="/garments/lace">
          <div className="">
            <CldImage
              src={
                "https://res.cloudinary.com/dwgsproch/image/upload/v1712574490/neeltje%20-%20garments:%20lace%20skirt/2023-09-15_15.41.43-41_w4lixg.jpg"
              }
              alt={"lace"}
              width={180}
              height={240}
              className={`${smallScreen ? "w-40 h-48" : "w-43 h-48"} object-cover`}
            />
          </div>
        </a>
        <a href="/garments/sheotw">
          <div className="">
            <CldImage
              src={
                "https://res.cloudinary.com/dwgsproch/image/upload/v1712572654/34%20NEELTJE%202022%206%20-%20she%20%27otw%20jurk/IMG_1184_zckuck.jpg"
              }
              alt={"sheotw"}
              width={180}
              height={240}
              className={`${smallScreen ? "w-40 h-48" : "w-43 h-48"} object-cover`}
            />
          </div>
        </a>
        <a href="/garments/girl">
          {" "}
          <div className="">
            <CldImage
              src={
                "https://res.cloudinary.com/dwgsproch/image/upload/v1710076529/28%20NEELTJE%202021%209%20-%20prettiest%20girl%20of%20the%20party/IMG_0737_ydedw1.jpg"
              }
              alt={"girl"}
              width={180}
              height={240}
              className={`${smallScreen ? "w-40 h-48" : "w-43 h-48"} object-cover`}
            />
          </div>{" "}
        </a>
        <a href="/garments/torn">
          <div className="">
            <CldImage
              src={
                "https://res.cloudinary.com/dwgsproch/image/upload/v1710076118/25%20NEELTJE%202021%205%20-%20torn%20torn%20torn%2C%20as%20is%20life/IMG_9741_mdfpah.jpg"
              }
              alt={"torntorntorn"}
              width={180}
              height={240}
              className={`${smallScreen ? "w-40 h-48" : "w-43 h-48"} object-cover`}
            />
          </div>
        </a>
        <a href="/garments/maybe">
          <div className="">
            <CldImage
              src={
                "https://res.cloudinary.com/dwgsproch/image/upload/v1710076052/24%20NEELTJE%202021%205%20-%20torn%20maybe..%20butterfly%20hoodie%20ft%20chloe/IMG_9809_rl2wwa.jpg"
              }
              alt={"tornmaybe"}
              width={180}
              height={240}
              className={`${smallScreen ? "w-40 h-48" : "w-43 h-48"} object-cover`}
            />
          </div>{" "}
        </a>
        <a href="/garments/angel">
          <div className="">
            <CldImage
              src={
                "https://res.cloudinary.com/dwgsproch/image/upload/v1711722456/20%20NEELTJE%202021%203%20-%20alter%20ego%20-%20melancholy%20angel/3BBA8EC0-EC3D-40AC-8C62-CB7D171EBE66_a4cw6t.jpg"
              }
              alt={"angel"}
              width={180}
              height={240}
              className={`${smallScreen ? "w-40 h-48" : "w-43 h-48"} object-cover`}
            />
          </div>
        </a>
        <a href="/garments/sorrow">
          <div className="">
            <CldImage
              src={
                "https://res.cloudinary.com/dwgsproch/image/upload/v1710076035/18%20NEELTJE%202021%203%20-%20alter%20ego%20-%20sorrow%20revolution%20skirt/2021-03-12_01.11.41-4-1_vq8akt.jpg"
              }
              alt={"sorrow"}
              width={180}
              height={240}
              className={`${smallScreen ? "w-40 h-48" : "w-43 h-48"} object-cover`}
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Page;
