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
      <div className={`flex flex-col ${smallScreen ? "col-12" : "col-4"}`}>
        {/* Text */}
        <div className={`${smallScreen ? "ml-2 mb-4" : "p-6 mb-4"} `}>
          <h3 className="font-medium text-xl">HERE, MY THOUGHTS</h3>
          <p className="mt-3">
            {t("thoughts.caption")}; {t("thoughts.caption1")}{" "}
            <i>{t("general.neeltje")}</i> {t("thoughts.caption2")}
            <br />
            <br />
            {t("thoughts.klik")}
            <br />
            <br />
            6.2022
          </p>
        </div>
        {/* Grote afbeelding rechts  */}
        {smallScreen && (
          <div className={"col-12 justify-center flex"}>
            <a
              href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhjN7PNQ_ptntlAn9YbWabcvWAMvX-ikAv4IodI_HS1bnVmHsbRA2kMY3VVRfB-rPrsWw8qrSWwgXoL3CN-DoxTvFGOF7agY83dAdsF7x8fRPjqQ6YeD7OBVoqplabtNjO2C7KrjZSnpZBQR6emttm4IQRaE_RN3JTj1RaeeIoSe2CWugj7BWUK49-W/s12992/walllllllll.jpg"
              target="_blank"
            >
              {" "}
              <div className="flex ">
                <Image
                  src={
                    "https://res.cloudinary.com/dwgsproch/image/upload/v1711795937/NEELTJE%20-%20here%2C%20my%20thoughts/walllllllll-min_cqco5v.jpg"
                  }
                  alt={"wall1"}
                  width={1200}
                  height={800}
                />
              </div>{" "}
            </a>
          </div>
        )}
      </div>
      {/* Grote afbeelding rechts  */}

      {!smallScreen && (
        <div className={`fixed right-0 justify-end flex col-8 p-0`}>
          <a
            href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhjN7PNQ_ptntlAn9YbWabcvWAMvX-ikAv4IodI_HS1bnVmHsbRA2kMY3VVRfB-rPrsWw8qrSWwgXoL3CN-DoxTvFGOF7agY83dAdsF7x8fRPjqQ6YeD7OBVoqplabtNjO2C7KrjZSnpZBQR6emttm4IQRaE_RN3JTj1RaeeIoSe2CWugj7BWUK49-W/s12992/walllllllll.jpg"
            target="_blank"
          >
            <img
              src={
                "https://res.cloudinary.com/dwgsproch/image/upload/v1711795937/NEELTJE%20-%20here%2C%20my%20thoughts/walllllllll-min_cqco5v.jpg"
              }
              alt={"wall1"}
              className={"h-auto max-h-screen w-auto justify-end"}
            />
          </a>
        </div>
      )}
    </div>
  );
};

export default Page;