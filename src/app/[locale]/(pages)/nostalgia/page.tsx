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
            <h3 className="font-medium text-xl">NOSTALGIA ULTRA</h3>
            <p className="mt-3">
              {t("nostalgia.caption")} <br />
              <i>{t("nostalgia.subcaption")}</i> <br />
              <br />
              {t("nostalgia.credits")} <i>{t("general.mi_ne")}</i>
              <br />
              {t("nostalgia.foto")} <i>{t("nostalgia.lisanne")}</i>
              <br />
              {t("nostalgia.model")} <i>{t("nostalgia.loek")}</i>
              <br />
              <br />
              <i>1.2021</i>
            </p>
          </div>
          {/* Grote afbeelding rechts  */}
          {smallScreen && (
              <div className={"col-12 justify-center flex"}>
                <div className="flex ">
                  <video loop muted autoPlay controls>
                    <source
                        src={
                          "https://res.cloudinary.com/dwgsproch/video/upload/v1712758215/14%20MI_NE%202021%201%20-%20nostalgia%20ultra%20%5Bshoot%5D/nostalgia_xz7ymn.mp4"
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
                  src={
                    "https://res.cloudinary.com/dwgsproch/image/upload/v1710077291/14%20MI_NE%202021%201%20-%20nostalgia%20ultra%20%5Bshoot%5D/_MG_9230-min_cpddt5.jpg"
                  }
                  alt={"foto1"}
                  width={250}
                  height={300}
                  className={"object-cover w-80 h-80"}

              />
            </div>
            <div className="">
              <CldImage
                  src={"https://res.cloudinary.com/dwgsproch/image/upload/v1710077602/14%20MI_NE%202021%201%20-%20nostalgia%20ultra%20%5Bshoot%5D/_MG_9115-min_d2j58d.jpg"}
                  alt={"foto2"}
                  width={300}
                  height={400}
                  className={"object-cover w-80 h-80"}

              />
            </div>
            <div className="">
              <CldImage
                  src={"https://res.cloudinary.com/dwgsproch/image/upload/v1709931676/14%20MI_NE%202021%201%20-%20nostalgia%20ultra%20%5Bshoot%5D/2021-01-09_17.33.33_tkmxjc.jpg"}
                  alt={"foto3"}
                  width={600}
                  height={600}
                  className={"object-cover w-80 h-80"}

              />
            </div>
            <div className="">
              <CldImage
                  src={"https://res.cloudinary.com/dwgsproch/image/upload/v1710078164/14%20MI_NE%202021%201%20-%20nostalgia%20ultra%20%5Bshoot%5D/_MG_9163-min-min-min_q1zgsp.jpg"}
                  alt={"foto3"}
                  width={600}
                  height={600}
                  className={"object-cover w-80 h-80"}

              />
            </div>

          </div>
        </div>
        {/* Grote afbeelding rechts  */}
        {!smallScreen && (
            <div className={`fixed right-0 justify-end flex col-6`}>
              <video  loop muted autoPlay controls>
                <source
                    src={
                      "https://res.cloudinary.com/dwgsproch/video/upload/v1712758215/14%20MI_NE%202021%201%20-%20nostalgia%20ultra%20%5Bshoot%5D/nostalgia_xz7ymn.mp4"
                    }
                ></source>
              </video>
            </div>
        )}
      </div>
  );
};

export default Page;
