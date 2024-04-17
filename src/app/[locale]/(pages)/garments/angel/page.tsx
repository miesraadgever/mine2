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
          <h3 className="font-medium text-xl">MELANCHOLY ANGEL</h3>
          <p className="mt-3">
            {t("garments.angel")} <br />
            {t("general.credits")} <i>{t("general.neeltje")}</i>
            <br />
            <br />
            3.2021
          </p>
        </div>
        {/* Grote afbeelding rechts  */}
        {smallScreen && (
          <div className={"col-12 justify-center flex"}>
            <div className="flex ">
              <Image
                src={
                  "https://res.cloudinary.com/dwgsproch/image/upload/v1710076041/20%20NEELTJE%202021%203%20-%20alter%20ego%20-%20melancholy%20angel/IMG_9876_ausg2b.jpg"
                }
                alt={"angel"}
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
                "https://res.cloudinary.com/dwgsproch/image/upload/v1710076041/20%20NEELTJE%202021%203%20-%20alter%20ego%20-%20melancholy%20angel/IMG_9876_ausg2b.jpg"
              }
              alt={"angel3"}
              width={300}
              height={400}
              className="w-72 h-80 object-cover"
              onClick={() => showModal("https://res.cloudinary.com/dwgsproch/image/upload/v1710076041/20%20NEELTJE%202021%203%20-%20alter%20ego%20-%20melancholy%20angel/IMG_9876_ausg2b.jpg")}

            />
          </div>
          <div className="">
            <CldImage
              src={
                "https://res.cloudinary.com/dwgsproch/image/upload/v1711722456/20%20NEELTJE%202021%203%20-%20alter%20ego%20-%20melancholy%20angel/3BBA8EC0-EC3D-40AC-8C62-CB7D171EBE66_a4cw6t.jpg"
              }
              alt={"angel2"}
              width={300}
              height={400}
              className="w-72 h-80 object-cover"
              onClick={() => showModal("https://res.cloudinary.com/dwgsproch/image/upload/v1711722456/20%20NEELTJE%202021%203%20-%20alter%20ego%20-%20melancholy%20angel/3BBA8EC0-EC3D-40AC-8C62-CB7D171EBE66_a4cw6t.jpg")}

            />
          </div>
          <div className="">
            <CldImage
              src={
                "https://res.cloudinary.com/dwgsproch/image/upload/v1710076047/20%20NEELTJE%202021%203%20-%20alter%20ego%20-%20melancholy%20angel/2021-04-30_15.39.24_fq76t9.png"
              }
              alt={"angel1"}
              width={300}
              height={400}
              className="w-72 h-80 object-cover"
              onClick={() => showModal("https://res.cloudinary.com/dwgsproch/image/upload/v1710076047/20%20NEELTJE%202021%203%20-%20alter%20ego%20-%20melancholy%20angel/2021-04-30_15.39.24_fq76t9.png")}

            />
          </div>
        </div>
      </div>
      {/* Grote afbeelding rechts  */}
      {!smallScreen && (
        <div className={`fixed right-0 justify-end flex col-6`}>
          <img
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1710076041/20%20NEELTJE%202021%203%20-%20alter%20ego%20-%20melancholy%20angel/IMG_9876_ausg2b.jpg"
            }
            alt={"angel"}
            className={"h-auto max-h-screen w-auto justify-end"}
          />
        </div>
      )}
            <ImagePopUp hideDialog={() => setShow(false)} imageUrl={imageUrl} show={show} />
    </div>
  );
};

export default Page;
