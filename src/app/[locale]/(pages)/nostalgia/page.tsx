"use client"

import React from 'react';
import {useI18n} from "../../../../../translations/client";


const page = () => {
    const t = useI18n();
    return (
        <div className="flex flex-row gap-10 col-12 m-10">
        <div>
          <p className="flex-row col-12 font-medium text-4xl mb-3 mt-10"> NOSTALGIA </p>
          <p className="flex-row col-12">
          {t("nostalgia.caption")} <br />
          <i>{t("nostalgia.subcaption")}</i> <br /><br />
          {t("nostalgia.credits")} <i>{t("general.mi_ne")}</i><br />
          {t("nostalgia.foto")} <i>{t("nostalgia.lisanne")}</i><br />
          {t("nostalgia.model")} <i>{t("nostalgia.loek")}</i><br /><br />
            <i>1.2021</i> </p> </div>
        </div>
            );
        };
        
        export default page;