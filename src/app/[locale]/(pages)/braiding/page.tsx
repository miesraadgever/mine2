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
          <h3 className="font-medium text-xl">BRAIDING IN SILENCE</h3>
          <p className="mt-3">
            {t("braiding.caption")}
            <br />
            <i>{t("braiding.subcaption")}</i>
            <br />
            <br />
            {t("braiding.credits")} <i>{t("general.neeltje")}</i>
            <br />
            <br />
            6.2022
          </p>
        </div>
        {/* Grote afbeelding rechts  */}
        {smallScreen && (
          <div className={"col-12 justify-center flex"}>
            <div className="flex ">
              <iframe
                width="960"
                height="615"
                src="https://www.youtube.com/embed/qhyGragg0AI?si=6XMnu9EWSJ0ArKIj&autoplay=1"
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
          <div>
            <CldImage
              src={
                "https://res.cloudinary.com/dwgsproch/image/upload/v1710076557/31%20NEELTJE%202021%2012%20-%20braiding%20in%20silence/IMG_6920_odtwti.png"
              }
              alt={"braid"}
              width={225}
              height={300}
              onClick={() =>
                showModal(
                  "https://res.cloudinary.com/dwgsproch/image/upload/v1710076557/31%20NEELTJE%202021%2012%20-%20braiding%20in%20silence/IMG_6920_odtwti.png",
                )
              }
            />
          </div>
          <div>
            <CldImage
              src={
                "https://res.cloudinary.com/dwgsproch/image/upload/v1710076530/31%20NEELTJE%202021%2012%20-%20braiding%20in%20silence/WhatsApp_Image_2022-10-28_at_3.39.05_PM_1_brn5h7.jpg"
              }
              alt={"braid1"}
              width={300}
              height={150}
              onClick={() =>
                showModal(
                  "https://res.cloudinary.com/dwgsproch/image/upload/v1710076530/31%20NEELTJE%202021%2012%20-%20braiding%20in%20silence/WhatsApp_Image_2022-10-28_at_3.39.05_PM_1_brn5h7.jpg",
                )
              }
            />
          </div>
        </div>
      </div>
      {/* Grote afbeelding rechts  */}
      {!smallScreen && (
        <div className={`fixed right-0 justify-end flex col-6`}>
          <iframe
            src="https://www.youtube.com/embed/qhyGragg0AI?si=6XMnu9EWSJ0ArKIj&autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
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
