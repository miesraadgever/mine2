"use client";

import React, { useState } from "react";
import { useI18n } from "../../../../../../translations/client";
import Image from "next/image";
import { useWindowSize } from "@/lib/hooks/useWindowsize";
import { CldImage } from "next-cloudinary";
import ImagePopUp from "@/components/ImagePopUp";
import Link from "next/link";

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
          <h3 className="font-medium text-xl">ADORN</h3>
          <p className="mt-3">
            {t("body.adorn")} <br />
            <i>{t("general.aanvraag")}</i>
            <br />
            {t("general.credits")} <i>{t("general.neeltje")}</i>
            <br />
            <br />
            06.2019
            <br />
            <br />
            <Link href={"/body"} className={"underline"}> {t("general.terug")}</Link>

          </p>
        </div>
        {/* Grote afbeelding rechts  */}
        {smallScreen && (
          <div className={"col-12 justify-center flex"}>
            <div className="flex ">
              <video
                className={""}
                width="600"
                height="700"
                loop
                muted
                autoPlay
              >
                <source
                  src={
                    "https://res.cloudinary.com/dwgsproch/video/upload/v1712752778/neeltje%20-%20sgw:%20adorn/IMG_9723_-_1_xsa36n.mp4"
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
          <CldImage
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1712752486/neeltje%20-%20sgw:%20adorn/2020-04-19_16.17.47-1_ga54r4_dhzswk.jpg"
            }
            alt={"adorn1"}
            width={300}
            height={400}
            className="w-72 h-86 object-cover"
            onClick={() =>
              showModal(
                "https://res.cloudinary.com/dwgsproch/image/upload/v1712752486/neeltje%20-%20sgw:%20adorn/2020-04-19_16.17.47-1_ga54r4_dhzswk.jpg",
              )
            }
          />
          <CldImage
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1712752383/neeltje%20-%20sgw:%20adorn/WhatsApp_Image_2022-02-01_at_17.31.57_d3qmuy.jpg"
            }
            alt={"adorn1"}
            width={300}
            height={400}
            className="w-72 h-86 object-cover"
            onClick={() =>
              showModal(
                "https://res.cloudinary.com/dwgsproch/image/upload/v1712752383/neeltje%20-%20sgw:%20adorn/WhatsApp_Image_2022-02-01_at_17.31.57_d3qmuy.jpg",
              )
            }
          />
        </div>
      </div>
      {/* Grote afbeelding rechts  */}
      {!smallScreen && (
        <div className={`fixed right-0 justify-end flex col-6`}>
          <video className={""} width="600" height="700" loop muted autoPlay>
            <source
              src={
                "https://res.cloudinary.com/dwgsproch/video/upload/v1712752778/neeltje%20-%20sgw:%20adorn/IMG_9723_-_1_xsa36n.mp4"
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
