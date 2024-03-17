"use client"

import React from 'react';
import {useI18n} from "../../../../../translations/client";


const page = () => {
    const t = useI18n();
    return (
        <div className="flex flex-row gap-10 col-12 m-10">
        <div>
          <p className="flex-row col-12 font-medium text-4xl mb-3 mt-10"> BRAIDING IN SILENCE </p>
          <p className="flex-row col-12">
          {t("braiding.caption")}<br />
          <i>{t("braiding.subcaption")}</i><br /><br />
          {t("braiding.credits")} <i>{t("general.neeltje")}</i><br /><br />
            <i>6.2022</i> </p> </div>
        </div>
    );
};

export default page;