"use client";

import React, {useState} from "react";
import { useI18n } from "../../../../../../translations/client";
import Image from "next/image";
import { useWindowSize } from "@/lib/hooks/useWindowsize";
import {CldImage} from "next-cloudinary";
import Link from "next/link";
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
                    <h3 className="font-medium text-xl">SCREENING MELANCHOLY ARCHIVE</h3>
                    <p className="mt-3">
                        {t("screening.caption")}
                        <br />
                        {t("screening.date")}
                        <br />
                        <br />
                        {t("general.credits")}<i> mies raadgever & neeltje de jong</i>
                        <br />
                        <br />
                        <i>3.2024</i>
                    </p>
                </div>
                {/* Grote afbeelding rechts  */}
                {smallScreen && (
                    <div className={"col-12 justify-center flex"}>
                        <div className="flex ">
                            <CldImage
                                src={
                                    "https://res.cloudinary.com/dwgsproch/image/upload/v1712239502/MI_NE%20-%20MELANCHOLY%20ARCHIVE/IMG_8607_mhyaks.jpg"
                                }
                                alt={"ma-1"}
                                width={500}
                                height={600}
                                onClick={() => showModal("https://res.cloudinary.com/dwgsproch/image/upload/v1712239502/MI_NE%20-%20MELANCHOLY%20ARCHIVE/IMG_8607_mhyaks.jpg")}
                            />
                        </div>
                    </div>
                )}
                {/* Images */}
                <div className={`flex-wrap flex gap-2 mt-10 ${smallScreen ? " justify-center" : "ml-6 justify-start"}`}>
                    <div className="">
                        <CldImage
                            src={"https://res.cloudinary.com/dwgsproch/image/upload/v1712240603/MI_NE%20-%20MELANCHOLY%20ARCHIVE/IMG_8610_fysksz.jpg"                            }
                            alt={"ma-1"}
                            width={500}
                            height={600}
                            className={"object-cover w-72 h-80"}
                            onClick={() => showModal("https://res.cloudinary.com/dwgsproch/image/upload/v1712240603/MI_NE%20-%20MELANCHOLY%20ARCHIVE/IMG_8610_fysksz.jpg")}
                        />
                    </div>
                    <div className="">
                        <CldImage
                            src={
                                "https://res.cloudinary.com/dwgsproch/image/upload/v1712239489/MI_NE%20-%20MELANCHOLY%20ARCHIVE/IMG_5214_tfptxz.jpg"                            }
                            alt={"ma-2"}
                            width={500}
                            height={600}
                            className={"object-cover w-72 h-80"}
                            onClick={() => showModal("https://res.cloudinary.com/dwgsproch/image/upload/v1712239489/MI_NE%20-%20MELANCHOLY%20ARCHIVE/IMG_5214_tfptxz.jpg")}
                        />
                    </div>
                    <div className="">
                        <CldImage
                            src={
                                "https://res.cloudinary.com/dwgsproch/image/upload/v1712239478/MI_NE%20-%20MELANCHOLY%20ARCHIVE/IMG_5223_ru3mwn.jpg"
                            }
                            alt={"ma-3"}
                            width={500}
                            height={600}
                            className={"object-cover w-72 h-80"}
                            onClick={() => showModal("https://res.cloudinary.com/dwgsproch/image/upload/v1712239478/MI_NE%20-%20MELANCHOLY%20ARCHIVE/IMG_5223_ru3mwn.jpg")}
                        />
                    </div>
                    <div className="">
                        <CldImage
                            src={
                                "https://res.cloudinary.com/dwgsproch/image/upload/v1712239485/MI_NE%20-%20MELANCHOLY%20ARCHIVE/IMG_5260_kqdkqo.jpg"
                            }
                            alt={"ma-3"}
                            width={500}
                            height={600}
                            className={"object-cover w-72 h-80"}
                            onClick={() => showModal("https://res.cloudinary.com/dwgsproch/image/upload/v1712239485/MI_NE%20-%20MELANCHOLY%20ARCHIVE/IMG_5260_kqdkqo.jpg")}
                        />
                    </div>
                </div>
            </div>
            {/* Grote afbeelding rechts  */}
            {!smallScreen && (
                <div className={`fixed right-0 justify-end flex col-6`}>
                    <CldImage
                        src={
                            "https://res.cloudinary.com/dwgsproch/image/upload/v1712239502/MI_NE%20-%20MELANCHOLY%20ARCHIVE/IMG_8607_mhyaks.jpg"
                        }
                        alt={"ma-1"}
                        width={500}
                        height={650}
                        onClick={() => showModal("https://res.cloudinary.com/dwgsproch/image/upload/v1712239502/MI_NE%20-%20MELANCHOLY%20ARCHIVE/IMG_8607_mhyaks.jpg")}

                    />
                </div>
            )}
            <ImagePopUp hideDialog={() => setShow(false)} imageUrl={imageUrl} show={show} />
        </div>
    );
};

export default Page;
