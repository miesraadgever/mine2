"use client";

import React, { useState } from "react";
import { useI18n } from "../../../../../translations/client";
import Image from "next/image";
import { useWindowSize } from "@/lib/hooks/useWindowsize";
import { CldImage } from "next-cloudinary";
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
    <div className={`flex ${smallScreen ? "flex-col" : "flex-row"} col-12 `}>
      <div className={`flex flex-col ${smallScreen ? "col-12" : "col-6"}`}>
        {/* Text */}
        <div className={`${smallScreen ? "ml-2 mb-4" : "p-6 mb-4"} `}>
          <h3 className="font-medium text-xl">SHE OF THE WATER</h3>
          <p className="mt-3">
            {t("she.caption")}: {t("she.subcaption")} <br />
            <br />
            {t("she.subcaption1")}
            <br /> {t("she.subcaption2")}
            <br />
            <br />-{" "}
            <a
              href="https://www.youtube.com/watch?v=tNxpRpfeSaI"
              target="_blank"
            >
              <i>{t("she.link")}</i>
            </a>{" "}
            <br /> -{" "}
            <a href="/she/cdboekje">
              <i>{t("she.linkboekje")}</i>
            </a>
            <br />
            <br />
            {t("she.subcaption3")}
            <br />
            <br />
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
                  "https://res.cloudinary.com/dwgsproch/image/upload/v1710076530/34%20NEELTJE%202022%206%20-%20she%20%27otw/WhatsApp_Image_2022-06-08_at_10.39.17_PM_1_i8s9pi.jpg"
                }
                alt={"she1"}
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
              "https://res.cloudinary.com/dwgsproch/image/upload/v1711994635/34%20NEELTJE%202022%206%20-%20she%20%27otw/Screenshot_2024-04-01_180143_bntk21.png"
            }
            alt={"she2"}
            width={400}
            height={300}
            className="w-72 h-62 object-cover"
            onClick={() =>
              showModal(
                "https://res.cloudinary.com/dwgsproch/image/upload/v1711994635/34%20NEELTJE%202022%206%20-%20she%20%27otw/Screenshot_2024-04-01_180143_bntk21.png",
              )
            }
          />
          <CldImage
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1711994583/34%20NEELTJE%202022%206%20-%20she%20%27otw/Screenshot_2024-04-01_180228_ycuqwk.png"
            }
            alt={"she3"}
            width={400}
            height={300}
            className="w-72 h-62 object-cover"
            onClick={() =>
              showModal(
                "https://res.cloudinary.com/dwgsproch/image/upload/v1711994583/34%20NEELTJE%202022%206%20-%20she%20%27otw/Screenshot_2024-04-01_180228_ycuqwk.png",
              )
            }
          />
          <CldImage
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1711994572/34%20NEELTJE%202022%206%20-%20she%20%27otw/Screenshot_2024-04-01_180247_jmdmam.png"
            }
            alt={"she4"}
            width={400}
            height={300}
            className="w-72 h-62 object-cover"
            onClick={() =>
              showModal(
                "https://res.cloudinary.com/dwgsproch/image/upload/v1711994572/34%20NEELTJE%202022%206%20-%20she%20%27otw/Screenshot_2024-04-01_180247_jmdmam.png",
              )
            }
          />
          <CldImage
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1711994575/34%20NEELTJE%202022%206%20-%20she%20%27otw/Screenshot_2024-04-01_180259_ey32rm.png"
            }
            alt={"she5"}
            width={400}
            height={300}
            className="w-72 h-62 object-cover"
            onClick={() =>
              showModal(
                "https://res.cloudinary.com/dwgsproch/image/upload/v1711994575/34%20NEELTJE%202022%206%20-%20she%20%27otw/Screenshot_2024-04-01_180259_ey32rm.png",
              )
            }
          />
          <CldImage
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1711994587/34%20NEELTJE%202022%206%20-%20she%20%27otw/Screenshot_2024-04-01_180334_facx2x.png"
            }
            alt={"she6"}
            width={400}
            height={300}
            className="w-72 h-62 object-cover"
            onClick={() =>
              showModal(
                "https://res.cloudinary.com/dwgsproch/image/upload/v1711994587/34%20NEELTJE%202022%206%20-%20she%20%27otw/Screenshot_2024-04-01_180334_facx2x.png",
              )
            }
          />
          <CldImage
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1711994590/34%20NEELTJE%202022%206%20-%20she%20%27otw/Screenshot_2024-04-01_180413_psbxsj.png"
            }
            alt={"she7"}
            width={400}
            height={300}
            className="w-72 h-62 object-cover"
            onClick={() =>
              showModal(
                "https://res.cloudinary.com/dwgsproch/image/upload/v1711994590/34%20NEELTJE%202022%206%20-%20she%20%27otw/Screenshot_2024-04-01_180413_psbxsj.png",
              )
            }
          />
          <CldImage
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1711994594/34%20NEELTJE%202022%206%20-%20she%20%27otw/Screenshot_2024-04-01_180427_e8zwxj.png"
            }
            alt={"she8"}
            width={400}
            height={300}
            className="w-72 h-62 object-cover"
            onClick={() =>
              showModal(
                "https://res.cloudinary.com/dwgsproch/image/upload/v1711994594/34%20NEELTJE%202022%206%20-%20she%20%27otw/Screenshot_2024-04-01_180427_e8zwxj.png",
              )
            }
          />
          <CldImage
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1711994568/34%20NEELTJE%202022%206%20-%20she%20%27otw/Screenshot_2024-04-01_180200_o3cbsi.png"
            }
            alt={"she9"}
            width={400}
            height={300}
            className="w-72 h-62 object-cover"
            onClick={() =>
              showModal(
                "https://res.cloudinary.com/dwgsproch/image/upload/v1711994568/34%20NEELTJE%202022%206%20-%20she%20%27otw/Screenshot_2024-04-01_180200_o3cbsi.png",
              )
            }
          />
          <CldImage
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1711994597/34%20NEELTJE%202022%206%20-%20she%20%27otw/Screenshot_2024-04-01_180441_dx9zuc.png"
            }
            alt={"she10"}
            width={400}
            height={300}
            className="w-72 h-62 object-cover"
            onClick={() =>
              showModal(
                "https://res.cloudinary.com/dwgsproch/image/upload/v1711994597/34%20NEELTJE%202022%206%20-%20she%20%27otw/Screenshot_2024-04-01_180441_dx9zuc.png",
              )
            }
          />
          <CldImage
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1711994601/34%20NEELTJE%202022%206%20-%20she%20%27otw/Screenshot_2024-04-01_180458_gigfuo.png"
            }
            alt={"she11"}
            width={400}
            height={300}
            className="w-72 h-62 object-cover"
            onClick={() =>
              showModal(
                "https://res.cloudinary.com/dwgsproch/image/upload/v1711994601/34%20NEELTJE%202022%206%20-%20she%20%27otw/Screenshot_2024-04-01_180458_gigfuo.png",
              )
            }
          />
          <CldImage
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1712519323/34%20NEELTJE%202022%206%20-%20she%20%27otw/Screenshot_2024-04-07_214521_ab4ter.png"
            }
            alt={"she12"}
            width={400}
            height={300}
            className="w-72 h-62 object-cover"
            onClick={() =>
              showModal(
                "https://res.cloudinary.com/dwgsproch/image/upload/v1712519323/34%20NEELTJE%202022%206%20-%20she%20%27otw/Screenshot_2024-04-07_214521_ab4ter.png",
              )
            }
          />
          <CldImage
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1711994608/34%20NEELTJE%202022%206%20-%20she%20%27otw/Screenshot_2024-04-01_180606_lnncb4.png"
            }
            alt={"she13"}
            width={400}
            height={300}
            className="w-72 h-62 object-cover"
            onClick={() =>
              showModal(
                "https://res.cloudinary.com/dwgsproch/image/upload/v1711994608/34%20NEELTJE%202022%206%20-%20she%20%27otw/Screenshot_2024-04-01_180606_lnncb4.png",
              )
            }
          />
          <CldImage
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1712519326/34%20NEELTJE%202022%206%20-%20she%20%27otw/Screenshot_2024-04-06_164912_y0iddf.png"
            }
            alt={"she14"}
            width={400}
            height={300}
            className="w-72 h-62 object-cover"
            onClick={() =>
              showModal(
                "https://res.cloudinary.com/dwgsproch/image/upload/v1712519326/34%20NEELTJE%202022%206%20-%20she%20%27otw/Screenshot_2024-04-06_164912_y0iddf.png",
              )
            }
          />
          <CldImage
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1711994605/34%20NEELTJE%202022%206%20-%20she%20%27otw/Screenshot_2024-04-01_180554_zw2orc.png"
            }
            alt={"she15"}
            width={400}
            height={300}
            className="w-72 h-62 object-cover"
            onClick={() =>
              showModal(
                "https://res.cloudinary.com/dwgsproch/image/upload/v1711994605/34%20NEELTJE%202022%206%20-%20she%20%27otw/Screenshot_2024-04-01_180554_zw2orc.png",
              )
            }
          />
          <CldImage
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1711994528/34%20NEELTJE%202022%206%20-%20she%20%27otw/Screenshot_2024-04-01_180700_k4br5o.png"
            }
            alt={"she16"}
            width={400}
            height={300}
            className="w-72 h-62 object-cover"
            onClick={() =>
              showModal(
                "https://res.cloudinary.com/dwgsproch/image/upload/v1711994528/34%20NEELTJE%202022%206%20-%20she%20%27otw/Screenshot_2024-04-01_180700_k4br5o.png",
              )
            }
          />
          <CldImage
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1711994580/34%20NEELTJE%202022%206%20-%20she%20%27otw/Screenshot_2024-04-01_180801_o3kaqu.png"
            }
            alt={"she17"}
            width={400}
            height={300}
            className="w-72 h-62 object-cover"
            onClick={() =>
              showModal(
                "https://res.cloudinary.com/dwgsproch/image/upload/v1711994580/34%20NEELTJE%202022%206%20-%20she%20%27otw/Screenshot_2024-04-01_180801_o3kaqu.png",
              )
            }
          />
        </div>
      </div>
      {/* Grote afbeelding rechts  */}

      {!smallScreen && (
        <div className={`fixed right-10 justify-end flex col-6 p-0`}>
          <img
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1710076530/34%20NEELTJE%202022%206%20-%20she%20%27otw/WhatsApp_Image_2022-06-08_at_10.39.17_PM_1_i8s9pi.jpg"
            }
            alt={"she1"}
            className={"h-auto max-h-screen w-auto justify-end"}
          />
        </div>
      )}
      <ImagePopUp
        hideDialog={() => setShow(false)}
        imageUrl={imageUrl}
        show={show}
      />
    </div>
  );
};

export default Page;
