"use client";

import React,{useState} from "react";
import { useI18n } from "../../../../../../translations/client";
import Image from "next/image";
import { useWindowSize } from "@/lib/hooks/useWindowsize";
import { CldImage } from "next-cloudinary";
import ImagePopUp from "@/components/ImagePopUp";


const Page = () => {
  const t = useI18n();
  const windowSize = useWindowSize();
  const smallScreen = windowSize.width! < 800;
  const [imageUrl, setImageUrl] = useState("")
  const [show, setShow] = useState(false)

  const showModal = (url: string) => {
    setImageUrl(url)
    setShow(true)
  }

  return (
    <div className={`flex ${smallScreen ? "flex-col" : "flex-row"} col-12 `}>
      <div className={`flex flex-col ${smallScreen ? "col-12" : "col-6"}`}>
        {/* Text */}
        <div className={`${smallScreen ? "ml-2 mb-4" : "p-6 mb-4"} `}>
          <h3 className="font-medium text-xl">SORROW REVOLUTION</h3>
          <p className="mt-3">
            {t("garments.rok")} <i>{t("garments.niels")}</i>
            <br />
            {t("garments.top")} <i>{t("garments.alex")}</i>
            <br />
            {t("general.credits")} <i>{t("general.neeltje")}</i>
            <br />
            <br />
            3.2021
          </p>
        </div>
        {/* Grote afbeelding rechts  */}
        {smallScreen && (
          <div className={"col-12 justify-center flex"}>
            <div className="flex ">
              <Image
                src={
                  "https://res.cloudinary.com/dwgsproch/image/upload/v1710076107/18%20NEELTJE%202021%203%20-%20alter%20ego%20-%20sorrow%20revolution%20skirt/2021-03-14_16.24.03_csnzrf.jpg"
                }
                alt={"sorrow"}
                width={600}
                height={700}
              />
            </div>
          </div>
        )}
        {/* Images */}
        <div
          className={`flex-wrap flex gap-2 mt-10 ${smallScreen ? " justify-center" : "ml-6 justify-start"}`}
        >
          <video
            className={"w-72 h-84 object-cover"}
            width="320"
            height="410"
            loop
            muted
            autoPlay
          >
            <source
              src={
                "https://res.cloudinary.com/dwgsproch/video/upload/v1712567144/18%20NEELTJE%202021%203%20-%20alter%20ego%20-%20sorrow%20revolution%20skirt/fa59feac-d43e-4fff-adfa-52b672544c07_siyepf.mp4"
              }
            ></source>
          </video>
          <CldImage
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1710076035/18%20NEELTJE%202021%203%20-%20alter%20ego%20-%20sorrow%20revolution%20skirt/2021-03-12_01.11.41-4-1_vq8akt.jpg"
            }
            alt={"sorrow1"}
            width={300}
            height={400}
            className="w-72 h-84 object-cover"
            onClick={() => showModal("https://res.cloudinary.com/dwgsproch/image/upload/v1710076035/18%20NEELTJE%202021%203%20-%20alter%20ego%20-%20sorrow%20revolution%20skirt/2021-03-12_01.11.41-4-1_vq8akt.jpg")}
            />
          <CldImage
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1710076135/18%20NEELTJE%202021%203%20-%20alter%20ego%20-%20sorrow%20revolution%20skirt/2021-03-12_16.41.45_fveiqa.jpg"
            }
            alt={"sorrow3"}
            width={300}
            height={400}
            className="w-72 h-84 object-cover"
            onClick={() => showModal("https://res.cloudinary.com/dwgsproch/image/upload/v1710076135/18%20NEELTJE%202021%203%20-%20alter%20ego%20-%20sorrow%20revolution%20skirt/2021-03-12_16.41.45_fveiqa.jpg")}
            />
          <video
            className={"w-72 h-84 object-cover"}
            width="350"
            height="467"
            loop
            muted
            autoPlay
          >
            <source
              src={
                "https://res.cloudinary.com/dwgsproch/video/upload/v1712567121/18%20NEELTJE%202021%203%20-%20alter%20ego%20-%20sorrow%20revolution%20skirt/82798a10-dcb4-4060-ba5e-5d878a90c612_bpcvkj.mp4"
              }
            ></source>
          </video>
          <CldImage
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1712567672/18%20NEELTJE%202021%203%20-%20alter%20ego%20-%20sorrow%20revolution%20skirt/2021-03-12_17.54.12_hudmwu.jpg"
            }
            alt={"sorrow4"}
            width={300}
            height={400}
            className="w-72 h-84 object-cover"
            onClick={() => showModal("https://res.cloudinary.com/dwgsproch/image/upload/v1712567672/18%20NEELTJE%202021%203%20-%20alter%20ego%20-%20sorrow%20revolution%20skirt/2021-03-12_17.54.12_hudmwu.jpg")}
            />
          <CldImage
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1712568100/18%20NEELTJE%202021%203%20-%20alter%20ego%20-%20sorrow%20revolution%20skirt/2021-03-12_20.14.02_-_Copy_qz1iat.jpg"
            }
            alt={"sorrow5"}
            width={300}
            height={400}
            className="w-72 h-84 object-cover"
            onClick={() => showModal("https://res.cloudinary.com/dwgsproch/image/upload/v1712568100/18%20NEELTJE%202021%203%20-%20alter%20ego%20-%20sorrow%20revolution%20skirt/2021-03-12_20.14.02_-_Copy_qz1iat.jpg")}
            />
          <video
            className={"w-72 h-84 object-cover"}
            width="330"
            height="440"
            loop
            muted
            autoPlay
          >
            <source
              src={
                "https://res.cloudinary.com/dwgsproch/video/upload/v1712566973/18%20NEELTJE%202021%203%20-%20alter%20ego%20-%20sorrow%20revolution%20skirt/IMG_8005_-_1_z8ndqf.mp4"
              }
            ></source>
          </video>
        </div>
      </div>
      {/* Grote afbeelding rechts  */}
      {!smallScreen && (
        <div className={`fixed right-0 justify-end flex col-6`}>
          <img
            src={
              "https://res.cloudinary.com/dwgsproch/image/upload/v1710076107/18%20NEELTJE%202021%203%20-%20alter%20ego%20-%20sorrow%20revolution%20skirt/2021-03-14_16.24.03_csnzrf.jpg"
            }
            alt={"sorrow"}
            className={"h-auto max-h-screen w-auto justify-end"}
          />
        </div>
      )}
          <ImagePopUp hideDialog={() => setShow(false)} imageUrl={imageUrl} show={show} />
   </div>
  );
};

export default Page;
