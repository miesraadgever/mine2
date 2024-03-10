"use client"

import React from "react";
import AudioPlayer from "@/components/AudioPlayer";
import cover180223 from "../../../../../public/18-02-23.png";
import cover12032023 from "../../../../../public/12-03-2023.png";
import cover230124 from "../../../../../public/23-01-24.png";
import cover140423 from "../../../../../public/14-04-23.png";
import {useI18n} from "../../../../../translations/client";

const Page = () => {
  const t = useI18n();


  return (
    <div className={"flex flex-row columns-2 gap-10"}>
      <div className="flex-column grow-0 w-[25%] ps-10 pt-10">
        <h3 className="font-medium text-xl">AUDIO</h3>
        <p className="mt-3">
          {t("audio.caption")}
          <br></br>
          <a href="https://soundcloud.com/mies-neeltje" target="_blank">
            {t("audio.listen")}
          </a>
          <br></br>
          <br></br>
          {t("general.ongoing")}
        </p>
      </div>
      <div className={"flex flex-wrap grow-0 w-[70%] gap-6 pt-10"}>
        <AudioPlayer src={""} image={cover230124}></AudioPlayer>
        <AudioPlayer src={""} image={cover140423}></AudioPlayer>
        <AudioPlayer src={""} image={""}></AudioPlayer>
        <AudioPlayer src={""} image={cover180223}></AudioPlayer>
        <AudioPlayer src={""} image={cover12032023}></AudioPlayer>
      </div>
    </div>
  );
};

export default Page;
