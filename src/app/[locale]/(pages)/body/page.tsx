"use client";

import React from "react";
import { useI18n } from "../../../../../translations/client";
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
          <h3 className="font-medium text-xl">SADGIRLWEARABLES; BODY</h3>
          <p className="mt-3">
            <i>{t("garments.caption")} </i> <br />
            <br />
            {t("general.credits")} <i>{t("general.neeltje")}</i>
            <br /> <br />
            {t("general.ongoing")}
          </p>
        </div>

        {/* Images */}
        <div
          className={`fixed right-2 justify-end flex col-6 flex-wrap flex gap-2 mt-10 ${smallScreen ? " justify-center" : "ml-6 justify-start"}`}
        >
          <a href="/body/choker">
            {" "}
            <div className="">
              <CldImage
                src={
                  "https://res.cloudinary.com/dwgsproch/image/upload/v1712523640/neeltje%20-%20sgw:%20choker/Foto_07-04-2024_09_08_41_e0iloc.jpg"
                }
                alt={"choker"}
                width={180}
                height={240}
                className="w-43 h-48 object-cover"
              />
            </div>{" "}
          </a>
          <a href="/body/haarbloempjes">
            {" "}
            <div className="">
              <CldImage
                src={
                  "https://res.cloudinary.com/dwgsproch/image/upload/v1712754181/neeltje%20-%20sgw:%20haarbloempjes/2022-12-13_16.04.162_youojw.jpg"
                }
                alt={"haar"}
                width={180}
                height={240}
                className="w-43 h-48 object-cover"
              />
            </div>{" "}
          </a>
          <a href="/body/adorn">
            {" "}
            <div className="">
              <CldImage
                src={
                  "https://res.cloudinary.com/dwgsproch/image/upload/v1712752992/neeltje%20-%20sgw:%20adorn/Screenshot_2024-04-10_144255_cw9ie0.png"
                }
                alt={"adorn"}
                width={180}
                height={240}
                className="w-43 h-48 object-cover"
              />
            </div>{" "}
          </a>
          <a href="/body/buikketting">
            {" "}
            <div className="">
              <CldImage
                src={
                  "https://res.cloudinary.com/dwgsproch/image/upload/v1712750089/neeltje%20-%20sgw:%20buikketting/2018-12-24_14.26.49_tagz3e.jpg"
                }
                alt={"buik"}
                width={180}
                height={240}
                className="w-43 h-48 object-cover"
              />
            </div>{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page;
