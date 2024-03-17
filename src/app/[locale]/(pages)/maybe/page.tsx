"use client"

import React from 'react';
import {useI18n} from "../../../../../translations/client";


const page = () => {
    const t = useI18n();
    return (
        <div className="flex flex-row gap-10 col-12 m-10">
        <div>
          <p className="flex-row col-12 font-medium text-4xl mb-3 mt-10"> TORN MAYBE.. </p>
          <p className="flex-row col-12">
          <i>{t("maybe.caption")}</i> {t("maybe.subcaption")}<br /><br />
          {t("general.credits")} <i>{t("general.neeltje")}</i><br />
          {t("maybe.collab")} <i>{t("maybe.chloe")}</i><br /><br />
            <i>5.2021</i> </p> </div>
        </div>
    );
};

export default page;