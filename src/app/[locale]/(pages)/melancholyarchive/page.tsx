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
                    <h3 className="font-medium text-xl">MELANCHOLY ARCHIVE</h3>
                    <p className="mt-3">
                        {t("melancholy.caption")}
                        <br />
                        <br />
                        {t("melancholy.caption2")}
                        <br />
                        <br/>
                        {t("melancholy.caption3")}
                        <br />
                        <br/>
                        <Link href={"melancholyarchive/screening"}>{t("melancholy.screening")}</Link>
                        <br />
                        <br/>
                        {t("general.credits")}<i> mies raadgever & neeltje de jong</i>
                        <br />
                        {t("melancholy.creditsSound")}<i> ethel cain</i>
                        <br />
                        <br />
                        <i>3.2024</i>
                    </p>
                </div>
                {/* Grote afbeelding rechts  */}
                {smallScreen && (
                    <div className={"col-12 justify-center flex"}>
                        <div className="flex ">
                            <iframe width="960" height="615" src="https://www.youtube.com/embed/ULmiVXUV8AM?si=1mNU6Kkue2dJ336F"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </div>
                )}
                {/* Images */}
                <div className={`flex-wrap flex gap-2 mt-10 ${smallScreen ? " justify-center" : "ml-6 justify-start"}`}>
                    <div className="">
                        <CldImage
                            src={
                                "https://res.cloudinary.com/dwgsproch/image/upload/v1712251880/MI_NE%20-%20MELANCHOLY%20ARCHIVE/IMG_4265_lh0rzd.jpg"
                            }
                            alt={"ma-1"}
                            width={500}
                            height={600}
                            className={"object-cover w-72 h-72"}

                        />
                    </div>
                    <div className="">
                        <CldImage
                            src={
                                "https://res.cloudinary.com/dwgsproch/image/upload/v1712252870/MI_NE%20-%20MELANCHOLY%20ARCHIVE/IMG_4311_zizr9r.jpg"
                            }
                            alt={"ma-2"}
                            width={500}
                            height={600}
                            className={"object-cover w-72 h-72"}

                        />
                    </div>
                    <div className="">
                        <CldImage
                            src={
                                "https://res.cloudinary.com/dwgsproch/image/upload/v1712251885/MI_NE%20-%20MELANCHOLY%20ARCHIVE/IMG_4346_mjh6ge.jpg"
                            }
                            alt={"ma-3"}
                            width={500}
                            height={600}
                            className={"object-cover w-72 h-72"}

                        />
                    </div>
                    <div className="">
                        <CldImage
                            src={
                                "https://res.cloudinary.com/dwgsproch/image/upload/v1712251884/MI_NE%20-%20MELANCHOLY%20ARCHIVE/IMG_4336_cunskt.jpg"
                            }
                            alt={"ma-3"}
                            width={500}
                            height={600}
                            className={"object-cover w-72 h-72"}
                        />
                    </div>
                </div>
            </div>
            {/* Grote afbeelding rechts  */}
            {!smallScreen && (
                <div className={`fixed right-0 justify-end flex col-6`}>
                    <iframe src="https://www.youtube.com/embed/qPe06K-rV1Q?si=5jZ0mw2AoBIGYuNV"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            )}
        </div>
    );
};

export default Page;