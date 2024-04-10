"use client";

import React from "react";
import { useI18n } from "../../../../../translations/client";
import Image from "next/image";
import { useWindowSize } from "@/lib/hooks/useWindowsize";
import {CldImage} from "next-cloudinary";
import Link from "next/link";

const Page = () => {
    const t = useI18n();
    const windowSize = useWindowSize();
    const smallScreen = windowSize.width! < 800;

    return (
        <div className={`flex ${smallScreen ? "flex-col" : "flex-row"} col-12 `}>
            <div className={`flex flex-col ${smallScreen ? "col-12" : "col-6"}`}>
                {/* Text */}
                <div className={`${smallScreen ? "ml-2 mb-4" : "p-6 mb-4"} `}>
                    <h3 className="font-medium text-xl">CC1996-FDALC1992</h3>
                    <p className="mt-3">
                        {t("cc.caption")}
                        <br />
                        {t("general.prijsaanvraag")}
                        <br />
                        <br />
                        {t("general.credits")}<i> mies raadgever & neeltje de jong</i>
                        <br />
                        <br />
                        <i>1.2021</i>
                    </p>
                </div>
                {/* Grote afbeelding rechts  */}
                {smallScreen && (
                    <div className={"col-12 justify-center flex"}>
                        <div className="flex ">
                            <CldImage
                                src={
                                    "https://res.cloudinary.com/dwgsproch/image/upload/v1710074528/12%20MI_NE%202021%201%20-%20CC%201996%20FDALC%201992/CCFDALC.png"
                                }
                                alt={"ma-1"}
                                width={500}
                                height={600}
                            />
                        </div>
                    </div>
                )}
                {/* Images */}
                <div className={`flex-wrap flex gap-3 ${smallScreen ? " justify-center" : "ml-6 justify-center"}`}>
                    <div className="">
                        <CldImage
                            src={"https://res.cloudinary.com/dwgsproch/image/upload/v1710074528/12%20MI_NE%202021%201%20-%20CC%201996%20FDALC%201992/FDALC1992.png"                            }
                            alt={"ma-1"}
                            width={400}
                            height={500}

                        />
                    </div>
                    <div className="">
                        <CldImage
                            src={
                                "https://res.cloudinary.com/dwgsproch/image/upload/v1710074526/12%20MI_NE%202021%201%20-%20CC%201996%20FDALC%201992/CC1996.jpg"                            }
                            alt={"ma-2"}
                            width={400}
                            height={500}

                        />
                    </div>
                </div>
            </div>
            {/* Grote afbeelding rechts  */}
            {!smallScreen && (
                <div className={`fixed right-0 justify-end flex col-6`}>
                    <CldImage
                        src={
                            "https://res.cloudinary.com/dwgsproch/image/upload/v1710074528/12%20MI_NE%202021%201%20-%20CC%201996%20FDALC%201992/CCFDALC.png"
                        }
                        alt={"ma-1"}
                        width={700}
                        height={800}
                    />
                </div>
            )}
        </div>
    );
};

export default Page;
