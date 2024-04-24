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
          <h3 className="font-medium text-xl">PRETTIEST GIRL OF THE PARTY</h3>
          <p className="mt-3">
            {t("garments.pretty")} <br />
            {t("general.credits")} <i>{t("general.neeltje")}</i>
            <br />
            <br />
            9.2021
          </p>
        </div>
        {/* Grote afbeelding rechts  */}
        {smallScreen && (
          <div className={"col-12 justify-center flex"}>
            <div className="flex ">
              <Image
                src={
                  "https://res.cloudinary.com/dwgsproch/image/upload/v1710076529/28%20NEELTJE%202021%209%20-%20prettiest%20girl%20of%20the%20party/IMG_0737_ydedw1.jpg"
                }
                alt={"girl"}
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
                "https://res.cloudinary.com/dwgsproch/image/upload/v1710076529/28%20NEELTJE%202021%209%20-%20prettiest%20girl%20of%20the%20party/IMG_0737_ydedw1.jpg"
              }
              alt={"girl3"}
              width={300}
              height={400}
              className="w-72 h-80 object-cover"
              onClick={() =>
                showModal(
                  "https://res.cloudinary.com/dwgsproch/image/upload/v1710076529/28%20NEELTJE%202021%209%20-%20prettiest%20girl%20of%20the%20party/IMG_0737_ydedw1.jpg",
                )
              }
            />
          </div>
          <div className="">
            <CldImage
              src={
                "https://res.cloudinary.com/dwgsproch/image/upload/v1710076529/28%20NEELTJE%202021%209%20-%20prettiest%20girl%20of%20the%20party/IMG_0736_ktssep.jpg"
              }
              alt={"girl2"}
              width={300}
              height={400}
              className="w-72 h-80 object-cover"
              onClick={() =>
                showModal(
                  "https://res.cloudinary.com/dwgsproch/image/upload/v1710076529/28%20NEELTJE%202021%209%20-%20prettiest%20girl%20of%20the%20party/IMG_0736_ktssep.jpg",
                )
              }
            />
          </div>
          <div className="">
            <CldImage
              src={
                "https://res.cloudinary.com/dwgsproch/image/upload/v1710076542/28%20NEELTJE%202021%209%20-%20prettiest%20girl%20of%20the%20party/IMG_0740_cz8alh.jpg"
              }
              alt={"girl1"}
              width={300}
              height={400}
              className="w-72 h-80 object-cover"
              onClick={() =>
                showModal(
                  "https://res.cloudinary.com/dwgsproch/image/upload/v1710076542/28%20NEELTJE%202021%209%20-%20prettiest%20girl%20of%20the%20party/IMG_0740_cz8alh.jpg",
                )
              }
            />
          </div>
        </div>
      </div>
      {/* Grote afbeelding rechts  */}
      {!smallScreen && (
        <div className={`fixed right-0 justify-end flex col-6`}>
          <img
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1710076529/28%20NEELTJE%202021%209%20-%20prettiest%20girl%20of%20the%20party/IMG_0737_ydedw1.jpg"
            }
            alt={"girl"}
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
