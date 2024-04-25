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
          <h3 className="font-medium text-xl">EXCERPTS OF CONNECTION</h3>
          <p className="mt-3">
            {t("connection.caption")}
            <br />
            <br />
            {t("connection.performers")} <i>{t("connection.maya")}</i>
            <br />
            {t("connection.muziek")} <i>{t("connection.buddy")}</i>
            <br />
            <br />
            {t("general.credits")} <i>{t("general.neeltje")}</i>
            <br />
            <br />
            1.2021
          </p>
        </div>
        {/* Grote afbeelding rechts  */}
        {smallScreen && (
          <div className={"col-12 justify-center flex"}>
            <video className={""} width="700" height="200" controls>
              <source
                src={
                  "https://res.cloudinary.com/dwgsproch/video/upload/v1709933082/15%20NEELTJE%202021%201%20-%20excerpts%20of%20connection/onderaan_full_video_met_geluid_op_website-_niet_autoplay_dan_g6smfb.mp4"
                }
              ></source>
            </video>
          </div>
        )}
        {/* Images */}
        <div
          className={`flex-wrap flex gap-2 mt-10 ${smallScreen ? " justify-center" : "ml-6 justify-start"}`}
        >
          <CldImage
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1709931639/15%20NEELTJE%202021%201%20-%20excerpts%20of%20connection/foto_2_ah3lok.jpg"
            }
            alt={"conn"}
            width={300}
            height={450}
            onClick={() =>
              showModal(
                "https://res.cloudinary.com/dwgsproch/image/upload/v1709931639/15%20NEELTJE%202021%201%20-%20excerpts%20of%20connection/foto_2_ah3lok.jpg",
              )
            }
          />
          <CldImage
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1709931648/15%20NEELTJE%202021%201%20-%20excerpts%20of%20connection/2021-01-29_15.27.00_gkurc9.jpg"
            }
            alt={"conn2"}
            width={450}
            height={650}
            className={"object-cover h-80 w-80"}
            onClick={() =>
              showModal(
                "https://res.cloudinary.com/dwgsproch/image/upload/v1709931648/15%20NEELTJE%202021%201%20-%20excerpts%20of%20connection/2021-01-29_15.27.00_gkurc9.jpg",
              )
            }
          />
          <CldImage
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1709931633/15%20NEELTJE%202021%201%20-%20excerpts%20of%20connection/foto_1_ulmzwx.png"
            }
            alt={"conn3"}
            width={300}
            height={450}
            onClick={() =>
              showModal(
                "https://res.cloudinary.com/dwgsproch/image/upload/v1709931633/15%20NEELTJE%202021%201%20-%20excerpts%20of%20connection/foto_1_ulmzwx.png",
              )
            }
          />
        </div>
      </div>
      {/* Grote afbeelding rechts  */}
      {!smallScreen && (
        <div className={`fixed right-0 justify-end flex col-6`}>
          <video className={""} width="700" height="200" controls>
            <source
              src={
                "https://res.cloudinary.com/dwgsproch/video/upload/v1709933082/15%20NEELTJE%202021%201%20-%20excerpts%20of%20connection/onderaan_full_video_met_geluid_op_website-_niet_autoplay_dan_g6smfb.mp4"
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
