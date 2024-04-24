"use client";

import React, { useState } from "react";
import { useI18n } from "../../../../../translations/client";
import Image from "next/image";
import { useWindowSize } from "@/lib/hooks/useWindowsize";
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
    <div
      className={`flex ${smallScreen ? "flex-col " : "flex-row"} columns-2 gap-16`}
    >
      <div
        className={`flex-column grow-0 ${smallScreen ? "w-[100] " : "w-[35%]"}  ps-10 pt-10`}
      >
        <h3 className="font-medium text-xl">SKETCHES</h3>
        <p className="mt-3">
          {t("sketches.caption")}
          <br></br>
          {t("sketches.material")}
          <br></br>
          <br></br>
          {t("general.credits")} <i>{t("general.mies")}</i>
          <br></br>
          <br></br>
          {t("general.ongoing")}
        </p>
      </div>
      <div
        className={`flex flex-wrap w-[100%] gap-2 pt-10 ${smallScreen && "justify-center"}`}
      >
        <Image
          src={
            "https://res.cloudinary.com/dwgsproch/image/upload/v1710078926/MIES%20-%20SKETCHES/M_sketch_eig9yx.jpg"
          }
          alt={"book1"}
          width={300}
          height={400}
          onClick={() =>
            showModal(
              "https://res.cloudinary.com/dwgsproch/image/upload/v1710078926/MIES%20-%20SKETCHES/M_sketch_eig9yx.jpg",
            )
          }
        />
        <Image
          src={
            "https://res.cloudinary.com/dwgsproch/image/upload/v1710078921/MIES%20-%20SKETCHES/25-03-1_shdczc.jpg"
          }
          alt={"book1"}
          width={300}
          height={400}
          onClick={() =>
            showModal(
              "https://res.cloudinary.com/dwgsproch/image/upload/v1710078921/MIES%20-%20SKETCHES/25-03-1_shdczc.jpg",
            )
          }
        />
        <Image
          src={
            "https://res.cloudinary.com/dwgsproch/image/upload/v1710078917/MIES%20-%20SKETCHES/25-03-2_m5bycr.jpg"
          }
          alt={"book1"}
          width={300}
          height={400}
          onClick={() =>
            showModal(
              "https://res.cloudinary.com/dwgsproch/image/upload/v1710078917/MIES%20-%20SKETCHES/25-03-2_m5bycr.jpg",
            )
          }
        />
        <Image
          src={
            "https://res.cloudinary.com/dwgsproch/image/upload/v1710078914/MIES%20-%20SKETCHES/Untitled_3_shdf6b.jpg"
          }
          alt={"book1"}
          width={300}
          height={400}
          onClick={() =>
            showModal(
              "https://res.cloudinary.com/dwgsproch/image/upload/v1710078914/MIES%20-%20SKETCHES/Untitled_3_shdf6b.jpg",
            )
          }
        />
      </div>
      <ImagePopUp
        hideDialog={() => setShow(false)}
        imageUrl={imageUrl}
        show={show}
      />
    </div>
  );
};

export default Page;
