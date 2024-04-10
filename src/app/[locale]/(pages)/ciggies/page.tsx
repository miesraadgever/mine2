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
          <h3 className="font-medium text-xl">KRAAL SIGARETJES</h3>
          <p className="mt-3">
            {t("ciggies.caption")} <br />
            <i>set {t("general.aanvraag")}</i>
            <br />
            {t("general.credits")} <i>{t("general.neeltje")}</i>
            <br />
            <br />
            {t("ciggies.subcaption")} <br />
            <br />
            01.2024
          </p>
        </div>
        {/* Grote afbeelding rechts  */}
        {smallScreen && (
          <div className={"col-12 justify-center flex"}>
            <div className="flex ">
              <Image
                src={
                  "https://res.cloudinary.com/dwgsproch/image/upload/v1712235373/NEELTJE%20-%20ciggies/2022-11-19_14.09.55_neum4v.jpg"
                }
                alt={"cig"}
                width={600}
                height={700}
              />
            </div>
          </div>
        )}
        {/* Images */}
        <div
          className={`flex-wrap flex gap-3 mt-10 ${smallScreen ? " justify-center" : "ml-6 justify-start"}`}
        >
          <CldImage
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1712326364/NEELTJE%20-%20ciggies/2022-12-28_16.58.03_tvi5e8.jpg"
            }
            alt={"cig1"}
            width={300}
            height={400}
            className="w-72 h-80 object-cover"
          />
          <CldImage
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1712235824/NEELTJE%20-%20ciggies/image00003_amwubr.jpg"
            }
            alt={"cig2"}
            width={300}
            height={400}
            className="w-72 h-80 object-cover"
          />
          <CldImage
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1712235790/NEELTJE%20-%20ciggies/image00122_mfstb9.jpg"
            }
            alt={"cig3"}
            width={300}
            height={400}
            className="w-72 h-80 object-cover"
          />
          <CldImage
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1712235373/NEELTJE%20-%20ciggies/2022-11-19_14.09.55_neum4v.jpg"
            }
            alt={"cig4"}
            width={300}
            height={400}
            className="w-72 h-80 object-cover"
          />
        </div>
      </div>
      {/* Grote afbeelding rechts  */}

      {!smallScreen && (
        <div className={`fixed right-0 justify-end flex col-6 p-0`}>
          <img
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1712235373/NEELTJE%20-%20ciggies/2022-11-19_14.09.55_neum4v.jpg"
            }
            alt={"cig"}
            className={"h-auto max-h-screen w-auto justify-end"}
          />
        </div>
      )}
    </div>
  );
};

export default Page;
