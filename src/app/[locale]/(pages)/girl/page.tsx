"use client"

import React from 'react';
import {useI18n} from "../../../../../translations/client";


const page = () => {
    const t = useI18n();
    return (
        <div className="flex flex-row gap-10 col-12 m-10">
        <div>
          <p className="flex-row col-12 font-medium text-4xl mb-3 mt-10"> TORN TORN TORN, AS IS LIFE </p>
          <p className="flex-row col-12">
          <i>{t("girl.caption")}</i> {t("girl.subcaption")}<br /><br />
          {t("general.credits")} <i>{t("general.neeltje")}</i><br /><br />
            <i>9.2021</i> </p> </div>
        </div>
    );
};

export default page;