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
          <h3 className="font-medium text-xl">AGAIN AND AGAIN AND AGAIN</h3>
          <p className="mt-3">
            {t("again.caption")} <br />
            {t("again.model")} <i>{t("again.helen")}</i>
            <br />
            {t("general.credits")} <i>{t("general.neeltje")}</i>
            <br />
            <br />
            4.2021
          </p>
        </div>
        {/* Grote afbeelding rechts  */}
        {smallScreen && (
          <div className={"col-12 justify-center flex"}>
            <video className={""} width="700" height="200" loop muted autoPlay>
              <source
                src={
                  "https://res.cloudinary.com/dwgsproch/video/upload/v1712755318/23%20NEELTJE%202021%204%20-%20again%20and%20again%20and%20again/IMG_9104_bryekt.mp4"
                }
              ></source>
            </video>
          </div>
        )}
        {/* Images */}
        <div
          className={`flex-wrap flex gap-2 mt-10 ${smallScreen ? " justify-center" : "ml-6 justify-start"}`}
        >
          <div className="">
            <CldImage
              src={
                "https://res.cloudinary.com/dwgsproch/image/upload/v1710076116/23%20NEELTJE%202021%204%20-%20again%20and%20again%20and%20again/2021-04-15_19.44.21_bapt0x.jpg"
              }
              alt={"again1"}
              width={300}
              height={450}
            />
          </div>
          <div className="">
            <CldImage
              src={
                "https://res.cloudinary.com/dwgsproch/image/upload/v1710076118/23%20NEELTJE%202021%204%20-%20again%20and%20again%20and%20again/2021-04-15_19.42.29_wntuc9.jpg"
              }
              alt={"again3"}
              width={300}
              height={450}
            />
          </div>
          <div className="">
            <CldImage
              src={
                "https://res.cloudinary.com/dwgsproch/image/upload/v1710076106/23%20NEELTJE%202021%204%20-%20again%20and%20again%20and%20again/2021-04-15_19.38.35_nixpem.jpg"
              }
              alt={"again4"}
              width={300}
              height={450}
            />
          </div>
          <div className="">
            <CldImage
              src={
                "https://res.cloudinary.com/dwgsproch/image/upload/v1710076103/23%20NEELTJE%202021%204%20-%20again%20and%20again%20and%20again/2021-04-15_19.39.51_eqss6n.jpg"
              }
              alt={"again2"}
              width={300}
              height={225}
            />
          </div>
        </div>
      </div>
      {/* Grote afbeelding rechts  */}
      {!smallScreen && (
        <div className={`fixed right-0 justify-end flex col-6`}>
          <video className={""} width="700" height="200" loop muted autoPlay>
            <source
              src={
                "https://res.cloudinary.com/dwgsproch/video/upload/v1712755318/23%20NEELTJE%202021%204%20-%20again%20and%20again%20and%20again/IMG_9104_bryekt.mp4"
              }
            ></source>
          </video>
        </div>
      )}
    </div>
  );
};

export default Page;
