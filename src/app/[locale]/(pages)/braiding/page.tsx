"use client";

import React from "react";
import { useI18n } from "../../../../../translations/client";
import Image from "next/image";
import { useWindowSize } from "@/lib/hooks/useWindowsize";
import {CldImage} from "next-cloudinary";

const Page = () => {
  const t = useI18n();
  const windowSize = useWindowSize();
  const smallScreen = windowSize.width! < 800;

  return (
      <div className={`flex ${smallScreen ? "flex-col" : "flex-row"} col-12 `}>
        <div className={`flex flex-col ${smallScreen ? "col-12" : "col-6"}`}>
          {/* Text */}
          <div className={`${smallScreen ? "ml-2 mb-4" : "p-6 mb-4"} `}>
            <h3 className="font-medium text-xl">BRAIDING IN SILENCE</h3>
            <p className="mt-3">
            {t("braiding.caption")}<br />
            <i>{t("braiding.subcaption")}</i><br /><br />
            {t("braiding.credits")} <i>{t("general.neeltje")}</i><br /><br />
              6.2022
            </p>
          </div>
          {/* Grote afbeelding rechts  */}
          {smallScreen && (
              <div className={"col-12 justify-center flex"}>
                <video className={""} width="704" height="536" controls autoPlay>
                  <source
                    src={"https://res.cloudinary.com/dwgsproch/video/upload/v1710684054/31%20NEELTJE%202021%2012%20-%20braiding%20in%20silence/vlechten_stills_v0yxsq.mp4" }
                  ></source>
                </video>
              </div>
          )}
          {/* Images */}
          <div className={`flex-wrap flex gap-2 mt-10 ${smallScreen ? " justify-center" : "ml-6 justify-start"}`}>
              <CldImage
                  src={"https://res.cloudinary.com/dwgsproch/image/upload/v1710076557/31%20NEELTJE%202021%2012%20-%20braiding%20in%20silence/IMG_6920_odtwti.png"}
                  alt={"braid"}
                  width={225}
                  height={300}
              />
              <CldImage
                  src={"https://res.cloudinary.com/dwgsproch/image/upload/v1710076530/31%20NEELTJE%202021%2012%20-%20braiding%20in%20silence/WhatsApp_Image_2022-10-28_at_3.39.05_PM_1_brn5h7.jpg"}
                  alt={"braid1"}
                  width={750}
                  height={395}
              />
          </div>
        </div>
        {/* Grote afbeelding rechts  */}
        {!smallScreen && (
            <div className={`fixed right-0 justify-end flex col-6`}>
              <video className={""} width="704" height="536" controls autoPlay>
                  <source
                    src={"https://res.cloudinary.com/dwgsproch/video/upload/v1710684054/31%20NEELTJE%202021%2012%20-%20braiding%20in%20silence/vlechten_stills_v0yxsq.mp4" }
                  ></source>
                </video>
            </div>
        )}
      </div>
  );
};

export default Page;




