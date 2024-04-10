"use client";

import React from "react";
import { useI18n } from "../../../../../translations/client";
import Image from "next/image";
import { useWindowSize } from "@/lib/hooks/useWindowsize";
import {CldImage} from "next-cloudinary";
import Link from "next/link";

const Page = () => {
  const t = useI18n();
  const windowSize = useWindowSize();
  const smallScreen = windowSize.width! < 800;

  return (
      <div className={`flex ${smallScreen ? "flex-col" : "flex-row"} col-12 `}>
        <div className={`flex flex-col ${smallScreen ? "col-12" : "col-6"}`}>
          {/* Text */}
          <div className={`${smallScreen ? "ml-2 mb-4" : "p-6 mb-4"} `}>
            <h3 className="font-medium text-xl">NWAAD</h3>
            <p className="mt-3">
              {t("nwaad.caption")}
              <br />
              <br />
              {t("general.credits")} <i>{t("nwaad.credits")}</i>
              <br />
              {t("nwaad.tech")} <i>{t("nwaad.bart")}</i>
              <br />
              <br />
              <i>4.2021</i>
            </p>
          </div>
          {/* Grote afbeelding rechts  */}
          {smallScreen && (
              <div className={"col-12 justify-center flex"}>
                <div className="flex ">
                  <video loop muted autoPlay>
                    <source
                        src={
                          "https://res.cloudinary.com/dwgsproch/video/upload/v1712755904/21%20MI_NE%20-%20NWAA/film_hrdgwb.mp4"
                        }
                    ></source>
                  </video>
                </div>
              </div>
          )}
          {/* Images */}
          <div className={`flex-wrap flex gap-2 mt-10 ${smallScreen ? " justify-center" : "ml-6 justify-start"}`}>
            <div className="">
              <CldImage
                  src={"https://res.cloudinary.com/dwgsproch/image/upload/v1710076107/21%20MI_NE%20-%20NWAA/2021-04-18_15.53.34_qwjzpj.jpg"                            }
                  alt={"ma-1"}
                  width={500}
                  height={600}
                  className={"object-cover w-72 h-96"}

              />
            </div>
            <div className="">
              <CldImage
                  src={
                    "https://res.cloudinary.com/dwgsproch/image/upload/v1710076066/21%20MI_NE%20-%20NWAA/2021-04-18_15.42.28_gpdben.jpg"                            }
                  alt={"ma-2"}
                  width={500}
                  height={600}
                  className={"object-cover w-72 h-96"}

              />
            </div>
            <div className="">
              <CldImage
                  src={
                    "https://res.cloudinary.com/dwgsproch/image/upload/v1710076065/21%20MI_NE%20-%20NWAA/2021-04-18_15.11.06_bnbvey.jpg"
                  }
                  alt={"ma-3"}
                  width={500}
                  height={600}
                  className={"object-cover w-72 h-96"}

              />
            </div>
            <div className="">
              <CldImage
                  src={
                    "https://res.cloudinary.com/dwgsproch/image/upload/v1710076072/21%20MI_NE%20-%20NWAA/2021-04-18_16.33.48_vszccw.jpg"
                  }
                  alt={"ma-3"}
                  width={500}
                  height={600}
                  className={"object-cover w-72 h-96"}
              />
            </div>
          </div>
        </div>
        {/* Grote afbeelding rechts  */}
        {!smallScreen && (
            <div className={`fixed right-0 justify-end flex col-6`}>
              <video  loop muted autoPlay>
                <source
                    src={
                      "https://res.cloudinary.com/dwgsproch/video/upload/v1712755904/21%20MI_NE%20-%20NWAA/film_hrdgwb.mp4"
                    }
                ></source>
              </video>
            </div>
        )}
      </div>
  );
};

export default Page;
