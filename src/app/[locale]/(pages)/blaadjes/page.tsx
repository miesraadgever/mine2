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
          <h3 className="font-medium text-xl">BLAADJESROMANCE</h3>
          <p className="mt-3">
            {t("blaadjes.caption")}
            <br /> <br />
            {t("general.credits")} <i>{t("general.neeltje")}</i>
            <br /> <br />
            11.2018
          </p>
        </div>
        {/* Grote afbeelding rechts  */}
        {smallScreen && (
          <div className={"col-12 justify-center flex"}>
            <div className="flex ">
              <Image
                src={
                  "https://res.cloudinary.com/dwgsproch/image/upload/v1709928106/3%20NEELTJE%202018%209%20-%20blaadjes%20romance/IMG_20220217_0009_vgtepg.jpg"
                }
                alt={"blaadjes"}
                width={600}
                height={700}
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
              "https://res.cloudinary.com/dwgsproch/image/upload/v1709928168/3%20NEELTJE%202018%209%20-%20blaadjes%20romance/5_jgsyng.png"
            }
            alt={"blaadjes1"}
            width={300}
            height={200}
            onClick={() =>
              showModal(
                "https://res.cloudinary.com/dwgsproch/image/upload/v1709928168/3%20NEELTJE%202018%209%20-%20blaadjes%20romance/5_jgsyng.png",
              )
            }
          />
          <CldImage
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1709928130/3%20NEELTJE%202018%209%20-%20blaadjes%20romance/6_vpr2ow.png"
            }
            alt={"blaadjes2"}
            width={300}
            height={175}
            onClick={() =>
              showModal(
                "https://res.cloudinary.com/dwgsproch/image/upload/v1709928130/3%20NEELTJE%202018%209%20-%20blaadjes%20romance/6_vpr2ow.png",
              )
            }
          />
          <CldImage
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1709928125/3%20NEELTJE%202018%209%20-%20blaadjes%20romance/7_dkxxmm.png"
            }
            alt={"blaadjes3"}
            width={300}
            height={175}
            onClick={() =>
              showModal(
                "https://res.cloudinary.com/dwgsproch/image/upload/v1709928125/3%20NEELTJE%202018%209%20-%20blaadjes%20romance/7_dkxxmm.png",
              )
            }
          />
        </div>
      </div>
      {/* Grote afbeelding rechts  */}

      {!smallScreen && (
        <div className={`fixed right-0 justify-end flex col-6 p-0`}>
          <img
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1709928106/3%20NEELTJE%202018%209%20-%20blaadjes%20romance/IMG_20220217_0009_vgtepg.jpg"
            }
            alt={"blaadjes"}
            className={"h-auto max-h-screen w-auto justify-end"}
          />
        </div>
      )}
      <ImagePopUp
        hideDialog={() => setShow(false)}
        imageUrl={imageUrl}
        show={show}
        width={1400}
        height={1900}
      />
    </div>
  );
};

export default Page;
