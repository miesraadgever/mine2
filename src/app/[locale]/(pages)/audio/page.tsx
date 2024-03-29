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
        <h3 className="font-medium text-xl">AUDIO</h3>
        <p className="mt-3">
          {t("audio.caption")}
          <br></br>
          <a href="https://soundcloud.com/mies-neeltje" target="_blank">
            {t("audio.listen")}
          </a>
          <br />
          <br />
          {t("general.credits")} <i>{t("general.mies")}</i>
          <br />
          <br />
          <i>{t("general.ongoing")}</i>
        </p>
      </div>

      <div
        className={`flex flex-wrap grow-0 w-[100%] gap-6 pt-10 ${smallScreen && "justify-center"}`}
      >
        <AudioPlayer
          src={
            "https://res.cloudinary.com/dwgsproch/video/upload/v1710268320/audio/23-01-24-comp_jpysle.mp3"
          }
          image={"/23-01-24.png"}
        />
        <AudioPlayer
          src={
            "https://res.cloudinary.com/dwgsproch/video/upload/v1710269639/audio/14-04-23-comp_tucctb.mp3"
          }
          image={"/14-04-23.png"}
        />
        <AudioPlayer
          src={
            "https://res.cloudinary.com/dwgsproch/video/upload/v1710261499/audio/mix-sots_ufeflk.mp3"
          }
          image={"/sots.JPG"}
        />
        <AudioPlayer
          src={
            "https://res.cloudinary.com/dwgsproch/video/upload/v1710261336/audio/12-03-2023_paplfa.mp3"
          }
          image={"/12-03-2023.png"}
        />
        <AudioPlayer
          src={
            "https://res.cloudinary.com/dwgsproch/video/upload/v1710260791/audio/18-02-23_fjdwkv.mp3"
          }
          image={"/18-02-23.png"}
        />
      </div>
    </div>
  );
};

export default Page;
