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
                   <h3 className="font-medium text-xl">ON THE STREETS</h3>
                   <p className="mt-3">
                       {t("general.ongoing")}
                   </p>
               </div>
               {smallScreen && (
                   <div className={"col-12 justify-center flex"}>
                       <div className="flex ">
                           <Image
                               src={"https://res.cloudinary.com/dwgsproch/image/upload/v1710076526/27.1%20MI_NE%20-%20streets%202020%207/9d02e4c3-4ef9-4b14-95e6-454c19456a74_diejyq.jpg"}
                               alt={"street1"}
                               width={600}
                               height={700}
                           />
                       </div>
                   </div>
               )}
                       {/* Images */}
                       <div className={`flex-wrap flex gap-3 mt-10 ${smallScreen ? " justify-center" : "ml-6 justify-start"}`}>
                               <CldImage
                                   src={"https://res.cloudinary.com/dwgsproch/image/upload/v1710076528/27.1%20MI_NE%20-%20streets%202020%207/MN_streets_dx7pnn.jpg"}
                                   alt={"book1"}
                                   width={300}
                                   height={400}
                                   className="w-72 h-80 object-cover"
                               />
                               <CldImage
                                   src={"https://res.cloudinary.com/dwgsproch/image/upload/v1710076528/27.1%20MI_NE%20-%20streets%202020%207/6ab039cf-fd09-4204-8519-ac56535ce442_-_1_sf21qg.jpg"}
                                   alt={"book2"}
                                   width={300}
                                   height={400}
                                   className="w-72 h-80 object-cover"
                               />
                               <CldImage
                                   src={"https://res.cloudinary.com/dwgsproch/image/upload/v1710076527/27.1%20MI_NE%20-%20streets%202020%207/ed3be878-5ed8-4a56-b13e-d0ede80736a8_mudxvm.jpg"}
                                   alt={"book2"}
                                   width={300}
                                   height={400}
                                   className="w-72 h-80 object-cover"
                               />
                               <CldImage
                                   src={"https://res.cloudinary.com/dwgsproch/image/upload/v1711641356/27.1%20MI_NE%20-%20streets%202020%207/IMG_4339_rafeyk.heic"}
                                   alt={"book2"}
                                   width={300}
                                   height={400}
                                   className="w-72 h-80 object-cover"
                               />
                           <CldImage
                               src={"https://res.cloudinary.com/dwgsproch/image/upload/v1711641446/27.1%20MI_NE%20-%20streets%202020%207/preview_vesday.jpg"}
                               alt={"book2"}
                               width={300}
                               height={400}
                               className="w-72 h-80 object-cover"
                           />
                       </div>
           </div>
            {!smallScreen && (
                    <div className={`fixed right-0 justify-end flex col-6 p-0`}>
                        <img
                            src={"https://res.cloudinary.com/dwgsproch/image/upload/v1710076526/27.1%20MI_NE%20-%20streets%202020%207/9d02e4c3-4ef9-4b14-95e6-454c19456a74_diejyq.jpg"}
                            alt={"book1"}
                            className={"h-auto max-h-screen w-auto justify-end"}
                        />
                    </div>
            )}
        </div>
    );
};

export default Page;
