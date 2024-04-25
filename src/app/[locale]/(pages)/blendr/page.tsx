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
          <h3 className="font-medium text-xl">BLENDR</h3>
          <p className="mt-3">
            {t("blendr.caption")}
            <br />
            <br />
            {t("general.credits")} <i>{t("general.mies")}</i>
            <br />
            <br />
            2.2021
          </p>
        </div>
        {/* Grote afbeelding rechts  */}
        {smallScreen && (
          <div className={"col-12 justify-center flex"}>
            <div className="flex ">
              <Image
                src={
                  "https://res.cloudinary.com/dwgsproch/image/upload/v1710078793/MIES%20-%20blendr/2fb83534-ff30-4e8a-a83a-21518902623b_eu9clq.jpg"
                }
                alt={"blendr1"}
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
                "https://res.cloudinary.com/dwgsproch/image/upload/v1710078799/MIES%20-%20blendr/6bc34b20-05a5-400d-9121-a7be8da2c779_olmxvn.jpg"
              }
              alt={"blendr2"}
              width={200}
              height={300}
              className={"object-cover w-52 h-72"}
              onClick={() =>
                showModal(
                  "https://res.cloudinary.com/dwgsproch/image/upload/v1710078799/MIES%20-%20blendr/6bc34b20-05a5-400d-9121-a7be8da2c779_olmxvn.jpg",
                )
              }
            />
          </div>
          <div className="">
            <CldImage
              src={
                "https://res.cloudinary.com/dwgsproch/image/upload/v1710078796/MIES%20-%20blendr/8e49f931-0433-4599-82d5-1e3e9ea85e21_szspqn.jpg"
              }
              alt={"blendr3"}
              width={200}
              height={300}
              className={"object-cover w-52 h-72"}
              onClick={() =>
                showModal(
                  "https://res.cloudinary.com/dwgsproch/image/upload/v1710078796/MIES%20-%20blendr/8e49f931-0433-4599-82d5-1e3e9ea85e21_szspqn.jpg",
                )
              }
            />
          </div>
          <div className="">
            <CldImage
              src={
                "https://res.cloudinary.com/dwgsproch/image/upload/v1710077104/MIES%20-%20blendr/7079DCCD-90B4-46DC-AAF0-9A054862EB05_pu78b8.jpg"
              }
              alt={"blendr4"}
              width={200}
              height={300}
              className={"object-cover w-52 h-72"}
              onClick={() =>
                showModal(
                  "https://res.cloudinary.com/dwgsproch/image/upload/v1710077104/MIES%20-%20blendr/7079DCCD-90B4-46DC-AAF0-9A054862EB05_pu78b8.jpg",
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
              "https://res.cloudinary.com/dwgsproch/image/upload/v1710078793/MIES%20-%20blendr/2fb83534-ff30-4e8a-a83a-21518902623b_eu9clq.jpg"
            }
            alt={"blendr1"}
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
