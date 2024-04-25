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
          <h3 className="font-medium text-xl">SHE 'OTW</h3>
          <p className="mt-3">
            {t("garments.she")}{" "}
            <i>
              <a href="/she">{t("garments.she1")}</a>
            </i>{" "}
            <br />
            {t("general.credits")} <i>{t("general.neeltje")}</i>
            <br />
            <br />
            6.2022
            <br />
            <br />
            <Link href={"/garments"} className={"underline"}> {t("general.terug")}</Link>

          </p>
        </div>
        {/* Grote afbeelding rechts  */}
        {smallScreen && (
          <div className={"col-12 justify-center flex"}>
            <div className="flex ">
              <Image
                src={
                  "https://res.cloudinary.com/dwgsproch/image/upload/v1712572654/34%20NEELTJE%202022%206%20-%20she%20%27otw%20jurk/IMG_1184_zckuck.jpg"
                }
                alt={"sheotw"}
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
              "https://res.cloudinary.com/dwgsproch/image/upload/v1712520380/34%20NEELTJE%202022%206%20-%20she%20%27otw%20jurk/Foto_06-04-2024_15_57_22_glxtfh.jpg"
            }
            alt={"sheotw3"}
            width={300}
            height={400}
            className="w-72 h-86 object-cover"
            onClick={() =>
              showModal(
                "https://res.cloudinary.com/dwgsproch/image/upload/v1712520380/34%20NEELTJE%202022%206%20-%20she%20%27otw%20jurk/Foto_06-04-2024_15_57_22_glxtfh.jpg",
              )
            }
          />
          <CldImage
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1712520375/34%20NEELTJE%202022%206%20-%20she%20%27otw%20jurk/Foto_06-04-2024_15_57_41_uc6qek.jpg"
            }
            alt={"sheotw2"}
            width={300}
            height={400}
            className="w-72 h-86 object-cover"
            onClick={() =>
              showModal(
                "https://res.cloudinary.com/dwgsproch/image/upload/v1712520375/34%20NEELTJE%202022%206%20-%20she%20%27otw%20jurk/Foto_06-04-2024_15_57_41_uc6qek.jpg",
              )
            }
          />
          <CldImage
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1712520455/34%20NEELTJE%202022%206%20-%20she%20%27otw%20jurk/Foto_06-04-2024_16_12_51_tb32q9.jpg"
            }
            alt={"sheotw1"}
            width={300}
            height={400}
            className="w-72 h-86 object-cover"
            onClick={() =>
              showModal(
                "https://res.cloudinary.com/dwgsproch/image/upload/v1712520455/34%20NEELTJE%202022%206%20-%20she%20%27otw%20jurk/Foto_06-04-2024_16_12_51_tb32q9.jpg",
              )
            }
          />
          <CldImage
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1712520468/34%20NEELTJE%202022%206%20-%20she%20%27otw%20jurk/Foto_06-04-2024_16_08_41_p9jawy.jpg"
            }
            alt={"sheotw4"}
            width={300}
            height={400}
            className="w-72 h-86 object-cover"
            onClick={() =>
              showModal(
                "https://res.cloudinary.com/dwgsproch/image/upload/v1712520468/34%20NEELTJE%202022%206%20-%20she%20%27otw%20jurk/Foto_06-04-2024_16_08_41_p9jawy.jpg",
              )
            }
          />
          <CldImage
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1712524047/34%20NEELTJE%202022%206%20-%20she%20%27otw%20jurk/2022-12-28_17.05.13_q7bvwq.jpg"
            }
            alt={"sheotw5"}
            width={300}
            height={400}
            className="w-72 h-86 object-cover"
            onClick={() =>
              showModal(
                "https://res.cloudinary.com/dwgsproch/image/upload/v1712524047/34%20NEELTJE%202022%206%20-%20she%20%27otw%20jurk/2022-12-28_17.05.13_q7bvwq.jpg",
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
              "https://res.cloudinary.com/dwgsproch/image/upload/v1712572654/34%20NEELTJE%202022%206%20-%20she%20%27otw%20jurk/IMG_1184_zckuck.jpg"
            }
            alt={"sheotw"}
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
