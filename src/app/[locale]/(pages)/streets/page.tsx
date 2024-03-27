"use client";

import React from "react";
import { useI18n } from "../../../../../translations/client";
import Image from "next/image";
import { useWindowSize } from "@/lib/hooks/useWindowsize";

const Page = () => {
  const t = useI18n();
  const windowSize = useWindowSize();
  const smallScreen = windowSize.width! < 1010;

  return (
    <div className="flex">
      {/* Left Column */}
      <div className="flex-1 overflow-auto">
        {/* Text */}
        <div className="bg-gray-200 p-4 mb-4">
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
        {/* Images */}
        <div className={`flex mt-10 ml-4 gap-3`}>
          <div className="flex-1 flex">
            <Image
              src={
                "https://res.cloudinary.com/dwgsproch/image/upload/v1710077611/MIES%20-%20lost%20books/7_vszbyq.jpg"
              }
              alt={"book1"}
              width={300}
              height={400}
            />
          </div>
          <div className="flex-1 ml-2">
            <Image
              src={
                "https://res.cloudinary.com/dwgsproch/image/upload/v1710077616/MIES%20-%20lost%20books/5_clqr0i.jpg"
              }
              alt={"book1"}
              width={300}
              height={400}
            />
          </div>
            <div className="flex-1 ml-2">
                <Image
                    src={"https://res.cloudinary.com/dwgsproch/image/upload/v1710077619/MIES%20-%20lost%20books/4_wzh3pz.jpg"}
                    alt={"book1"}
                    width={300}
                    height={400}
                />
            </div>
        </div>
          {/* Second row */}
          <div className="flex mt-10 ml-4 gap-3">
              <div className="flex-1 ml-2">
              </div>
          </div>
      </div>

      {/* Right Column */}
      <div className="flex-1 flex justify-end ">
        {/* Big Column */}
        <div className="right-0 fixed">
          <Image
            src={"https://res.cloudinary.com/dwgsproch/image/upload/v1710077616/MIES%20-%20lost%20books/5_clqr0i.jpg"}
            alt={"book1"}
            width={500}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
