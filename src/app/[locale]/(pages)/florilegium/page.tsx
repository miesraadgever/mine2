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
          <h3 className="font-medium text-xl">FLORILEGIUM BLONDE</h3>
          <p className="mt-3">
            <i>"{t("florilegium.caption")}"</i> <br />
            {t("florilegium.subcaption")} <br />
            <br />
            {t("general.credits")} <i>{t("general.neeltje")}</i>
            <br />
            <br />
            1.2020
          </p>
        </div>
        {/* Grote afbeelding rechts  */}
        {smallScreen && (
          <div className={"col-12 justify-center flex"}>
            <div className="flex ">
              <Image
                src={
                  "https://res.cloudinary.com/dwgsproch/image/upload/v1709926485/4%20NEELTJE%202020%201%20-%20florilegium%20blonde/Naamloos_8_hiey10.jpg"
                }
                alt={"flor"}
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
                "https://res.cloudinary.com/dwgsproch/image/upload/v1709926730/4%20NEELTJE%202020%201%20-%20florilegium%20blonde/Naamloos_2_oodb4v.jpg"
              }
              alt={"flor1"}
              width={300}
              height={450}
              onClick={() =>
                showModal(
                  "https://res.cloudinary.com/dwgsproch/image/upload/v1709926730/4%20NEELTJE%202020%201%20-%20florilegium%20blonde/Naamloos_2_oodb4v.jpg",
                )
              }
            />
          </div>
          <div className="">
            <CldImage
              src={
                "https://res.cloudinary.com/dwgsproch/image/upload/v1709926736/4%20NEELTJE%202020%201%20-%20florilegium%20blonde/Naamloos_7_hefoxw.jpg"
              }
              alt={"flor2"}
              width={300}
              height={450}
              onClick={() =>
                showModal(
                  "https://res.cloudinary.com/dwgsproch/image/upload/v1709926736/4%20NEELTJE%202020%201%20-%20florilegium%20blonde/Naamloos_7_hefoxw.jpg",
                )
              }
            />
          </div>
          <div className="">
            <CldImage
              src={
                "https://res.cloudinary.com/dwgsproch/image/upload/v1709926485/4%20NEELTJE%202020%201%20-%20florilegium%20blonde/Naamloos_8_hiey10.jpg"
              }
              alt={"flor3"}
              width={300}
              height={450}
              onClick={() =>
                showModal(
                  "https://res.cloudinary.com/dwgsproch/image/upload/v1709926485/4%20NEELTJE%202020%201%20-%20florilegium%20blonde/Naamloos_8_hiey10.jpg",
                )
              }
            />
          </div>
          <div className="">
            <CldImage
              src={
                "https://res.cloudinary.com/dwgsproch/image/upload/v1709926726/4%20NEELTJE%202020%201%20-%20florilegium%20blonde/Naamloos_9_yqhbrm.jpg"
              }
              alt={"flor4"}
              width={300}
              height={450}
              onClick={() =>
                showModal(
                  "https://res.cloudinary.com/dwgsproch/image/upload/v1709926726/4%20NEELTJE%202020%201%20-%20florilegium%20blonde/Naamloos_9_yqhbrm.jpg",
                )
              }
            />
          </div>
          <div className="">
            <CldImage
              src={
                "https://res.cloudinary.com/dwgsproch/image/upload/v1709926485/4%20NEELTJE%202020%201%20-%20florilegium%20blonde/Naamloos_12_npafka.jpg"
              }
              alt={"flor5"}
              width={300}
              height={450}
              onClick={() =>
                showModal(
                  "https://res.cloudinary.com/dwgsproch/image/upload/v1709926485/4%20NEELTJE%202020%201%20-%20florilegium%20blonde/Naamloos_12_npafka.jpg",
                )
              }
            />
          </div>
          <div className="">
            <CldImage
              src={
                "https://res.cloudinary.com/dwgsproch/image/upload/v1710689882/4%20NEELTJE%202020%201%20-%20florilegium%20blonde/Naamloos_3_j0mtpc.jpg"
              }
              alt={"flor6"}
              width={300}
              height={450}
              onClick={() =>
                showModal(
                  "https://res.cloudinary.com/dwgsproch/image/upload/v1710689882/4%20NEELTJE%202020%201%20-%20florilegium%20blonde/Naamloos_3_j0mtpc.jpg",
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
              "https://res.cloudinary.com/dwgsproch/image/upload/v1709926485/4%20NEELTJE%202020%201%20-%20florilegium%20blonde/Naamloos_8_hiey10.jpg"
            }
            alt={"flor"}
            className={"h-auto max-h-screen w-auto justify-end"}
          />
        </div>
      )}
      <ImagePopUp
        hideDialog={() => setShow(false)}
        imageUrl={imageUrl}
        show={show}
        width={1300}
        height={1800}
      />
    </div>
  );
};

export default Page;
