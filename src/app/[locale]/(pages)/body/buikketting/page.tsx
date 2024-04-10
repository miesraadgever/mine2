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
          <h3 className="font-medium text-xl">BUIKKETTING</h3>
          <p className="mt-3">
            {t("body.buik")} <br />
            <i>{t("general.aanvraag")}</i>
            <br />
            {t("general.credits")} <i>{t("general.neeltje")}</i>
            <br />
            <br />
            05.2018
          </p>
        </div>
        {/* Grote afbeelding rechts  */}
        {smallScreen && (
          <div className={"col-12 justify-center flex"}>
            <div className="flex ">
              <Image
                src={
                  "https://res.cloudinary.com/dwgsproch/image/upload/v1712521726/neeltje%20-%20sgw:%20buikketting/2023-02-08_10.36.58_ipjwuf.jpg"
                }
                alt={"buik"}
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
              "https://res.cloudinary.com/dwgsproch/image/upload/v1712523923/neeltje%20-%20sgw:%20buikketting/Naamloos_33_nup4ng.jpg"
            }
            alt={"buik1"}
            width={300}
            height={400}
            className="w-72 h-86 object-cover"
          />
          <CldImage
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1712751922/neeltje%20-%20sgw:%20buikketting/2018-12-24_14.26.491_bfpge5.jpg"
            }
            alt={"buik2"}
            width={300}
            height={400}
            className="w-72 h-86 object-cover"
          />
          <CldImage
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1712751968/neeltje%20-%20sgw:%20buikketting/img20240408_10151788_hco54s.jpg"
            }
            alt={"buik3"}
            width={300}
            height={400}
            className="w-72 h-86 object-cover"
          />
          <CldImage
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1712751926/neeltje%20-%20sgw:%20buikketting/IMG_2022_04_18-09_46_15_4790_0DD69F001_bvzmaj.jpg"
            }
            alt={"buik4"}
            width={300}
            height={400}
            className="w-72 h-86 object-cover"
          />
          <video
            className={"w-72 h-84 object-cover"}
            width="320"
            height="410"
            loop
            muted
            autoPlay
          >
            <source
              src={
                "https://res.cloudinary.com/dwgsproch/video/upload/v1712751734/neeltje%20-%20sgw:%20buikketting/2022-04-30_00.17.49_smv9q4.mp4"
              }
            ></source>
          </video>
        </div>
      </div>
      {/* Grote afbeelding rechts  */}
      {!smallScreen && (
        <div className={`fixed right-0 justify-end flex col-4`}>
          <img
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1712521726/neeltje%20-%20sgw:%20buikketting/2023-02-08_10.36.58_ipjwuf.jpg"
            }
            alt={"buik"}
            className={"h-auto max-h-screen w-auto justify-end"}
          />
        </div>
      )}
    </div>
  );
};

export default Page;
