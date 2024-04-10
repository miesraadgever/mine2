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
          <h3 className="font-medium text-xl">SPIEGEL OBSESSIE</h3>
          <p className="mt-3">
            {t("spiegels.caption")} <br />
            {t("general.credits")} <i>{t("general.neeltje")}</i>
            <br />
            <br />
            01.2024
          </p>
        </div>
        {/* Grote afbeelding rechts  */}
        {smallScreen && (
          <div className={"col-12 justify-center flex "}>
            <div className="flex ">
              <Image
                src={
                  "https://res.cloudinary.com/dwgsproch/image/upload/v1712518767/NEELTJE%20-%20spiegeltjes/image00099_q7okeo.jpg"
                }
                alt={"spiegel"}
                width={645}
                height={750}
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
              "https://res.cloudinary.com/dwgsproch/image/upload/v1712326699/NEELTJE%20-%20spiegeltjes/img20240330_17373983_zvn8ik.jpg"
            }
            alt={"spiegel1"}
            width={300}
            height={400}
            className="w-72 h-84 object-cover"
          />
          <CldImage
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1712524218/NEELTJE%20-%20spiegeltjes/img20240330_17365177_atwpbi.jpg"
            }
            alt={"spiegel2"}
            width={300}
            height={400}
            className="w-72 h-84 object-cover"
          />
        </div>
      </div>
      {/* Grote afbeelding rechts  */}

      {!smallScreen && (
        <div className={`fixed right-0 justify-end flex col-4 p-0`}>
          <Image
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1712518767/NEELTJE%20-%20spiegeltjes/image00099_q7okeo.jpg"
            }
            alt={"spiegel"}
            width={645}
            height={750}
          />
        </div>
      )}
    </div>
  );
};

export default Page;
