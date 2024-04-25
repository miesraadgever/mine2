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
          <h3 className="font-medium text-xl">DINGEN DIE IK GAUW VERGEET</h3>
          <p className="mt-3">
            {t("waas.concept")} <i>{t("waas.credits")}</i>
            <br />
            <br />
            {t("waas.tekst")} <i>{t("waas.igor")}</i>
            <br />
            {t("waas.visuals")} <i>{t("general.mies")}</i>
            <br />
            <br />
            9.2021
          </p>
        </div>
        {/* Grote afbeelding rechts  */}
        {smallScreen && (
            <div className={"col-12 justify-center flex"}>
              <div className="flex ">
                <iframe
                    src="https://www.youtube.com/embed/ULmiVXUV8AM?si=1mNU6Kkue2dJ336F"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
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
                "https://res.cloudinary.com/dwgsproch/image/upload/v1712236227/MIES%20-%20waas/aankondiging_rm1wic.png"
              }
              alt={"book1"}
              width={500}
              height={600}
            />
          </div>
        </div>
      </div>
      {/* Grote afbeelding rechts  */}
      {!smallScreen && (
        <div className={`fixed right-0 justify-end flex col-6`}>
          <iframe
            src="https://www.youtube.com/embed/ULmiVXUV8AM?si=1mNU6Kkue2dJ336F"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Page;
