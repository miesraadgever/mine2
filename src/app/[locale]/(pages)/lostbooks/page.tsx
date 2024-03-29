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
            <h3 className="font-medium text-xl">LOST BOOKS</h3>
            <p className="mt-3">
              {t("lostbooks.caption")}
              <br></br>
              {t("general.credits")} <i>{t("general.mies")}</i>
              <br></br>
              <br></br>
              {t("general.ongoing")}
            </p>
          </div>
          {/* Grote afbeelding rechts  */}
          {smallScreen && (
              <div className={"col-12 justify-center flex"}>
                <div className="flex ">
                  <Image
                      src={"https://res.cloudinary.com/dwgsproch/image/upload/v1710077619/MIES%20-%20lost%20books/4_wzh3pz.jpg"}
                      alt={"book1"}
                      width={600}
                      height={700}
                  />
                </div>
              </div>
          )}
          {/* Images */}
          <div className={`flex-wrap flex gap-2 mt-10 ${smallScreen ? " justify-center" : "ml-6 justify-start"}`}>
            <div className="">
              <CldImage
                  src={
                    "https://res.cloudinary.com/dwgsproch/image/upload/v1710077611/MIES%20-%20lost%20books/7_vszbyq.jpg"
                  }
                  alt={"book1"}
                  width={200}
                  height={300}
              />
            </div>
            <div className="">
              <CldImage
                  src={"https://res.cloudinary.com/dwgsproch/image/upload/v1710077617/MIES%20-%20lost%20books/1_qgclg2.jpg"}
                  alt={"book2"}
                  width={200}
                  height={300}
              />
            </div>
            <div className="">
              <CldImage
                  src={"https://res.cloudinary.com/dwgsproch/image/upload/v1710077619/MIES%20-%20lost%20books/4_wzh3pz.jpg"}
                  alt={"book3"}
                  width={200}
                  height={300}
              />
            </div>
          </div>
        </div>
        {/* Grote afbeelding rechts  */}
        {!smallScreen && (
            <div className={`fixed right-0 justify-end flex col-6`}>
              <img
                  src={"https://res.cloudinary.com/dwgsproch/image/upload/v1710077616/MIES%20-%20lost%20books/5_clqr0i.jpg"}
                  alt={"book1"}
                  className={"h-auto max-h-screen w-auto justify-end"}
              />
            </div>
        )}
      </div>
  );
};

export default Page;
