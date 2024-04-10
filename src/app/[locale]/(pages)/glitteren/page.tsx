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
          <h3 className="font-medium text-xl">GLITTEREN</h3>
          <p className="mt-3">
            {t("glitteren.caption")}
            <br />
            <br />
            {t("glitteren.model")} <i>{t("glitteren.loek")}</i>
            <br />
            {t("general.credits")} <i>{t("general.neeltje")}</i>
            <br />
            <br />
            <i>5.2021</i>
          </p>
        </div>
        {/* Grote afbeelding rechts  */}
        {smallScreen && (
          <div className={"col-12 justify-center flex"}>
            <div className="flex ">
              <Image
                src={
                  "https://res.cloudinary.com/dwgsproch/image/upload/v1711719585/22%20NEELTJE%202021%203%20-%20glitteren/2021-01-09_15.28.43_hb1ehz.jpg"
                }
                alt={"glit"}
                width={600}
                height={700}
              />
            </div>
          </div>
        )}
        {/* Images */}
        <div
          className={`flex-wrap flex gap-2 mt-10 ${smallScreen ? " justify-center" : "ml-6 justify-start"}`}
        >
          <div className="">
            <CldImage
              src={
                "https://res.cloudinary.com/dwgsproch/image/upload/v1711719585/22%20NEELTJE%202021%203%20-%20glitteren/2021-01-09_15.28.43_hb1ehz.jpg"
              }
              alt={"glit1"}
              width={300}
              height={400}
            />
          </div>
          <div className="">
            <CldImage
              src={
                "https://res.cloudinary.com/dwgsproch/image/upload/v1710076035/22%20NEELTJE%202021%203%20-%20glitteren/2021-03-03_13.19.05_pozbau.jpg"
              }
              alt={"glit2"}
              width={225}
              height={400}
            />
          </div>
          <div className="">
            <CldImage
              src={
                "https://res.cloudinary.com/dwgsproch/image/upload/v1710076035/22%20NEELTJE%202021%203%20-%20glitteren/2021-03-28_23.31.28_vfh0ex.jpg"
              }
              alt={"glit3"}
              width={200}
              height={300}
            />
          </div>
          <div className="">
            <CldImage
              src={
                "https://res.cloudinary.com/dwgsproch/image/upload/v1710076038/22%20NEELTJE%202021%203%20-%20glitteren/2021-03-28_23.31.33-2_cvkhyi.jpg"
              }
              alt={"glit4"}
              width={300}
              height={400}
            />
          </div>
        </div>
      </div>
      {/* Grote afbeelding rechts  */}
      {!smallScreen && (
        <div className={`fixed right-0 justify-end flex col-6`}>
          <img
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1710076035/22%20NEELTJE%202021%203%20-%20glitteren/2021-03-28_23.31.28_vfh0ex.jpg"
            }
            alt={"glit"}
            className={"h-auto max-h-screen w-auto justify-end"}
          />
        </div>
      )}
    </div>
  );
};

export default Page;
