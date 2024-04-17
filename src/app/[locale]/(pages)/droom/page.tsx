"use client";

import React,{useState} from "react";
import { useI18n } from "../../../../../translations/client";
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
          <h3 className="font-medium text-xl">DROOM ARCHIEF</h3>
          <p className="mt-3">
            {t("droom.caption")}
            <br />
            {t("droom.materiaal")}
            <br />
            <br />
            {t("general.credits")} <i>{t("general.neeltje")}</i>
            <br />
            <br />
            <i>2.2018</i>
          </p>
        </div>
        {/* Grote afbeelding rechts  */}
        {smallScreen && (
          <div className={"col-12 justify-center flex"}>
            <div className="flex ">
              <Image
                src={
                  "https://res.cloudinary.com/dwgsproch/image/upload/v1711717873/2%20NEELTJE%202018%202%20-%20droom%20archief/2.111_bsz7ot.jpg"
                }
                alt={"droom1"}
                width={600}
                height={700}
              />
            </div>
          </div>
        )}
        {/* Videos */}
        <div
          className={`flex-wrap flex gap-2 mt-10 ${smallScreen ? " justify-center" : "ml-6 justify-start"}`}
        >
          <video className={""} width="220" height="200" loop muted autoPlay>
            <source
              src={
                "https://res.cloudinary.com/dwgsproch/video/upload/v1709925368/2%20NEELTJE%202018%202%20-%20droom%20archief/1.mp4"
              }
            ></source>
          </video>
          <video className={""} width="220" height="200" loop muted autoPlay>
            <source
              src={
                "https://res.cloudinary.com/dwgsproch/video/upload/v1709925368/2%20NEELTJE%202018%202%20-%20droom%20archief/2.mp4"
              }
            ></source>
          </video>
          <video className={""} width="220" height="200" loop muted autoPlay>
            <source
              src={
                "https://res.cloudinary.com/dwgsproch/video/upload/v1709925368/2%20NEELTJE%202018%202%20-%20droom%20archief/3.mp4"
              }
            ></source>
          </video>
        </div>
      </div>
      {/* Grote afbeelding rechts  */}
      {!smallScreen && (
        <div className={`fixed right-0 justify-end flex col-6`}>
          <div className="flex ">
            <Image
              src={
                "https://res.cloudinary.com/dwgsproch/image/upload/v1711717873/2%20NEELTJE%202018%202%20-%20droom%20archief/2.111_bsz7ot.jpg"
              }
              alt={"droom1"}
              width={600}
              height={700}
            />
          </div>
        </div>
      )}
            <ImagePopUp hideDialog={() => setShow(false)} imageUrl={imageUrl} show={show} />
    </div>
  );
};

export default Page;
