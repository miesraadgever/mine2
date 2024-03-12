"use client";

import React from "react";
import { useI18n } from "../../../../../translations/client";
import {useWindowSize} from "@/lib/hooks/useWindowsize";

const Page = () => {
  const t = useI18n();
    const windowSize = useWindowSize();
    const smallScreen = windowSize.width! < 600;

  return (
      <div className={`flex ${smallScreen ? "flex-column " : "flex-row"} columns-2 gap-10`}>
          <div className={`flex-column grow-0 ${smallScreen ? "w-[100] " : "w-[25%]"}  ps-10 pt-10`}>
        <h3 className="font-medium text-xl">VIDEO</h3>
        <p className="mt-3">
          {t("video.caption")}
          <br></br>
          <a href="https://soundcloud.com/mies-neeltje" target="_blank">
            {t("video.watch")}
          </a>
          <br></br>
          <br></br>
          {t("general.ongoing")}
        </p>
      </div>
          <div className={`flex flex-wrap grow-0 w-[100%] gap-6 pt-10 ${smallScreen && "justify-center"}`}>
        <iframe
          width="800"
          height="500"
          src="https://www.youtube.com/embed/ayPzXZ6Gg6M?si=GMXn8mMxz8ZOrOOM"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <iframe
          width="800"
          height="500"
          src="https://www.youtube.com/embed/2suaYMbqBtQ?si=jwXF6BG366_izvEN"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Page;
