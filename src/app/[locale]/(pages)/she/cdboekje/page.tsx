"use client";

import React from "react";
import { useI18n } from "../../../../../../translations/client";
import Image from "next/image";
import { useWindowSize } from "@/lib/hooks/useWindowsize";
import { CldImage } from "next-cloudinary";

const Page = () => {
  const t = useI18n();
  const windowSize = useWindowSize();
  const smallScreen = windowSize.width! < 800;

  return (
    <div className={`flex ${smallScreen ? "flex-col" : "flex-row"} col-12 `}>
      <div className={`flex flex-col ${smallScreen ? "col-12" : "col-6"}`}>
        {/* Text */}
        <div className={`${smallScreen ? "ml-2 mb-4" : "p-6 mb-4"} `}>
          <h3 className="font-medium text-xl">SHE OF THE WATER; cd boekje</h3>
          <p className="mt-3">
            {t("boekje.caption")} <br />
            {t("general.credits")} <i>{t("general.neeltje")}</i>
            <br /> <br />
            6.2022
          </p>
        </div>
        {/* Grote afbeelding rechts  */}
        {smallScreen && (
          <div className={"col-12 justify-center flex"}>
            <div className="flex ">
              <Image
                src={
                  "https://res.cloudinary.com/dwgsproch/image/upload/v1712231510/neeltje%20-%20she%20cdboekje/IMG_7901_jjoee8.jpg"
                }
                alt={"cd"}
                width={600}
                height={700}
              />
            </div>
          </div>
        )}
        {/* Images */}
        <div
          className={`flex-wrap flex gap-3 mt-10 ${smallScreen ? " justify-center" : "ml-6 justify-start"}`}
        >
          <CldImage
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1712565488/neeltje%20-%20she%20cdboekje/2022-10-27_12_08_18-Epson_Scan_2_td1r8t.png"
            }
            alt={"cd1"}
            width={400}
            height={300}
            className="w-72 h-62 object-cover"
          />
          <CldImage
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1712565475/neeltje%20-%20she%20cdboekje/2022-10-27_12_07_36-Epson_Scan_2_asy18g.png"
            }
            alt={"cd2"}
            width={400}
            height={300}
            className="w-72 h-62 object-cover"
          />
          <CldImage
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1712564611/neeltje%20-%20she%20cdboekje/img20240408_10184045_ekipyy.jpg"
            }
            alt={"cd3"}
            width={400}
            height={300}
            className="w-72 h-62 object-cover"
          />
          <CldImage
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1712564628/neeltje%20-%20she%20cdboekje/img20240408_10180431_ozhhg5.jpg"
            }
            alt={"cd4"}
            width={400}
            height={300}
            className="w-72 h-62 object-cover"
          />
          <CldImage
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1712326248/neeltje%20-%20she%20cdboekje/img20240405_131412311_urkwyx.jpg"
            }
            alt={"cd5"}
            width={400}
            height={300}
            className="w-72 h-62 object-cover"
          />
          <CldImage
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1712326256/neeltje%20-%20she%20cdboekje/img20240405_131819161_ayz4k7.jpg"
            }
            alt={"cd6"}
            width={400}
            height={300}
            className="w-72 h-62 object-cover"
          />
          <CldImage
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1712564571/neeltje%20-%20she%20cdboekje/img20240408_10165657_md9v0c.jpg"
            }
            alt={"cd7"}
            width={400}
            height={300}
            className="w-72 h-62 object-cover"
          />
          <CldImage
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1712565504/neeltje%20-%20she%20cdboekje/2022-10-27_12_09_12-Epson_Scan_2_llv7vb.png"
            }
            alt={"cd8"}
            width={400}
            height={300}
            className="w-72 h-62 object-cover"
          />
        </div>
      </div>
      {/* Grote afbeelding rechts  */}

      {!smallScreen && (
        <div className={`fixed right-0 justify-end flex col-6 p-0`}>
          <img
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1712231510/neeltje%20-%20she%20cdboekje/IMG_7901_jjoee8.jpg"
            }
            alt={"cd"}
            className={"h-auto max-h-screen w-auto justify-end"}
          />
        </div>
      )}
    </div>
  );
};

export default Page;
