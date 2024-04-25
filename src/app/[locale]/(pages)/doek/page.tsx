"use client";

import React, { useState } from "react";
import { useI18n } from "../../../../../translations/client";
import { useWindowSize } from "@/lib/hooks/useWindowsize";
import {CldImage} from "next-cloudinary";
import ImagePopUp from "@/components/ImagePopUp";
import Link from "next/link";

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
                    <h3 className="font-medium text-xl">DOEK</h3>
                    <p className="mt-3">
                        {t("doek.caption")}
                        <br /><br />
                        <i><Link href={"/melancholyarchive"} className= "underline"> {t("doek.subcaption")}</Link></i>
                        <br /><br />
                        {t("general.credits")} <i>{t("general.mies")} & {t("general.neeltje")}</i>
                        <br />
                        {t("doek.illustratie")} <i>{t("general.mies")} </i>
                        <br />
                        {t("doek.tekst")} <i>{t("general.neeltje")} </i>
                            <br />
                        <br />

                        <i>3.2021</i>
                    </p>
                </div>
                {/* Grote afbeelding rechts  */}
                {smallScreen && (
                    <div className={"col-12 justify-center flex"}>
                        <div className="flex ">
                            <video loop muted autoPlay>
                                <source
                                    src={
                                        "https://res.cloudinary.com/dwgsproch/video/upload/v1709930597/17%20MI_NE%202021%203%20-%20doek/MVI_0641_xcq80v.mp4"
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
                                "https://res.cloudinary.com/dwgsproch/image/upload/v1709930448/17%20MI_NE%202021%203%20-%20doek/DSC_0121_spdu0i.jpg"
                            }
                            alt={"foto1"}
                            width={250}
                            height={300}
                            className={"object-cover w-80 h-96"}
                            onClick={() => showModal("https://res.cloudinary.com/dwgsproch/image/upload/v1709930448/17%20MI_NE%202021%203%20-%20doek/DSC_0121_spdu0i.jpg")}

                        />
                    </div>
                    <div className="">
                        <CldImage
                            src={"https://res.cloudinary.com/dwgsproch/image/upload/v1709930412/17%20MI_NE%202021%203%20-%20doek/2021-03-31_13.34.38_zsgtaj.jpg"}
                            alt={"foto2"}
                            width={300}
                            height={400}
                            className={"object-cover w-80 h-96"}
                            onClick={() => showModal("https://res.cloudinary.com/dwgsproch/image/upload/v1709930412/17%20MI_NE%202021%203%20-%20doek/2021-03-31_13.34.38_zsgtaj.jpg")}

                        />
                    </div>
                    <div className="">
                        <CldImage
                            src={"https://res.cloudinary.com/dwgsproch/image/upload/v1709930415/17%20MI_NE%202021%203%20-%20doek/WhatsApp_Image_2022-02-28_at_14.33.34_3_zkt16n.jpg"}
                            alt={"foto3"}
                            width={600}
                            height={600}
                            className={"object-cover w-80 h-96"}
                            onClick={() => showModal("https://res.cloudinary.com/dwgsproch/image/upload/v1709930415/17%20MI_NE%202021%203%20-%20doek/WhatsApp_Image_2022-02-28_at_14.33.34_3_zkt16n.jpg")}

                        />
                    </div>
                    <div className="">
                        <CldImage
                            src={"https://res.cloudinary.com/dwgsproch/image/upload/v1709930409/17%20MI_NE%202021%203%20-%20doek/WhatsApp_Image_2022-02-28_at_14.28.55_btlsma.jpg"}
                            alt={"foto3"}
                            width={600}
                            height={600}
                            className={"object-cover w-80 h-96"}
                            onClick={() => showModal("https://res.cloudinary.com/dwgsproch/image/upload/v1709930409/17%20MI_NE%202021%203%20-%20doek/WhatsApp_Image_2022-02-28_at_14.28.55_btlsma.jpg")}

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
                                "https://res.cloudinary.com/dwgsproch/video/upload/v1709930597/17%20MI_NE%202021%203%20-%20doek/MVI_0641_xcq80v.mp4"
                            }
                        ></source>
                    </video>
                </div>
            )}
            <ImagePopUp hideDialog={() => setShow(false)} imageUrl={imageUrl} show={show} />
        </div>
    );
};

export default Page;
