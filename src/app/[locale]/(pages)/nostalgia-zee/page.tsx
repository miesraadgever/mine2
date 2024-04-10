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
            <h3 className="font-medium text-xl">NOSTALGIA ZEE</h3>
            <p className="mt-3">
              {t("zee.caption")}
              <br />
              <br />
              {t("general.credits")} <i>{t("general.mi_ne")}</i>
              <br />
              <br />
              <i>12.2020</i>
            </p>
          </div>
          {/* Grote afbeelding rechts  */}
          {smallScreen && (
              <div className={"col-12 justify-center flex"}>
                <div className="flex ">
                  <video loop muted autoPlay>
                    <source
                        src={
                          "https://res.cloudinary.com/dwgsproch/video/upload/v1712757836/13%20MI_NE%202021%201%20-%20nostalgia%20ultra%20%5Bzee%5D/edit_gtfzvm.mp4"
                        }
                    ></source>
                  </video>
                </div>
              </div>
          )}
          {/* Images */}
        </div>
        {/* Grote afbeelding rechts  */}
        {!smallScreen && (
            <div className={`fixed right-0 justify-end flex col-7`}>
              <video  loop muted autoPlay>
                <source
                    src={
                      "https://res.cloudinary.com/dwgsproch/video/upload/v1712757836/13%20MI_NE%202021%201%20-%20nostalgia%20ultra%20%5Bzee%5D/edit_gtfzvm.mp4"
                    }
                ></source>
              </video>
            </div>
        )}
      </div>
  );
};

export default Page;
