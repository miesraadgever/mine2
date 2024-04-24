"use client";

import React, { useState } from "react";
import { useI18n } from "../../../../../translations/client";
import Image from "next/image";
import { useWindowSize } from "@/lib/hooks/useWindowsize";
import { CldImage } from "next-cloudinary";
import ImagePopUp from "@/components/ImagePopUp";

const Page = () => {
  const t = useI18n();
  const windowSize = useWindowSize();
  const smallScreen = windowSize.width! < 800;
  const [imageUrl, setImageUrl] = useState("");
  const [show, setShow] = useState(false);

  const showModal = (url: string) => {
    setImageUrl(url);
    setShow(true);
  };

  return (
    <div className={`flex ${smallScreen ? "flex-col" : "flex-row"} col-12 `}>
      <div className={`flex flex-col ${smallScreen ? "col-12" : "col-6"}`}>
        {/* Text */}
        <div className={`${smallScreen ? "ml-2 mb-4" : "p-6 mb-4"} `}>
          <h3 className="font-medium text-xl">STAGE DESIGN</h3>
          <p className="mt-3">
            {t("stageigor.caption")}
            <br></br>
            {t("stageigor.caption2")}
            <br />
            <br />
            {t("stageigor.extracredits")}{" "}
            <i> sire mane, bird guy & clay krebbers</i>
            <br></br>
            {t("general.credits")} <i>{t("general.mies")} & igor herder</i>
            <br></br>
            4.2023
          </p>
        </div>
        {/* Grote afbeelding rechts  */}
        {smallScreen && (
          <div className={"col-12 justify-center flex"}>
            <div className="flex ">
              <video loop muted autoPlay>
                <source
                  src={
                    "https://res.cloudinary.com/dwgsproch/video/upload/v1712235572/MIES%20-%20stagedesign/IMG_3513_d4v1ls.mp4"
                  }
                ></source>
              </video>
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
                "https://res.cloudinary.com/dwgsproch/image/upload/v1712235079/MIES%20-%20stagedesign/IMG_4380_wnga8r.jpg"
              }
              alt={"foto1"}
              width={250}
              height={300}
              className={"object-cover w-80 h-96"}
              onClick={() =>
                showModal(
                  "https://res.cloudinary.com/dwgsproch/image/upload/v1712235079/MIES%20-%20stagedesign/IMG_4380_wnga8r.jpg",
                )
              }
            />
          </div>
          <div className="">
            <CldImage
              src={
                "https://res.cloudinary.com/dwgsproch/image/upload/v1712235032/MIES%20-%20stagedesign/4_qmwr1n.jpg"
              }
              alt={"foto2"}
              width={300}
              height={400}
              className={"object-cover w-80 h-96"}
              onClick={() =>
                showModal(
                  "https://res.cloudinary.com/dwgsproch/image/upload/v1712235032/MIES%20-%20stagedesign/4_qmwr1n.jpg",
                )
              }
            />
          </div>
          <div className="">
            <CldImage
              src={
                "https://res.cloudinary.com/dwgsproch/image/upload/v1712235059/MIES%20-%20stagedesign/3_vjj6rh.jpg"
              }
              alt={"foto3"}
              width={600}
              height={600}
              className={"object-cover w-80 h-96"}
              onClick={() =>
                showModal(
                  "https://res.cloudinary.com/dwgsproch/image/upload/v1712235059/MIES%20-%20stagedesign/3_vjj6rh.jpg",
                )
              }
            />
          </div>
          <div>
            <video className={"object-cover w-80 h-96"} loop muted autoPlay>
              <source
                src={
                  "https://res.cloudinary.com/dwgsproch/video/upload/v1712235470/MIES%20-%20stagedesign/IMG_4369_vawhtg.mp4"
                }
              ></source>
            </video>
          </div>
        </div>
      </div>
      {/* Grote afbeelding rechts  */}
      {!smallScreen && (
        <div className={`fixed right-0 justify-end flex col-6`}>
          <video loop muted autoPlay>
            <source
              src={
                "https://res.cloudinary.com/dwgsproch/video/upload/v1712235572/MIES%20-%20stagedesign/IMG_3513_d4v1ls.mp4"
              }
            ></source>
          </video>
        </div>
      )}
      <ImagePopUp
        hideDialog={() => setShow(false)}
        imageUrl={imageUrl}
        show={show}
      />
    </div>
  );
};

export default Page;
