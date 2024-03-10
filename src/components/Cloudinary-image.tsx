"use client";

import React from "react";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import { Size, useWindowSize } from "@/lib/hooks/useWindowsize";

const CloudinaryImage = (props: any) => {
  const windowSize: Size = useWindowSize();
  const smallScreen = windowSize.width! < 445;

  return (
    <div className="flex flex-col">
      <Link href={props.caption}>
        <CldImage
          className={`object-cover ${smallScreen ? "w-24 h-24" : "w-48 h-48"}`}
          {...props}
        />
      </Link>
      <div
        className={`flex flex-row ${smallScreen ? "w-24" : "w-48"} justify-between font-light text-sm`}
      >
        <Link href={props.caption}>{props.title}</Link>
        <div>{props.alt}</div>
      </div>
    </div>
  );
};

export default CloudinaryImage;
