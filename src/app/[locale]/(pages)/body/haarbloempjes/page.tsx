"use client";

import React from "react";
import { useI18n } from "../../../../../../translations/client";
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
          <h3 className="font-medium text-xl">HAARBLOEMPJES</h3>
          <p className="mt-3">
            {t("body.bloem")} <br />
            <i>{t("general.aanvraag")}</i>
            <br />
            {t("general.credits")} <i>{t("general.neeltje")}</i>
            <br />
            <br />
            12.2022
          </p>
        </div>
        {/* Grote afbeelding rechts  */}
        {smallScreen && (
          <div className={"col-12 justify-center flex"}>
            <div className="flex ">
              <Image
                src={
                  "https://res.cloudinary.com/dwgsproch/image/upload/v1712754758/neeltje%20-%20sgw:%20haarbloempjes/2022-12-13_16.01.511_a9o5my.jpg"
                }
                alt={"bloem"}
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
          <CldImage
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1712519825/neeltje%20-%20sgw:%20haarbloempjes/img20240407_14195187_evdryb.jpg"
            }
            alt={"bloem1"}
            width={300}
            height={400}
            className="w-72 h-86 object-cover"
          />
          <CldImage
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1712521688/neeltje%20-%20sgw:%20haarbloempjes/2023-06-25_17.41.02_nvxe1f.jpg"
            }
            alt={"bloem2"}
            width={300}
            height={400}
            className="w-72 h-86 object-cover"
          />
          <CldImage
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1712521741/neeltje%20-%20sgw:%20haarbloempjes/2023-06-25_20.59.08_cvxni4.jpg"
            }
            alt={"bloem3"}
            width={300}
            height={400}
            className="w-72 h-86 object-cover"
          />
          <CldImage
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1712522059/neeltje%20-%20sgw:%20haarbloempjes/Foto_07-04-2024_22_31_22_e9igw6.png"
            }
            alt={"bloem4"}
            width={300}
            height={400}
            className="w-72 h-86 object-cover"
          />
          <CldImage
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1712521698/neeltje%20-%20sgw:%20haarbloempjes/2023-06-25_21.04.00_v6rpct.jpg"
            }
            alt={"bloem5"}
            width={300}
            height={400}
            className="w-72 h-86 object-cover"
          />
        </div>
      </div>
      {/* Grote afbeelding rechts  */}
      {!smallScreen && (
        <div className={`fixed right-0 justify-end flex col-4`}>
          <img
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1712754758/neeltje%20-%20sgw:%20haarbloempjes/2022-12-13_16.01.511_a9o5my.jpg"
            }
            alt={"bloem"}
            className={"h-auto max-h-screen w-auto justify-end"}
          />
        </div>
      )}
    </div>
  );
};

export default Page;
