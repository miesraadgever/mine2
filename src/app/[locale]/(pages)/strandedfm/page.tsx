"use client";

import React from "react";
import { useI18n } from "../../../../../translations/client";
import AudioPlayer from "@/components/AudioPlayer";
import { useWindowSize } from "@/lib/hooks/useWindowsize";

const Page = () => {
    const t = useI18n();
    const windowSize = useWindowSize();
    const smallScreen = windowSize.width! < 950;

    return (
        <div
            className={`flex ${smallScreen ? "flex-col " : "flex-row"} columns-2 gap-10`}
        >
            <div
                className={`flex-column grow-0 ${smallScreen ? "w-[100] " : "w-[35%]"}  ps-10 pt-10`}
            >
                <h3 className="font-medium text-xl">STRANDEDFM</h3>
                <p className="mt-3">
                    {t("strandedFM.caption")}
                    <br></br>
                    <a href="https://soundcloud.com/strandedfm/mi_ne-radio-september-21st-2024-stranded-fm" target="_blank" className={
                        "underline"
                    }>
                        {t("audio.listen")}
                    </a>
                    <br />
                    <br />
                    {t("general.credits")}
                    <i> mies raadgever & neeltje de jong</i>
                    <br />
                    <br />
                    {t("general.ongoing")}
                </p>
            </div>

            <div
                className={`flex flex-wrap grow-0 w-[100%] gap-6 pt-10 ${smallScreen && "justify-center"}`}
            >
                <AudioPlayer
                    src={
                        "https://res.cloudinary.com/dwgsproch/video/upload/v1727546351/strandedFM/mi_ne_radio___September_21st_2024___Stranded_FM_1_lxld7q.mp3"
                    }
                    image={"https://res.cloudinary.com/dwgsproch/image/upload/v1727545674/strandedFM/cover_wvuf6n.png"}
                />
            </div>
        </div>
    );
};

export default Page;
