"use client"

import React from 'react';
import {useI18n} from "../../../../../translations/client";


const page = () => {
    const t = useI18n();
    return (
        <div className="flex flex-row gap-10 col-12 m-10">
        <div>
          <p className="flex-row col-12 font-medium text-4xl mb-3 mt-10"> ZINNEN IN EEN ALLEDAAGSE WAAS </p>
          <p className="flex-row col-12">
          {t("waas.concept")} <i>{t("waas.credits")}</i><br /><br />
          {t("waas.tekst")} <i>{t("waas.igor")}</i><br />
          {t("waas.visuals")} <i>{t("general.mies")}</i><br /><br />
            <i>9.2021</i> </p> </div>
        </div>
    );
};

export default page;