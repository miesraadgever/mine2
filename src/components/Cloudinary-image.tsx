"use client";

import React from "react";
import { CldImage } from "next-cloudinary";
import Link from "next/link";

const CloudinaryImage = (props: any) => {
  return (
    <div className="flex flex-col">
      <Link href={props.title}>
        <CldImage className={`object-cover h-${props.cover} w-${props.cover}`} {...props} />
      </Link>
      <div className={`flex flex-row w-${props.cover} justify-between`}>
        <div>
            <Link href={props.title}>{props.title}</Link>
        </div>
        <div>
          {props.alt}
        </div>
      </div>
    </div>
  );
};

export default CloudinaryImage;
