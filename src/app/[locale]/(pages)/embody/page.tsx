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
          <h3 className="font-medium text-xl">
            EMBODY; FEEL - COME BACK - DO NOT PERCEIVE ME
          </h3>
          <p className="mt-3">
            {t("embody.caption")}
            <br />
            {t("general.credits")} <i>{t("embody.credits")}</i>
            <br />
            <br />
            10.2021
          </p>
        </div>
        {/* Grote afbeelding rechts  */}
        {smallScreen && (
          <div className={"col-12 justify-center flex"}>
            <video className={""} width="600" height="700" loop muted autoPlay playsInline>
              <source
                src={
                  "https://res.cloudinary.com/dwgsproch/video/upload/v1712755516/29%20NEELTJE%202021%2010%20-%20embody%3B%20feel%20-%20come%20back%20-%20do%20not%20perceive%20me/fe64bbf2-a82a-4115-91b9-e5ff2f581167_twd4oi.mp4"
                }
              ></source>
            </video>
          </div>
        )}
        {/* Images */}
        <div
          className={`flex-wrap flex gap-3 mt-10 ${smallScreen ? " justify-center" : "ml-6 justify-start"}`}
        >
          <CldImage
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1710076530/29%20NEELTJE%202021%2010%20-%20embody%3B%20feel%20-%20come%20back%20-%20do%20not%20perceive%20me/2A21D200-4DD2-4361-AD9C-4D5CC6C25EFC_cftrkt.jpg"
            }
            alt={"embody1"}
            width={300}
            height={400}
            className="w-72 h-80 object-cover"
            onClick={() =>
              showModal(
                "https://res.cloudinary.com/dwgsproch/image/upload/v1710076530/29%20NEELTJE%202021%2010%20-%20embody%3B%20feel%20-%20come%20back%20-%20do%20not%20perceive%20me/2A21D200-4DD2-4361-AD9C-4D5CC6C25EFC_cftrkt.jpg",
              )
            }
          />
          <CldImage
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1710076529/29%20NEELTJE%202021%2010%20-%20embody%3B%20feel%20-%20come%20back%20-%20do%20not%20perceive%20me/fc969910-2f00-45ec-980c-baafa1554223_c3kmy3.jpg"
            }
            alt={"embody2"}
            width={300}
            height={400}
            className="w-72 h-80 object-cover"
            onClick={() =>
              showModal(
                "https://res.cloudinary.com/dwgsproch/image/upload/v1710076529/29%20NEELTJE%202021%2010%20-%20embody%3B%20feel%20-%20come%20back%20-%20do%20not%20perceive%20me/fc969910-2f00-45ec-980c-baafa1554223_c3kmy3.jpg",
              )
            }
          />
          <CldImage
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1712756444/29%20NEELTJE%202021%2010%20-%20embody%3B%20feel%20-%20come%20back%20-%20do%20not%20perceive%20me/WhatsApp_Image_2024-04-10_at_15.35.19_s9svci.jpg"
            }
            alt={"embody3"}
            width={300}
            height={400}
            className="w-72 h-80 object-cover"
            onClick={() =>
              showModal(
                "https://res.cloudinary.com/dwgsproch/image/upload/v1712756444/29%20NEELTJE%202021%2010%20-%20embody%3B%20feel%20-%20come%20back%20-%20do%20not%20perceive%20me/WhatsApp_Image_2024-04-10_at_15.35.19_s9svci.jpg",
              )
            }
          />
          <CldImage
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1712755683/29%20NEELTJE%202021%2010%20-%20embody%3B%20feel%20-%20come%20back%20-%20do%20not%20perceive%20me/90efd79e-e01d-4dc3-b889-05f868dbad22_vkmjs0.jpg"
            }
            alt={"embody4"}
            width={300}
            height={400}
            className="w-72 h-80 object-cover"
            onClick={() =>
              showModal(
                "https://res.cloudinary.com/dwgsproch/image/upload/v1712755683/29%20NEELTJE%202021%2010%20-%20embody%3B%20feel%20-%20come%20back%20-%20do%20not%20perceive%20me/90efd79e-e01d-4dc3-b889-05f868dbad22_vkmjs0.jpg",
              )
            }
          />
        </div>
      </div>
      {/* Grote afbeelding rechts  */}

      {!smallScreen && (
        <div className={`fixed right-0 justify-end flex col-6 p-0`}>
          <video className={""} width="600" height="700" loop muted autoPlay>
            <source
              src={
                "https://res.cloudinary.com/dwgsproch/video/upload/v1712755516/29%20NEELTJE%202021%2010%20-%20embody%3B%20feel%20-%20come%20back%20-%20do%20not%20perceive%20me/fe64bbf2-a82a-4115-91b9-e5ff2f581167_twd4oi.mp4"
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
