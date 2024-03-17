"use client"

import React from "react";
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
          <br /><br />
          {t("general.credits")} <i>{t("general.mies")}</i><br /><br />
          <i>{t("general.ongoing")}</i>
        </p>
      </div>
      <div className={"flex flex-wrap grow-0 w-[70%] gap-6 pt-10"}>

      </div>
    </div>
  );
};

export default Page;
