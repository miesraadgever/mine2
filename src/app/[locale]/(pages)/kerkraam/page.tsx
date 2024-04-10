"use client";

import React from "react";
import { useI18n } from "../../../../../translations/client";
import Image from "next/image";
import { useWindowSize } from "@/lib/hooks/useWindowsize";
import {CldImage} from "next-cloudinary";

const Page = () => {
    const t = useI18n();
    const windowSize = useWindowSize();
    const smallScreen = windowSize.width! < 800;

    return (
        <div className={`flex ${smallScreen ? "flex-col" : "flex-row"} col-12 `}>
           <div className={`flex flex-col ${smallScreen ? "col-12" : "col-6"}`}>
               {/* Text */}
               <div className={`${smallScreen ? "ml-2 mb-4" : "p-6 mb-4"} `}>
                   <h3 className="font-medium text-xl">KERKRAAM SERIE</h3>
                   <p className="mt-3">
                       {t("kerkraam.caption")} <br />
                       {t("kerkraam.subcaption")} <br /><br />
                       {t("kerkraam.text")} <i>{t("general.neeltje")}</i> <br />
                       {t("general.credits")} <i>{t("general.neeltje")}</i><br /><br />
                       01.2024
                   </p>
               </div>
               {/* Grote afbeelding rechts  */}
               {smallScreen && (
                   <div className={"col-12 justify-center flex "}>
                       <div className="flex ">
                           <Image
                               src={"https://res.cloudinary.com/dwgsproch/image/upload/v1712237815/NEELTJE%20-%20kerkraam%20serie/image000711_rjx4zs.jpg"}
                               alt={"raam"}
                               width={645}
                               height={750}
                           />
                       </div>
                   </div>
               )}
                       {/* Images */}
                       <div className={`flex-wrap flex gap-3 mt-10 ${smallScreen ? " justify-center" : "ml-6 justify-start"}`}>
                              <CldImage
                                   src={"https://res.cloudinary.com/dwgsproch/image/upload/v1712239667/NEELTJE%20-%20kerkraam%20serie/image00069_u1idj1.jpg"}
                                   alt={"raam1"}
                                   width={300}
                                   height={400}
                                   className="w-72 h-84 object-cover"
                               />
                               <CldImage
                                   src={"https://res.cloudinary.com/dwgsproch/image/upload/v1712239676/NEELTJE%20-%20kerkraam%20serie/image00075_ssayt2.jpg"}
                                   alt={"raam2"}
                                   width={300}
                                   height={400}
                                   className="w-72 h-84 object-cover"
                               />
                               <CldImage
                                   src={"https://res.cloudinary.com/dwgsproch/image/upload/v1712325378/NEELTJE%20-%20kerkraam%20serie/img20240405_13111055_jmhhbu.jpg"}
                                   alt={"raam3"}
                                   width={300}
                                   height={400}
                                   className="w-72 h-84 object-cover"
                               />
                               <CldImage
                                   src={"https://res.cloudinary.com/dwgsproch/image/upload/v1712325378/NEELTJE%20-%20kerkraam%20serie/img20240405_13103363_xpmghy.jpg"}
                                   alt={"raam4"}
                                   width={300}
                                   height={400}
                                   className="w-72 h-84 object-cover"
                               />
                                <CldImage
                                   src={"https://res.cloudinary.com/dwgsproch/image/upload/v1712325382/NEELTJE%20-%20kerkraam%20serie/img20240405_13125317_ro0lrl.jpg"}
                                   alt={"raam5"}
                                   width={300}
                                   height={400}
                                   className="w-72 h-84 object-cover"
                               />
                                <CldImage
                                   src={"https://res.cloudinary.com/dwgsproch/image/upload/v1712325379/NEELTJE%20-%20kerkraam%20serie/img20240405_13114241_mwcfig.jpg"}
                                   alt={"raam6"}
                                   width={300}
                                   height={400}
                                   className="w-72 h-84 object-cover"
                               />
                                <CldImage
                                   src={"https://res.cloudinary.com/dwgsproch/image/upload/v1712325380/NEELTJE%20-%20kerkraam%20serie/img20240405_13122504_fblx5j.jpg"}
                                   alt={"raam7"}
                                   width={300}
                                   height={400}
                                   className="w-72 h-84 object-cover"
                               />
                       </div>
           </div>
            {/* Grote afbeelding rechts  */}

            {!smallScreen && (
                    <div className={`fixed right-0 justify-end flex col-4 p-0`}>
                        <Image
                               src={"https://res.cloudinary.com/dwgsproch/image/upload/v1712237815/NEELTJE%20-%20kerkraam%20serie/image000711_rjx4zs.jpg"}
                               alt={"raam"}
                               width={645}
                               height={750}
                           />
                    </div>
            )}
        </div>
    );
};

export default Page;
