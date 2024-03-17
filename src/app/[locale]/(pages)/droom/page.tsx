"use client"

import React from 'react';
import {useI18n} from "../../../../../translations/client";


const page = () => {
    const t = useI18n();
    return (
        <div className="flex flex-row gap-5 col-12">
            <div><p className="col-3 font-medium text-4xl p-0 mb-3 mt-10 ml-10"> DROOM ARCHIEF </p>
            <p className="ml-10">
            {t("droom.caption")}<br />
            {t("droom.materiaal")}<br /><br />
            {t("general.credits")} <i>{t("general.neeltje")}</i><br /><br />
            <i>2.2018</i> </p> </div>
            <div className={"flex flex-row col-9 gap-5 "}>
                <video className={"w-[55%] col-3"} loop muted autoPlay>
                    <source src={"https://res.cloudinary.com/dwgsproch/video/upload/v1709925368/2%20NEELTJE%202018%202%20-%20droom%20archief/1.mp4"}></source>
                </video>
                <video className={"w-[55%] col-3"} loop muted autoPlay>
                    <source src={"https://res.cloudinary.com/dwgsproch/video/upload/v1709925368/2%20NEELTJE%202018%202%20-%20droom%20archief/2.mp4"}></source>
                </video>
                <video className={"w-[55%] col-3"} loop muted autoPlay>
                    <source src={"https://res.cloudinary.com/dwgsproch/video/upload/v1709925368/2%20NEELTJE%202018%202%20-%20droom%20archief/3.mp4"}></source>
                </video>
                </div>
        </div>
    );
};

export default page;