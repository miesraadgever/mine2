"use client";

import React from "react";
import { useI18n } from "../../../../../translations/client";
import Image from "next/image";
import {useWindowSize} from "@/lib/hooks/useWindowsize";

const Page = () => {
  const t = useI18n();
    const windowSize = useWindowSize();
    const smallScreen = windowSize.width! < 700;

  return (
    <div className={`flex ${smallScreen ? "flex-col " : "flex-row"} columns-2 gap-10`}>
      <div className={`flex-column grow-0 ${smallScreen ? "w-[100] " : "w-[35%]"}  ps-10 pt-10`}>
        <h3 className="font-medium text-xl">LOST BOOKS</h3>
        <p className="mt-3">
          <i>{t("florilegium.caption")}</i> <br />
          {t("florilegium.subcaption")} <br /><br />
          {t("general.credits")} <i>{t("general.neeltje")}</i><br /><br />
            <i>1.2020</i>
        </p>
      </div>
      <div className={`flex flex-wrap w-[100%] gap-2 pt-10 ${smallScreen && "justify-center"}`}>
        <Image
          src={
            "https://res.cloudinary.com/dwgsproch/image/upload/v1709926730/4%20NEELTJE%202020%201%20-%20florilegium%20blonde/Naamloos_2_oodb4v.jpg"
          }
          alt={"book1"}
          width={300}
          height={400}
        />
        <Image
          src={
            "https://res.cloudinary.com/dwgsproch/image/upload/v1709926736/4%20NEELTJE%202020%201%20-%20florilegium%20blonde/Naamloos_7_hefoxw.jpg"
          }
          alt={"book1"}
          width={300}
          height={400}
        />
        <Image
          src={
            "https://res.cloudinary.com/dwgsproch/image/upload/v1709926485/4%20NEELTJE%202020%201%20-%20florilegium%20blonde/Naamloos_8_hiey10.jpg"
          }
          alt={"book1"}
          width={300}
          height={400}
        />
        <Image
          src={
            "https://res.cloudinary.com/dwgsproch/image/upload/v1709926726/4%20NEELTJE%202020%201%20-%20florilegium%20blonde/Naamloos_9_yqhbrm.jpg"
          }
          alt={"book1"}
          width={300}
          height={400}
        />
         <Image
          src={
            "https://res.cloudinary.com/dwgsproch/image/upload/v1709926485/4%20NEELTJE%202020%201%20-%20florilegium%20blonde/Naamloos_12_npafka.jpg"
          }
          alt={"book1"}
          width={300}
          height={400}
        />
        <Image
          src={
            "https://res.cloudinary.com/dwgsproch/image/upload/v1710689882/4%20NEELTJE%202020%201%20-%20florilegium%20blonde/Naamloos_3_j0mtpc.jpg"
          }
          alt={"book1"}
          width={300}
          height={400}
        />
      </div>
    </div>
  );
};

export default Page;