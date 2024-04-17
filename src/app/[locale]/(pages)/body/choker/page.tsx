"use client";

import React,{useState} from "react";
import { useI18n } from "../../../../../../translations/client";
import Image from "next/image";
import { useWindowSize } from "@/lib/hooks/useWindowsize";
import { CldImage } from "next-cloudinary";
import ImagePopUp from "@/components/ImagePopUp";

const Page = () => {
  const t = useI18n();
  const windowSize = useWindowSize();
  const smallScreen = windowSize.width! < 800;
  const [imageUrl, setImageUrl] = useState("")
  const [show, setShow] = useState(false)

  const showModal = (url: string) => {
    setImageUrl(url)
    setShow(true)
  }

  return (
    <div className={`flex ${smallScreen ? "flex-col" : "flex-row"} col-12 `}>
      <div className={`flex flex-col ${smallScreen ? "col-12" : "col-6"}`}>
        {/* Text */}
        <div className={`${smallScreen ? "ml-2 mb-4" : "p-6 mb-4"} `}>
          <h3 className="font-medium text-xl"> MIES' CHOKER</h3>
          <p className="mt-3">
            {t("body.choker")} <br />
            <i>{t("general.aanvraag")}</i>
            <br />
            {t("general.credits")} <i>{t("general.neeltje")}</i>
            <br />
            <br />
            12.2023
          </p>
        </div>
        {/* Grote afbeelding rechts  */}
        {smallScreen && (
          <div className={"col-12 justify-center flex"}>
            <div className="flex ">
              <Image
                src={
                  "https://res.cloudinary.com/dwgsproch/image/upload/v1712753665/neeltje%20-%20sgw:%20choker/Foto_07-04-2024_09_10_041_rjo6if.jpg"
                }
                alt={"choker1"}
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
              "https://res.cloudinary.com/dwgsproch/image/upload/v1712519774/neeltje%20-%20sgw:%20choker/img20240407_14174907_fqalxh.jpg"
            }
            alt={"choker2"}
            width={300}
            height={400}
            className="w-72 h-86 object-cover"
            onClick={() => showModal("https://res.cloudinary.com/dwgsproch/image/upload/v1712519774/neeltje%20-%20sgw:%20choker/img20240407_14174907_fqalxh.jpg")}

          />
          <CldImage
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1712523632/neeltje%20-%20sgw:%20choker/Foto_07-04-2024_09_11_23_hwztqo.jpg"
            }
            alt={"choker3"}
            width={300}
            height={400}
            className="w-72 h-86 object-cover"
            onClick={() => showModal("https://res.cloudinary.com/dwgsproch/image/upload/v1712523632/neeltje%20-%20sgw:%20choker/Foto_07-04-2024_09_11_23_hwztqo.jpg")}

          />
        </div>
      </div>
      {/* Grote afbeelding rechts  */}
      {!smallScreen && (
        <div className={`fixed right-0 justify-end flex col-6`}>
          <img
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1712753665/neeltje%20-%20sgw:%20choker/Foto_07-04-2024_09_10_041_rjo6if.jpg"
            }
            alt={"choker1"}
            className={"h-auto max-h-screen w-auto justify-end"}
          />
        </div>
      )}
          <ImagePopUp hideDialog={() => setShow(false)} imageUrl={imageUrl} show={show} />
    </div>
  );
};

export default Page;
