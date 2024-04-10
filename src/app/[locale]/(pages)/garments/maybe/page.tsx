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
          <h3 className="font-medium text-xl">TORN.. MAYBE</h3>
          <p className="mt-3">
            {t("garments.maybe")} <i>{t("garments.chloe")}</i>
            <br />
            {t("general.credits")} <i>{t("general.neeltje")}</i>
            <br />
            <br />
            5.2021
          </p>
        </div>
        {/* Grote afbeelding rechts  */}
        {smallScreen && (
          <div className={"col-12 justify-center flex"}>
            <div className="flex ">
              <Image
                src={
                  "https://res.cloudinary.com/dwgsproch/image/upload/v1710076052/24%20NEELTJE%202021%205%20-%20torn%20maybe..%20butterfly%20hoodie%20ft%20chloe/IMG_9809_rl2wwa.jpg"
                }
                alt={"maybe"}
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
              "https://res.cloudinary.com/dwgsproch/image/upload/v1712569268/24%20NEELTJE%202021%205%20-%20torn%20maybe..%20butterfly%20hoodie%20ft%20chloe/IMG_98141_yp39ij.jpg"
            }
            alt={"maybe2"}
            width={300}
            height={400}
          />
          <CldImage
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1712569252/24%20NEELTJE%202021%205%20-%20torn%20maybe..%20butterfly%20hoodie%20ft%20chloe/IMG_98151_n31wgv.jpg"
            }
            alt={"maybe1"}
            width={300}
            height={400}
          />
        </div>
      </div>
      {/* Grote afbeelding rechts  */}
      {!smallScreen && (
        <div className={`fixed right-0 justify-end flex col-6`}>
          <img
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1710076052/24%20NEELTJE%202021%205%20-%20torn%20maybe..%20butterfly%20hoodie%20ft%20chloe/IMG_9809_rl2wwa.jpg"
            }
            alt={"maybe"}
            className={"h-auto max-h-screen w-auto justify-end"}
          />
        </div>
      )}
    </div>
  );
};

export default Page;
