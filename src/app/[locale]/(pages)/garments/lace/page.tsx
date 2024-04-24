"use client";

import React, { useState } from "react";
import { useI18n } from "../../../../../../translations/client";
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
          <h3 className="font-medium text-xl">OCEANLACE</h3>
          <p className="mt-3">
            {t("garments.lace")} <br />
            {t("general.credits")} <i>{t("general.neeltje")}</i>
            <br />
            <br />
            9.2023
          </p>
        </div>
        {/* Grote afbeelding rechts  */}
        {smallScreen && (
          <div className={"col-12 justify-center flex"}>
            <div className="flex ">
              <Image
                src={
                  "https://res.cloudinary.com/dwgsproch/image/upload/v1712573633/neeltje%20-%20garments:%20lace%20skirt/2023-09-15_16.31.03_jkq1ba.jpg"
                }
                alt={"lace"}
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
              "https://res.cloudinary.com/dwgsproch/image/upload/v1712573590/neeltje%20-%20garments:%20lace%20skirt/2023-09-06_10.41.47_wmqbxm.jpg"
            }
            alt={"lace3"}
            width={300}
            height={400}
            className="w-72 h-86 object-cover"
            onClick={() =>
              showModal(
                "https://res.cloudinary.com/dwgsproch/image/upload/v1712573590/neeltje%20-%20garments:%20lace%20skirt/2023-09-06_10.41.47_wmqbxm.jpg",
              )
            }
          />
          <CldImage
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1712520919/neeltje%20-%20garments:%20lace%20skirt/Foto_29-10-2023_12_10_17_ajfqgg.jpg"
            }
            alt={"lace1"}
            width={300}
            height={400}
            className="w-72 h-86 object-cover"
            onClick={() =>
              showModal(
                "https://res.cloudinary.com/dwgsproch/image/upload/v1712520919/neeltje%20-%20garments:%20lace%20skirt/Foto_29-10-2023_12_10_17_ajfqgg.jpg",
              )
            }
          />
          <CldImage
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1712520925/neeltje%20-%20garments:%20lace%20skirt/Foto_29-10-2023_12_10_09_ysbupf.jpg"
            }
            alt={"lace2"}
            width={300}
            height={400}
            className="w-72 h-86 object-cover"
            onClick={() =>
              showModal(
                "https://res.cloudinary.com/dwgsproch/image/upload/v1712520925/neeltje%20-%20garments:%20lace%20skirt/Foto_29-10-2023_12_10_09_ysbupf.jpg",
              )
            }
          />
          <CldImage
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1712520912/neeltje%20-%20garments:%20lace%20skirt/Foto_15-09-2023_17_33_33_rjaiwq.jpg"
            }
            alt={"lace4"}
            width={300}
            height={400}
            className="w-72 h-86 object-cover"
            onClick={() =>
              showModal(
                "https://res.cloudinary.com/dwgsproch/image/upload/v1712520912/neeltje%20-%20garments:%20lace%20skirt/Foto_15-09-2023_17_33_33_rjaiwq.jpg",
              )
            }
          />
          <CldImage
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1712574146/neeltje%20-%20garments:%20lace%20skirt/2023-09-15_15.18.531_yh0irc.jpg"
            }
            alt={"lace5"}
            width={300}
            height={400}
            className="w-72 h-86 object-cover"
            onClick={() =>
              showModal(
                "https://res.cloudinary.com/dwgsproch/image/upload/v1712574146/neeltje%20-%20garments:%20lace%20skirt/2023-09-15_15.18.531_yh0irc.jpg",
              )
            }
          />
        </div>
      </div>
      {/* Grote afbeelding rechts  */}
      {!smallScreen && (
        <div className={`fixed right-0 justify-end flex col-4`}>
          <img
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1712573633/neeltje%20-%20garments:%20lace%20skirt/2023-09-15_16.31.03_jkq1ba.jpg"
            }
            alt={"lace"}
            className={"h-auto max-h-screen w-auto justify-end"}
          />
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
