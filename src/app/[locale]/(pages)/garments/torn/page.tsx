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
          <h3 className="font-medium text-xl">TORN TORN TORN, AS IS LIFE</h3>
          <p className="mt-3">
            {t("garments.torn")} <br />
            {t("general.credits")} <i>{t("general.neeltje")}</i>
            <br />
            <br />
            5.2021
          </p>
        </div>
        {/* Grote afbeelding rechts  */}
        {smallScreen && (
          <div className={"col-12 justify-center flex"}>
            <div className="flex ">
              <Image
                src={
                  "https://res.cloudinary.com/dwgsproch/image/upload/v1710076115/25%20NEELTJE%202021%205%20-%20torn%20torn%20torn%2C%20as%20is%20life/IMG_9737_qisnou.jpg"
                }
                alt={"torn"}
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
              "https://res.cloudinary.com/dwgsproch/image/upload/v1710076115/25%20NEELTJE%202021%205%20-%20torn%20torn%20torn%2C%20as%20is%20life/IMG_9737_qisnou.jpg"
            }
            alt={"torn3"}
            width={300}
            height={400}
            className="w-72 h-86 object-cover"
            onClick={() =>
              showModal(
                "https://res.cloudinary.com/dwgsproch/image/upload/v1710076115/25%20NEELTJE%202021%205%20-%20torn%20torn%20torn%2C%20as%20is%20life/IMG_9737_qisnou.jpg",
              )
            }
          />
          <CldImage
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1710076118/25%20NEELTJE%202021%205%20-%20torn%20torn%20torn%2C%20as%20is%20life/IMG_9741_mdfpah.jpg"
            }
            alt={"torn2"}
            width={300}
            height={400}
            className="w-72 h-86 object-cover"
            onClick={() =>
              showModal(
                "https://res.cloudinary.com/dwgsproch/image/upload/v1710076118/25%20NEELTJE%202021%205%20-%20torn%20torn%20torn%2C%20as%20is%20life/IMG_9741_mdfpah.jpg",
              )
            }
          />
          <CldImage
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1710076114/25%20NEELTJE%202021%205%20-%20torn%20torn%20torn%2C%20as%20is%20life/IMG_9752_w4m8wo.jpg"
            }
            alt={"torn1"}
            width={300}
            height={400}
            className="w-72 h-86 object-cover"
            onClick={() =>
              showModal(
                "https://res.cloudinary.com/dwgsproch/image/upload/v1710076114/25%20NEELTJE%202021%205%20-%20torn%20torn%20torn%2C%20as%20is%20life/IMG_9752_w4m8wo.jpg",
              )
            }
          />
          <CldImage
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1712570683/25%20NEELTJE%202021%205%20-%20torn%20torn%20torn%2C%20as%20is%20life/Foto_08-04-2024_09_30_58_gcjjv3.jpg"
            }
            alt={"torn5"}
            width={300}
            height={400}
            className="w-72 h-86 object-cover"
            onClick={() =>
              showModal(
                "https://res.cloudinary.com/dwgsproch/image/upload/v1712570683/25%20NEELTJE%202021%205%20-%20torn%20torn%20torn%2C%20as%20is%20life/Foto_08-04-2024_09_30_58_gcjjv3.jpg",
              )
            }
          />
          <CldImage
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1712524304/25%20NEELTJE%202021%205%20-%20torn%20torn%20torn%2C%20as%20is%20life/2023-03-03_14.37.28_w767zv.jpg"
            }
            alt={"torn4"}
            width={300}
            height={400}
            className="w-72 h-86 object-cover"
            onClick={() =>
              showModal(
                "https://res.cloudinary.com/dwgsproch/image/upload/v1712524304/25%20NEELTJE%202021%205%20-%20torn%20torn%20torn%2C%20as%20is%20life/2023-03-03_14.37.28_w767zv.jpg",
              )
            }
          />
        </div>
      </div>
      {/* Grote afbeelding rechts  */}
      {!smallScreen && (
        <div className={`fixed right-0 justify-end flex col-6`}>
          <img
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1710076115/25%20NEELTJE%202021%205%20-%20torn%20torn%20torn%2C%20as%20is%20life/IMG_9737_qisnou.jpg"
            }
            alt={"torn"}
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
